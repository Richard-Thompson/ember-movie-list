/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'movie-list',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    firebase:{
      apiKey: "AIzaSyBprUE2PC_BgCGrwoi54ay3JQkMbbycy2I",
      authDomain: "movie-list-7a45c.firebaseapp.com",
      databaseURL: "https://movie-list-7a45c.firebaseio.com",
      projectId: "movie-list-7a45c",
      storageBucket: "movie-list-7a45c.appspot.com",
      messagingSenderId: "78828372757"
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
