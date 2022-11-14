# kmapper.com

This repository contains the files for the kmapper GmbH website at https://kmapper.com.
The website is based on Jekyll and Webpack to transpile any custom JavaScript.
It makes use of the npm package gh-pages in order to push the built files to the gh-pages branch on GitHub from where a GitHub Pages site is being built.

## Dependencies

- Ruby
- bundler
- Jekyll
- npm

## Serve and Develop Locally

1. Clone repository
1. `cd` into repository
1. Run `bundle install` to install the needed Ruby gems
1. Run `npm install` to install the needed npm packages
1. Run `npm run start` to transpile the JavaScript and start the Jekyll server
   
   Check the "start" script in `package.json`. `npm run start` will execute the following: 
   `./node_modules/.bin/webpack --watch | jekyll serve --config _config.yml,_config_dev.yml`

### Custom JavaScript

Custom JavaScript has to go into the `webpack` directory and each script has to be referenced as an entry in `webpack.config.js`. Otherwise it won't be transpiled by Bable. 

## Deploy to GitHub Pages

Run `npm run deploy` to build all static and transpiled files to the `public` directory and push them to the gh-pages branch on GitHub.
