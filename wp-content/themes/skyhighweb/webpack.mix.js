let mix = require('laravel-mix');
let path = require('path');

mix.setResourceRoot('../');
mix.setPublicPath(path.resolve('./'));

mix.webpackConfig({
  watchOptions: {
    ignored: [
      path.posix.resolve(__dirname, './node_modules'),
      path.posix.resolve(__dirname, './css'),
      path.posix.resolve(__dirname, './js')
    ]
  }
});

mix.js('resources/js/app.js', 'js');

mix.postCss("resources/css/app.css", "css");

mix.postCss("resources/css/editor-style.css", "css");

mix.browserSync({
  proxy: 'http://wpbaseline.localhost/',
  host: 'wpbaseline.localhost',
  open: 'external',
  notify: false,
  injectChanges: true,
  reloadDelay: 3000,
  files: [
    {
      match: [
        "**/*.php",
        "**/resources/**",
      ],
      fn: function (event, file) {
        this.reload()
      }
    }
  ]
});

if (mix.inProduction()) {
  mix.version();
} else {
  mix.options({manifest: false});
}
