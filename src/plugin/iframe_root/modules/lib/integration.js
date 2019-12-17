define(['./windowChannel', './runtime'], (WindowChannel, Runtime) => {
    'use strict';

    class Integration {
        constructor({ rootWindow }) {
            this.rootWindow = rootWindow;
            this.container = rootWindow.document.body;
            // channelId, frameId, hostId, parentHost
            this.hostParams = this.getParamsFromIFrame();
            this.hostChannelId = this.hostParams.channelId;

            // The original params from the plugin (taken from the url)
            this.pluginParams = this.hostParams.params;

            this.authorized = null;

            // This was one of the first plugins converted -- this and some other 
            // implementations were refactored later ... but it does work.
            this.channel = new WindowChannel.BidirectionalWindowChannel({
                on: this.rootWindow,
                host: document.location.origin,
                to: this.hostChannelId
            });
        }

        getParamsFromIFrame() {
            if (!this.rootWindow.frameElement.hasAttribute('data-params')) {
                throw new Error('No params found in window!!');
            }
            return JSON.parse(decodeURIComponent(this.rootWindow.frameElement.getAttribute('data-params')));
        }

        start() {
            this.channel.start();

            this.channel.on('start', (payload) => {
                try {
                    const { token, username, config, realname, email } = payload;
                    if (token) {
                        this.authorization = { token, username, realname, email };
                    } else {
                        this.authorization = null;
                    }
                    this.token = token;
                    this.username = username;
                    this.config = config;
                    this.authorized = token ? true : false;

                    this.runtime = new Runtime({ config, token, username, realname, email });
                } catch (ex) {
                    this.channel.send('start-error', {
                        message: ex.message
                    });
                }

                this.channel.send('started');
                // this.channel.send('notification', {
                //     type: 'info',
                //     icon: 'info-circle',
                //     message: 'hi! now this is a longer message to see what happens when we receive a very long message',
                //     description: 'Greetings from the dashboard'
                // });
            });

            window.document.addEventListener('click', () => {
                this.channel.send('clicked', {});
            });

            // Sending 'ready' with our channel id and host name allows the
            // enclosing app (window) to send us messages on our very own channel.
            // We could just use the host's channel, have all sends and receives
            // on the same channel, with control via the channel id. However, there is a risk
            // the the channels will listen on for the same message ... unlikely though.
            // Still, it would be odd for one window to listen for messages on another...
            this.channel.send('ready', {
                channelId: this.channel.id,
                channelHost: this.channel.host
            });
        }

        stop() { }
    }

    return Integration;
});
