# kmapper.com

These are the files for the kmapper GmbH website at https://kmapper.com.

## Dependencies

- Ruby (>= 2.7.1)
- bundler (>= 2.2.4)
- Jekyll (4.2.0)
- npm

## Serve and Develop Locally

1. Clone repository
1. cd into repository
1. Run `bundle install` for Ruby gems
1. Run `npm install` for npm packages
1. Run `npm run start` to transpile JavaScript and start Jekyll server
   
   The command will run the commands set in package.json: 
   `./node_modules/.bin/webpack --watch | jekyll serve --config _config.yml,_config_dev.yml`

### Custom JavaScript

Custom JavaScript goes into the `webpack` directory and it has to be referenced as an entry in `webpack.config.js`. Otherwise it won't be transpiled by Bable.

## Deploy to GitHub Pages

1. Run `npm run build` to transpile JavaScript and build Jekyll files
2. Run `npm run deploy` to deploy the built files to the gh-pages branch
