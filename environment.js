 // Common configuration files with defaults plus overrides from environment vars
module.exports = {
  // The address of a running selenium server.
  seleniumAddress: 
    (process.env.SELENIUM_URL || 'http://localhost:4444/wd/hub'),



  // A base URL for your application under test.
  baseUrl:
    'http://' + (process.env.HTTP_HOST || 'localhost') +
          ':' + (process.env.HTTP_PORT || '8081')

};