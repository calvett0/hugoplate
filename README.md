hugoplate
======
<img src="hugoplate.png" alt="HugoPlate" align="left" style="float:left;margin-right:20px;margin-bottom:40px;">
hugoplate is a starter boilerplate project for [Hugo](http://gohugo.io) + [Gulp](http://gulpjs.com), based on hugulp (https://github.com/jbrodriguez/hugulp) all credits to
[Juan B. Rodriguez](http://jbrodriguez.io) for the gulp integration

This project Includes the following tools, tasks and workflows:

- [BrowserSync](http://www.browsersync.io/)
- [SASS](http://sass-lang.com/) (super fast libsass)
- [autoprefixer](https://github.com/sindresorhus/gulp-autoprefixer)
- [ClearCss](https://github.com/scniro/gulp-clean-css)
- [Javascript Lint](https://github.com/spalger/gulp-jshint)
- [Uglify](https://github.com/terinjokes/gulp-uglify)
- [Image optimization](https://github.com/sindresorhus/gulp-imagemin) (only [changed images](https://github.com/sindresorhus/gulp-changed))
- Asset Fingerprinting using [gulp-rev](https://github.com/sindresorhus/gulp-rev) and [gulp-rev-replace](https://github.com/jamesknelson/gulp-rev-replace)
- [Dom-limpio](https://github.com/carloscabo/dom-limpio) To clean CSS styles
- [Socialize](https://github.com/carloscabo/socialize) To easy share content
- [MQBE](https://github.com/carloscabo/MQBE) An amazing small lib to check for media query state through JS
- [Cookie policy consent](https://github.com/carloscabo/cookie-policy-consent) To add the cookie advise
- [Formikation](https://github.com/vortizhe/formikation) For select, radio and checkbox CSS customization
- [Burguermenu](https://github.com/vortizhe/burgermenu) The easiest way to add a canvas menu

## Install Hugo
[Follow the instructions](http://gohugo.io/#action).

## Install Node
[Follow the instructions](https://nodejs.org)

If Node is already installed, no further action is required.

## Clone the repository
Copy the stock project to a local folder

```
$ git clone https://github.com/calvett0/hugoplate.git
```

Change directory to the newly created project
```
$ cd hugoplate
```

## Install npm dependencies
```
$ npm install
```

This runs through all dependencies listed in `package.json` and downloads them to a `node_modules` folder in your project directory.

This will also install a copy of gulp locally (rather than globally), which is [generally preferable](http://jondavidjohn.com/keeping-it-local-with-npm-scripts/)

## Run gulp
Run the `default` gulp task with

```
$ npm run gulp
```

It will do the following:
- The **styles**, **scripts** and **images** tasks get executed first to do the heavy lifting of compressing images and minifying css/js files.
- The **revision** task runs next to fingerprint the optimized assets.
- Then the **hugo:all** task is invoked to generate the static site<br>
hugo will run as if invoked like this:
```
$ hugo --config=./hugo/config.yaml -s ./hugo -d ./public --buildDrafts=true --verbose=true --baseUrl="http://localhost:3000/"
```

- The **reference:all** task replaces all asset ocurrences with their fingerprinted versions
- Finally, the browser is reloaded so that you can very quickly check the changes you made

## Publish step
There's also a `publish` task you can run:

```
$ npm run gulp publish
```

It will perform all the steps above, but Hugo will be run with as follows:
```
$ hugo --config=./hugo/config.yaml -s ./hugo -d ./public"
```

## PR
For changes, send a PR.


## Share
Made by [Javier Ruiz](http://javierruiz.es), with a MIT License.
