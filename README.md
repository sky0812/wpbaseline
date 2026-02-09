# wpbaseline

minimal wordpress starter theme for personal/hobby projects. built on tailpress.

## features

- tailwind css 3.4
- live reload on save (browser-sync)
- laravel mix for css/js compilation
- clean, purged production css
- mobile-first by default
- reusable template-parts structure
- multisite ready
- multilanguage ready

## tech stack

- php
- tailwind css
- laravel mix
- postcss
- browser-sync

## requirements

- node.js 18+
- npm
- local wordpress environment (no docker needed)

## setup

  ```bash                                                                                                                                                                      
  cd wp-content/themes/skyhighweb                                                                                                                                              
  npm install                                                                                                                                                                  
  npm run watch
```

## scripts

compile assets
  ```bash                                                                                                                                                                      
  npm run dev                                                                                                                                                                  
  ```                                                                                                                                                                          

watch + live reload
  ```bash                                                                                                                                                                      
  npm run watch                                                                                                                                                                
  ```                                                                                                                                                                          

hot module replacement
  ```bash                                                                                                                                                                      
  npm run hot                                                                                                                                                                  
  ```                                                                                                                                                                          

minified production build
  ```bash                                                                                                                                                                      
  npm run production                                                                                                                                                           
  ```            

## recommended plugins

not included in the repo. install separately based on project needs.

### seo

- yoast seo - https://wordpress.org/plugins/wordpress-seo/

### forms

- contact form 7 - https://wordpress.org/plugins/contact-form-7/
- flamingo - https://wordpress.org/plugins/flamingo/

### spam protection

- akismet - https://wordpress.org/plugins/akismet/
- hcaptcha - https://wordpress.org/plugins/hcaptcha-for-forms-and-more/

### multilanguage

- wpml (paid) - https://wpml.org/
- polylang (free) - https://wordpress.org/plugins/polylang/

### performance

- wp super cache - https://wordpress.org/plugins/wp-super-cache/

### utilities

- acf - https://wordpress.org/plugins/advanced-custom-fields/
- redirection - https://wordpress.org/plugins/redirection/
- safe svg - https://wordpress.org/plugins/safe-svg/

## credits

based on tailpress by jeffrey van rossum - https://github.com/jeffreyvr/tailpress    
