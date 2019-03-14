# How to Iframe

How to convert an integrated plugin into an iframe hosted plugin.

##

-   move plugin source into subfolder iframe src/plugin/iframe_root

    -   modules
    -   resources

-   if a test directory, leave it as is.

-   create new modules directory

-   to it, add iframer.js, panel.js, panel.css

-   hmm: what to do about plugins which make extensive use of config.yml's widget mappings?

-   modify original config.yml to invoke panel.js as the entrypoint

-   add index.html and index.css to iframe_root

    -   need to have basic versions of these available
    -   the index.html needs to set up the iframe styles to operate within the ui's content area - full height.
    -   iframe should have hello world content only at this point

-   common styles?

    -   fonts: oxygen, roboto

-   with basics in place, add the plugin back into kbase-ui, and restart kbase-ui with the plugin specific for overlay

    -   kbase-ui: config/app/dev/plugins.yml, config/app/prod/plugins.yml
    -   if on menu config/app/dev/services.yml, config/app/prod/services.yml

-   now add the app wrapper. all existing plugins other than orgs are amd-based, so we need to first get requirejs up and running.

-   copy bower.json from the top level into src/plugin/iframe_root, or create a new one.

-   ensure require.js is in there

-   create npm config, package.json. npm init. We need this for tool support.
-   add bower, either directly to package.json devDependencies section, or by npm install --save-dev bower

-   ensure node_modules and bower_components are in .gitignore

-   install deps

```
./npm/.bin/bower install
```

-   ensure up to date

```
./node_modules/.bin/bower install
./node_modules/.bin/bower list
```

-   this is the way to start the amd app:

```
<script src="./bower_components/requirejs/require.js" data-main="main"></script>
```

### iframer.js

### panel.js

For a simple iframe-based plugin, the panel's main job is to to package up parameters for the app inside the iframe to utilize. It also sets the ui title in the header. This forms the interface, one way, between the ui and the plugin app.
