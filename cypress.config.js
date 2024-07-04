const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const allureWriter = require("@shelex/cypress-allure-plugin/writer");
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin');


module.exports = defineConfig({
 
    e2e: {
      async setupNodeEvents(on, config) {
        const bundler = createBundler({
          plugins: [createEsbuildPlugin(config)],
        });
  
        on("file:preprocessor", bundler);
        await addCucumberPreprocessorPlugin(on, config);
  
        return config;
      },
    specPattern: ["cypress/e2e/features/*.feature","cypress/e2e/features/*.js","cypress/e2e/apiquiz/test.js","cypress/e2e/apiquiz/*"],
    baseUrl: "https://subscribe.stctv.com/sa-ar",
    chromeWebSecurity: false,
    defaultcommandtimeout: 4500000,
    viewportWidth: 1600,
    viewportHeight: 908,
    pageLoadTimeout:45000000,
    requestTimeout:2500000,
    responseTimeout:2500000,
    retries: {
      runMode: 5,
      openMode: 5,
    },
  },
  
    "reporter": "cypress-multi-reporters",
    "reporterOptions": {
      "configFile": "reporter-config.json"
    }
  
  


 
});
