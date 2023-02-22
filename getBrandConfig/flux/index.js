const path = require('path');

module.exports = {
  prefix: 'flux',
  brandConfig: {
    id: '1210',
    code: 'flux',
    name: 'Flux',
    appName: 'Flux Embeddable',
    fullName: 'Flux',
    application: 'Flux Embeddable',
    allowRegionSetting: true,
    signupUrl: 'https://dev.flux.net.br/office/plansandpricing.html',
    eulaLink: 'https://dev.flux.net.br/legal/eulatos.html',
    callWithJupiter: {
      default: {
        link: 'https://dev.flux.net.br/',
        protocol: 'fluxapp://',
        name: 'Flux App',
      },
    },
    spartanProtocol: 'rcmobile://',
    rcmProductName: 'Flux Meetings',
    rcvProductName: 'Flux Video',
    teleconference: 'https://dev.flux.net.br/teleconference',
    rcvTeleconference: 'https://dev.flux.net.br/teleconference/',
    assets: {
      logo: '/assets/flux/logo.svg',
      icon: '/assets/flux/icon.svg',
    }
  },
  brandFolder: __dirname,
  assetsFolder: path.resolve(__dirname, '../../src/assets/flux'),
};
