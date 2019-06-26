# Photo website

Vue.js app and Google Firebase functions.

## Firebase Functions
Based on the instructions in https://firebase.google.com/docs/functions/get-started
Setup:
```
nvm use --lts
npm install firebase-functions@latest firebase-admin@latest --save
npm install -g firebase-tools

firebase login

cd functions
npm install
```

Update credentials in functions/index.js before deploying.

Deploy:
```
firebase deploy --only functions
```

See the rewrite rules in the `firebase.json` file.


## Firebase Hosting
Similarly, requires the firebase-tools: `npm install -g firebase-tools`
https://firebase.google.com/docs/hosting/quickstart

See the hosting section in `firebase.json`. When you do the vue build (see below),
everything gets bundled and copied into the `dist/` directory. That's what will get deployed.
`firebase deploy`

## Vue.js

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Image resizing
Put full size .jpg images in `photos/`. Resized photos will be put in `static/small/` and `static/large/`
`pip3 install pillow`
`python3 resizer.py`
To reprocess all images, add the `-a` option.
