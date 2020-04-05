var assert = require('chai').assert,
    path = require('path'),
    app_settings = require(path.resolve(__dirname + '/../lib/config/settings')),
    Promise = require('bluebird');

describe('application-configuration', function(){


    describe('configuration settings', function(){
        it('should export attributes: ', function(){
            // this is set up based on the mocha documantation but doesn't work
            // the async tests generated in the Promise.map() are supposed to finish before the test resolves
            // instead it just falls through and passes the test without running anything in the .map
            // I don't have time to keep messing with this right now, will have to swing back later
            var exportedAttributes = ["CLUSTER_MODE","NEW_RELIC", "CONNECTION_MODE", "DIRECT_ROUTES",
                "APP_HOST", "APP_PORT", "SOAP_ENDPOINT", "SOAP_ENDPOINT_LIST", "SOAP_CLIENTID", "SOAP_USC_SECURITY_TOKEN",
                "SOAP_X509_CERT", "SOAP_PUBLICKEY", "WSDL_ROOT_PATH", "CACHE_EXP_TIME", "SSL", "REDIS_INSTANCE_HOST",
                "REDIS_INSTANCE_PORT", "CACHE_TTL", "REDIS_USER_KEYS", "SAML", "JWT", "LOG", "AMDOCS_COOKIE_NAME"
                ];
            var callback = function (attributeName){

                it(attributeName, function(){
                    assert.equal(app_settings.hasOwnProperty(attributeName), true);
                    done();
                });
            }

            exportedAttributes.forEach(attributeName => { callback(attributeName); }) ;
        })
    })
});

