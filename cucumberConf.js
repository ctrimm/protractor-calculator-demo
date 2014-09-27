// cucumberConf.js

var env = require('./environment.js');

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  framework: 'cucumber',

  multiCapabilities: [{
    'browserName': 'firefox'
  }, {
    'browserName': 'chrome',
    'chromeOptions': {
        args: ['--test-type'], //need this to ignore any flags in chrome
    }
  }],

  // Spec patterns are relative to this directory.
  specs: [
    'cucumber/*.feature'
  ],

  capabilities: env.capabilities,

  baseUrl: env.baseUrl,

  cucumberOpts: {
    require: 'cucumber/stepDefinitions.js',
    tags: '@dev',
    format: 'summary'
  }
}
