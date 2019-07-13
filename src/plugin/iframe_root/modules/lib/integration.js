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

            // this is the channel for this window.
            // this.channel = new WindowChannel.Channel({
            //     window: this.rootWindow,
            //     host: document.location.origin
            //     // recieveFor: [this.id],
            //     // clientId: this.iframe.id,
            //     // hostId: this.id
            // });

            // this.performanceMonitoringListener = null;

            // // This is the channel for the window containing this iframe.
            // this.hostChannel = new WindowChannel.Channel({
            //     window: this.rootWindow.parent,
            //     host: this.hostParams.parentHost,
            //     channelId: this.hostParams.channelId
            // });

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

        stop() {}
    }

    return Integration;
});
