var Confidence = require('confidence'),
    store_settings = new Confidence.Store(),
    store_constants = new Confidence.Store(),
    store_mockData = new Confidence.Store();

var criteria = {
    env: process.env.NODE_ENV
};

function get(type, key) {

    if(type === "settings") {
        return store_settings.get(key, criteria);
    } else if(type === "constants") {
        return store_constants.get(key, criteria);
    } else if(type === "mockData") {
        return store_mockData.get(key, criteria);
    }
};

module.exports = function(config) {
    // Initialize opts in case it isn't passed in
    config = config || {};

    // Get default data from files, otherwise initialize empty objects
    var settings = require('./lib/config/settings.js') || {};
    var constants = require('./lib/config/constants.js') || {};
    var mockData = require('./lib/config/mockData.js') || {};

    // If opts contains a setting property, then merge that setting property with the default settings
    // This allows us to override the default settings with our own settings. The merge deals with conflicts by using the values from opts.
    if(config.hasOwnProperty('settings')) {
        Object.assign(settings, config.settings);
    }

    // This works exactly the same way as settings
    if(config.hasOwnProperty('constants')) {
        Object.assign(constants, config.constants);
    }

    // This works exactly the same way as settings
    if(config.hasOwnProperty('mockData')) {
        Object.assign(mockData, config.mockData);
    }

    // Load the settings and constants into Confidence
    store_settings.load(settings);
    store_constants.load(constants);
    store_mockData.load(mockData);

    // Expose the 'public' functions to the client
    return {
        settings: {
            get: function(key){
                return get("settings", key);
            }
        },
        mockData: {
            get: function(key){
                return get("mockData", key);
            }
        },
        constants: {
            get: function(key){
                return get("constants", key);
            }
        }
    };
}
 
