const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'jaz9qz',
  e2e: {
    setupNodeEvents(on, config) {
      console.log(config)
     config.defaultCommandTimeout = 1000
     config.baseUrl = 'https://gorest.co.in/public/v2'
     config.env.ENVIRONMENT =  'staging'
     
     return config
    },
  },
});