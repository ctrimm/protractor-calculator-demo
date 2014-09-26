// cucumberConf.js

var env = require('./environment.js');

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  framework: 'cucumber',

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
