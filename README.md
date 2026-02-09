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
                                                                                                                                                                               
  scripts                                                                                                                                                                      
  ┌────────────────────┬───────────────────────────┐                                                                                                                           
  │      command       │        description        │                                                                                                                           
  ├────────────────────┼───────────────────────────┤                                                                                                                           
  │ npm run dev        │ compile assets            │                                                                                                                           
  ├────────────────────┼───────────────────────────┤                                                                                                                           
  │ npm run watch      │ watch + live reload       │                                                                                                                           
  ├────────────────────┼───────────────────────────┤                                                                                                                           
  │ npm run hot        │ hot module replacement    │                                                                                                                           
  ├────────────────────┼───────────────────────────┤                                                                                                                           
  │ npm run production │ minified production build │                                                                                                                           
  └────────────────────┴───────────────────────────┘                                                                                                                           
  file structure                                                                                                                                                               
                                                                                                                                                                               
  skyhighweb/                                                                                                                                                                  
  ├── resources/                                                                                                                                                               
  │   ├── css/                                                                                                                                                                 
  │   └── js/                                                                                                                                                                  
  ├── template-parts/                                                                                                                                                          
  ├── functions.php                                                                                                                                                            
  ├── header.php                                                                                                                                                               
  ├── footer.php                                                                                                                                                               
  ├── index.php                                                                                                                                                                
  ├── single.php                                                                                                                                                               
  ├── 404.php                                                                                                                                                                  
  ├── tailwind.config.js                                                                                                                                                       
  ├── webpack.mix.js                                                                                                                                                           
  └── theme.json                                                                                                                                                               
                                                                                                                                                                               
  recommended plugins                                                                                                                                                          
                                                                                                                                                                               
  these are not included in the repo. install separately based on project needs.                                                                                               
  ┌────────────────┬─────────────────────────┬────────────────────────────────────────────────────────────┐                                                                    
  │     plugin     │         purpose         │                            link                            │                                                                    
  ├────────────────┼─────────────────────────┼────────────────────────────────────────────────────────────┤                                                                    
  │ yoast seo      │ seo                     │ https://wordpress.org/plugins/wordpress-seo/               │                                                                    
  ├────────────────┼─────────────────────────┼────────────────────────────────────────────────────────────┤                                                                    
  │ contact form 7 │ forms                   │ https://wordpress.org/plugins/contact-form-7/              │                                                                    
  ├────────────────┼─────────────────────────┼────────────────────────────────────────────────────────────┤                                                                    
  │ flamingo       │ form submission storage │ https://wordpress.org/plugins/flamingo/                    │                                                                    
  ├────────────────┼─────────────────────────┼────────────────────────────────────────────────────────────┤                                                                    
  │ akismet        │ spam protection         │ https://wordpress.org/plugins/akismet/                     │                                                                    
  ├────────────────┼─────────────────────────┼────────────────────────────────────────────────────────────┤                                                                    
  │ hcaptcha       │ captcha                 │ https://wordpress.org/plugins/hcaptcha-for-forms-and-more/ │                                                                    
  ├────────────────┼─────────────────────────┼────────────────────────────────────────────────────────────┤                                                                    
  │ wpml           │ multilanguage (paid)    │ https://wpml.org/                                          │                                                                    
  ├────────────────┼─────────────────────────┼────────────────────────────────────────────────────────────┤                                                                    
  │ polylang       │ multilanguage (free)    │ https://wordpress.org/plugins/polylang/                    │                                                                    
  ├────────────────┼─────────────────────────┼────────────────────────────────────────────────────────────┤                                                                    
  │ wp super cache │ caching                 │ https://wordpress.org/plugins/wp-super-cache/              │                                                                    
  ├────────────────┼─────────────────────────┼────────────────────────────────────────────────────────────┤                                                                    
  │ acf            │ custom fields           │ https://wordpress.org/plugins/advanced-custom-fields/      │                                                                    
  ├────────────────┼─────────────────────────┼────────────────────────────────────────────────────────────┤                                                                    
  │ redirection    │ 301 redirects           │ https://wordpress.org/plugins/redirection/                 │                                                                    
  ├────────────────┼─────────────────────────┼────────────────────────────────────────────────────────────┤                                                                    
  │ safe svg       │ svg uploads             │ https://wordpress.org/plugins/safe-svg/                    │                                                                    
  └────────────────┴─────────────────────────┴────────────────────────────────────────────────────────────┘                                                                    
  credits                                                                                                                                                                      
                                                                                                                                                                               
  based on https://github.com/jeffreyvr/tailpress by jeffrey van rossum.  
