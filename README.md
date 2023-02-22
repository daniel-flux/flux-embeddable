# [Flux Embeddable](https://github.com/daniel-flux/flux-embeddable/)

[![Build Status](https://github.com/daniel-flux/flux-embeddable/workflows/CI%20Pipeline/badge.svg?branch=master)](https://github.com/daniel-flux/flux-embeddable/actions)
[![Latest release](https://img.shields.io/github/v/release/daniel-flux/flux-embeddable)](https://github.com/daniel-flux/flux-embeddable/releases)

## Introduction

This is an out-of-the-box embeddable web application that help developers to integrate Flux services to their web applications with few code.

Built with:

* [Flux Widgets](https://github.com/daniel-flux/flux-js-widgets) - based on React and Redux

## Visit Online

Visit [website](https://github.com/daniel-flux/flux-embeddable/) in GitHub Pages.

## Use as a embeddable web widget

### Get Started

there are two ways to integrate this widget to a web application

#### Adapter JS way

Just add following code to a website's header. It will create a Flux Embeddable widget in that web page.

```js
<script>
  (function() {
    var rcs = document.createElement("script");
    rcs.src = "https://github.com/daniel-flux/flux-embeddable/adapter.js";
    var rcs0 = document.getElementsByTagName("script")[0];
    rcs0.parentNode.insertBefore(rcs, rcs0);
  })();
</script>
```

#### Iframe way

Create a iframe with the following code:

```html
<iframe width="300" height="500" id="rc-widget" allow="autoplay; microphone" src="https://github.com/daniel-flux/flux-embeddable/app.html">
</iframe>
```

You can use the config tool in this [page](https://github.com/daniel-flux/flux-embeddable) to generate code with config.

#### Stable version

We provide latest Flux Embeddable version on github page `https://github.com/daniel-flux/flux-embeddable`. It includes latest features and bugfix in Flux Embeddable. And it will keep up to date with master code. But we **recommend** developers to use versioned Flux Embeddable. You can get current latest stable version of Flux Embeddable from [here](https://github.com/daniel-flux/flux-embeddable/releases). Such as `1.4.1`, you can get versioned app in this uri `https://dev.flux.net.br/integration/flux-embeddable/1.4.1`.

Just replace `https://github.com/daniel-flux/flux-embeddable` in [upper code](#adapter-js-way) to the versioned uri, and you will be using versioned Flux Embeddable. The versioned app will not be influenced when new features are added, so it will be more stable than latest version. When you need to update Flux Embeddable, you need to update the versioned app uri in your code manually.

For stable version from `1.0.2`, it is required to setup your own Flux client id. Please follow [here](docs/config-client-id-and-secret.md) to setup, or it will throw error with client id required.
For stable version from `1.2.0`, authorization redirect uri will change with version as `https://dev.flux.net.br/integration/flux-embeddable/1.4.1/redirect.html`, but you can make a fixed redirect URI with this [docs](docs/customize-redirect-uri.md).

To get all versions of Flux Embeddable in [here](https://github.com/daniel-flux/flux-embeddable/releases).

### Documents

* [Get Started](docs/get-started.md)
* [Browser Support](docs/browser-support.md)
* [Use your own app client id](docs/config-client-id-and-secret.md)
* [Customize Redirect Uri](docs/customize-redirect-uri.md)
* [Enable Multiple Tabs Support](docs/multiple-tabs.md)
* [Multiple Partner Brands Support](docs/multiple-brands.md)
* [Customize prefix](docs/customize-prefix.md)
* [Work with the Web Widget event](docs/widget-event.md)
  * [Web phone call event](docs/widget-event.md#web-phone-call-event)
  * [Ringout call event](docs/widget-event.md#ringout-call-event)
  * [Active Call event](docs/widget-event.md#active-call-event)
  * [Login Status event](docs/widget-event.md#login-status-event)
  * [Message event](docs/widget-event.md#message-event)
  * [Route event](docs/widget-event.md#route-changed-event)
* [API to control the Web Widget](docs/control-widget.md)
  * [Go to Dial and start a call](docs/control-widget.md#go-to-dial-and-start-a-call)
  * [Go to SMS](docs/control-widget.md#go-to-sms-page)
  * [Control the web call](docs/control-widget.md#control-the-web-call)
    * Answer a ringing call
    * Reject a ringing call
    * Hangup a call
  * [Log out user](docs/control-widget.md#log-out-user)
  * [Minimize and Hide widget](docs/control-widget.md#minimizehideremove-the-widget)
  * [Navigate to](docs/control-widget.md#navigate-to)
  * [Schedule a meeting (Flux Video/Flux Meetings)](docs/control-widget.md#schedule-a-meeting)
* [Work with Flux C2D](docs/work-with-flux-embeddable-c2d.md)
* [Interact with calling settings](docs/interact-with-calling-settings.md)
* [Third Party Service in Widget](docs/third-party-service-in-widget.md)
  * Register your service
  * Add meeting schedule button with your service
  * Show upcoming meeting list in Flux Video page
  * Log Flux Video meeting into your service
  * Show contacts from your application
  * Show contact's activities from your application
  * [Log call into your service](docs/third-party-service-in-widget.md#log-call-into-your-service)
  * [Log messages into your service](docs/third-party-service-in-widget.md#log-messages-into-your-service)
  * Add third party authorization button
  * [Third Party Settings](docs/third-party-service-in-widget.md#third-party-settings)
* [Enable and Disable Features in Widget](docs/disable-features.md)
  * Disable messages features
  * Disable Call releated features
  * Enable Conference invite feature
  * [Enable Glip feature](docs/disable-features.md#enable-glip-feature)
  * [Enable Conference(3-way) Calling feature](docs/disable-features.md#enable-conference-call-feature)
  * [Enable Active Call Control feature](docs/disable-features.md#enable-active-call-control-feature)
* [New adapter badge UI](docs/new-adapter-ui.md)
* [Enable Analytics](docs/add-analytics.md)
* [Customize Widget UI styles](docs/customize-ui-styles.md)
* [Popup a standalone widget](docs/popup-window.md)
## Awesome Embeddable projects

* Flux Embeddable phone for Hubspot CRM - [repo](https://github.com/daniel-flux/flux-embeddable/hubspot-embeddable-flux-embeddable-phone)
* Flux Embeddable phone for Insightly CRM- [repo](https://github.com/daniel-flux/flux-embeddable/insightly-embeddable-flux-embeddable-phone)
* Flux Embeddable phone for Pipedrive CRM - [repo](https://github.com/daniel-flux/flux-embeddable/pipedrive-embeddable-flux-embeddable-phone-spa)
* Flux Embeddable with Salesforce Lightning - [tutorial](https://flux-embeddable-web-widget-demos.readthedocs.io/en/latest/salesforce_lightning/tutorial/)
* Flux Embeddable with Static CRM - [tutorial](https://flux-embeddable-web-widget-demos.readthedocs.io/en/latest/static_crm/tutorial/)
* Flux Embeddable with chrome extension - [repo](https://github.com/embbnux/flux-embeddable-voice-extension)
* Flux Embeddable for Google with Firefox add-on - [repo](https://github.com/embbnux/flux-embeddable-for-google-firefox-addon)
* Flux Embeddable with Third Party service - [repo](https://github.com/embbnux/flux-embeddable-voice-with-third-party)
* Flux Embeddable with Electron - Support Linux - [repo](https://github.com/embbnux/flux-embeddable-voice-app)
* Flux Embeddable with Game of Thrones theme - [repo](https://github.com/embbnux/flux-embeddable-web-widget-styles)
* Flux Embeddable with Java app - jxBrowser - [repo](https://github.com/tylerlong/jxbrowser-webrtc)
* Flux Embeddable extension factory - Extension CLI build tool - [repo](https://github.com/daniel-flux/flux-embeddable-extension-factory)

## Contribution and Development

We provide a online version that developers can use to embed and config in their web application. When you want to get a deep development of this widget, you can clone code of this widget, update it and deploy by yourself.

### Clone the code

```bash
$ git clone https://github.com/daniel-flux/flux-embeddable.git
```

### Create a free Flux app

1. Create a [Flux developer free account](https://developer.flux-embeddable.com)
2. Create a Flux app with app type - "**Web browser (Javascript)**"
3. Add permissions `Edit Message`, `Edit Presence`, `Internal Messages`, `Read Accounts`, `Read Call Log`, `Read Contacts`, `Read Messages`, `Read Presence`, `RingOut`, `SMS`, `Glip`, `VoIP Calling` and `Call Control` to your app.
4. Add redirect uri `http://localhost:8080/redirect.html` to your app settings.

### Create environment variables file in project root path

Create `.env` file in project root path:

```
API_KEY=your_flux_app_client_id
API_SERVER=flux-embeddable sever url, eg: https://dev.devtest.flux-embeddable.com
TEST_HOST_URI=http://localhost:8080
TEST_USER_NAME=your_sandbox_account_phone_number
TEST_USER_PASSWORD=your_sandbox_account_password
TEST_HEADLESS=false
```

`TEST_*` variables is optional for automatic test, you can just keep it blank before you run automatic tests.

### Start development server

We assume you have pre-installed node.js >= 14 and yarn.

**It is recommended to use `yarn` instead of `npm`.** We have `yarn.lock` file in source code to lock dependence version. With `yarn`, we can install dependencies with correct version that work well with this project.

```bash
$ yarn       # use yarn to install dependences
$ yarn start # start a webpack dev server
```

Open site: 'http://localhost:8080/' on browser

### Run Tests

You need to update `.env` file to add environment variables for test as mentioned in previous section.

```
yarn test
```

### Deploy on production

If you create pull request to this repo and get merged, CI will deploy it to this repository's Github Page automatically. But for something that customized, you can deploy it to your own web space, such as your github page.

1. Update `.env` file in production environment ([Graduate your Flux app to get production app client id](docs/config-client-id-and-secret.md#graduation-for-your-flux-embeddable-app))

2. Run command to compile code and build release

```
$ HOSTING_URL=your_host_uri yarn build
```

Please replace `your_host_uri` with your own web host address, such as `https://github.com/daniel-flux/flux-embeddable`.

And set redirect uri `${your_host_uri}/redirect.html` in your app setting on Flux Developer website.

3. Upload all files in release folder to your web space. And visit it in browser.

### Build for browser extension

For browser extension, we can host all files in browser extension local folder instead CDN.

To build for browser extension local files:

```
yarn build-extension
```

After building, we can get compiled files in this project's extension folder. Create a `embeddable` folder in your extension project. Copy all files in extension folder to your extesnion project's `embeddable` folder.

Then you can load this widget with `${your_extension_uri}/embeddable/adapter.js` or `${your_extension_uri}/embeddable/app.html`.
