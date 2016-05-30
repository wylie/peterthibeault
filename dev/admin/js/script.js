
//Load common code that includes config, then load the app logic for this page.
requirejs(['config'], function (config) {
    requirejs(['jquery']);
    requirejs(['handlebars']);
    requirejs(['handlebarsintl']);
    requirejs(['init']);
});
