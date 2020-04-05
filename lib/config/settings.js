var path = require('path'),
    fs = require('fs'),
    os = require('os');


/**
 * contains example application settings
 * @type {}
 */
module.exports = {

    // The max number of times the Gateway will try to make a call to a microservice before failing. 1 means Gateway tries a total of 1 time.
    "GATEWAY_MAX_TRIES": 1,

    // Specifies which rule type to use for the unica esb call
    "RULE_TYPE": {
        "$filter": "env",
        "local": 'DEV',
        "dev": 'DEV',
        "test": 'TEST',
        "prod": 'PRODUCTION',
        "$default": 'TRIAL'
    },
    // Specifies how the server will run in cluster or non cluster mode
    "CLUSTER_MODE": {
        "$filter": "env",
        "local": false,
        "dev": false,
        "test": false,
        "prod": false,
        "$default": false
    },
    "NEW_RELIC": {
        "ACTIVE": {
            "$filter": "env",
            "local": false,
            "dev": false,
            "test": false,
            "prod": false,
            "$default": false
        },
        "APP_NAME": process.env.NODE_ENV + "_" + os.hostname() + (process.env.microserviceName != undefined ? `_${process.env.microserviceName}` : ""),
        "LICENSE_KEY": "license_key"
    },

    // Specifies how the server will listen for requests, values: HTTP, HTTPS, BOTH
    "CONNECTION_MODE": {
        "$filter": "env",
        "local": "HTTP",
        "dev": "BOTH",
        "test": "BOTH",
        "prod": "BOTH",
        "$default": "BOTH"
    },
    // Exposes direct routes
    "DIRECT_ROUTES": {
        "$filter": "env",
        "local": true,
        "dev": true,
        "test": true,
        "prod": true,
        "$default": true
    },
    // The host that the Node server will listen on
    "APP_HOST": {
        "$filter": "env",
        "local": "127.0.0.1",
        "dev": "127.0.0.1",
        "test": "127.0.0.1",
        "prod": "127.0.0.1",
        "$default": "127.0.0.1"
    },
    // The port that the Node server will listen on
    "APP_PORT": {
        "$filter": "env",
        "local": 3010,
        "dev": 3010,
        "test": 3010,
        "prod": 3010,
        "$default": 3010
    },
    // URL to get userinfo from IDP
    "IDP_URL": {
        "$filter": "env",
        "local": "https://idp.endpoint.com",
        "dev": "https://idp.endpoint.com",
        "test": "https://idp.endpoint.com",
        "prod": "https://idp.endpoint.com",
        "$default": "https://idp.endpoint.com"
    },

    "strictSSL": {
        "$filter": "env",
        "local": false,
        "dev": false,
        "test": false,
        "prod": false,
        "$default": false
    },

    // DOMAIN that client application is hosted on, used to create URI for email templates
    "APP_DOMAIN": {
        "$filter": "env",
        "local": "local",
        "dev": "dev",
        "test": "test",
        "prod": "prod",
        "$default": "dev"
    },

    "captcha": {
        API: {
            "url": "https://www.google.com/recaptcha/api/siteverify",
            "client_key": {
                "$filter": "env",
                "local": "local_key",
                "dev": "dev_key",
                "test": "test_key",
                "prod": "prod_key",
                "$default": "dev_key"
            },
            "server_key": {
                "$filter": "env",
                "local": "local_key",
                "dev": "dev_key",
                "test": "test_key",
                "prod": "prod_key",
                "$default": "dev_key"
            }// Google ReCaptcha server secret key
        },
        "IDP_TOKEN": {
            "url": "https://tokenurl.com",
            "RestrictedAccess": {
                "client_id": {
                    "$filter": "env",
                    "local": "access_token",
                    "dev": "access_token",
                    "test": "access_token",
                    "prod": "access_token",
                    "$default": "access_token"
                },
                "client_secret": {
                    "$filter": "env",
                    "local": "access_token",
                    "dev": "access_token",
                    "test": "access_token",
                    "prod": "access_token",
                    "$default": "access_token"
                }
            },
            "FullAccess": {
                "client_id": {
                    "$filter": "env",
                    "local": "access_token",
                    "dev": "access_token",
                    "test": "access_token",
                    "prod": "access_token",
                    "$default": "access_token"
                },
                "client_secret": {
                    "$filter": "env",
                    "local": "access_token",
                    "dev": "access_token",
                    "test": "access_token",
                    "prod": "access_token",
                    "$default": "access_token"
                }
            }
        },
        "PASSCODE_Timeout": 30,
        "CACHE_EXPIRATION": 40, //
        "GEN_STATIC_PASSCODE": {
            "$filter": "env",
            "local": false,
            "dev": false,
            "test": false,
            "prod": false,
            "$default": false
        },
        "PTE_PASSCODE_VALUE": "value",
        "PTE_BYPASS_PASSCODE": {
            "$filter": "env",
            "local": false,
            "dev": false,
            "test": false,
            "prod": false,
            "$default": false
        }
    },

    "REGISTRATION": {
        emailValKeyTimeout: { // minutes (Int) = hours * 60
            "$filter": "env",
            "local": 1 * 60,
            "dev": 12 * 60,
            "test": 12 * 60,
            "prod": 12 * 60,
            "$default": 12 * 60
        },
        pinTimeout: { // minutes (Int) = hours * 60
            "$filter": "env",
            "local": 1 * 60,
            "dev": 12 * 60,
            "test": 12 * 60,
            "prod": 12 * 60,
            "$default": 12 * 60
        }
    },

    "microservicesClientInfo": {
        microservice1: {
            port: 3015,
            pin: 'service:microservice1',
            allowAnonymous: 0,
            restricted: 0
        },
        hello: {
            port: 3016,
            pin: 'service:hello',
            allowAnonymous: 1,
            restricted: 0
        },
        hackerNews: {
            port: 3017,
            pin: 'service:hackerNews',
            allowAnonymous: 1,
            restricted: 0
        }
    },

    // settings for tnc call
    "TNC_ENDPOINT": {
        port: 3001,
        path: '/path/to/terms/and/conditions/file.txt',
        method: 'GET'
    },
    "TNC_IP": {
        "$filter": "env",
        "local": "127.0.0.1",
        "dev": "127.0.0.1",
        "test": "127.0.0.1",
        "prod": "127.0.0.1",
        "$default": "127.0.0.1"
    },

    // Settings for LDAP
    "LDAP": {
        // Change this value (from the list below) depending on the LDAP Server you are using
        "ENDPOINT": {
            "$filter": "env",
            "test": "TEST1",
            "prod": "PROD",
            "$default": "DEV1"
        },
        // The list of available LDAP endpoints
        "ENDPOINT_LIST": {
            "DEV1": "http://ldapEndpoint1.com:636",
            "TEST1": "http://ldapEndpoint2.com:636",
            "PROD": "http://ldapEndpoint3.com:636"
        },
        "LDAPHOST_LIST": {
            "DID2": "eDirLDAPservice.com",
            "DEV4": "eDirLDAPservice.com",
            "SIT23": "eDirLDAPservice2.com",
            "SIT4": "eDirLDAPservice2.com",
            "PTE1": "eDirLDAPservice3.com",
            "PROD": "eDirLDAPservice3.com",
            "SIT6": "eDirLDAPservice2.com"
        },

        "REQUEST_CERTIFICATE": true,
        "REJECT_UNAUTHORIZED": false,
        "LDAPHOST": "ldapEndpoint.com",
        "TLSPORT": 636, // Port for LDAPS TLS
        "ROOTDN": "cn=myaccount,ou=ServiceAccounts,ou=services,o=company",
        "ROOTSECRET": "rootSecret",
        // LDAP TLS certificate
        "LDAPCERT": {
            "$filter": "env",
            "local": fs.readFileSync(path.join(__dirname, '../cert/ldap/sha2_wildcard_cert.crt')),
            "dev": fs.readFileSync(path.join(__dirname, '../cert/ldap/sha2_wildcard_cert.crt')),
            "test": fs.readFileSync(path.join(__dirname, '../cert/ldap/sha2_wildcard_cert.crt')),
            "prod": fs.readFileSync(path.join(__dirname, '../cert/ldap/sha2_wildcard_cert.crt')),
            "$default": fs.readFileSync(path.join(__dirname, '../cert/ldap/sha2_wildcard_cert.crt'))
        }
    },

    // Settings for ESB/SOAP
    "ESB": {
        // Change this value (from the list below) depending on the ESB Server you are using
        "ENDPOINT": {
            "$filter": "env",
            "local": "DEV1",
            "dev": "DEV1",
            "test": "TEST1",
            "prod": "PROD",
            "$default": "DEV1"
        },
        // The list of available SOAP endpoints
        "ENDPOINT_LIST": {
            "DEV1": "http://esbEndpoint.com:636",
            "TEST1": "http://esbEndpoint.com:636",
            "PROD": "http://esbEndpoint.com:636",
            "DEV1": "http://esbEndpoint.com:636"
        },
        "CLIENTID": {
            "$filter": "env",
            "local": "clientID",
            "dev": "clientID",
            "test": "clientID",
            "prod": "clientID",
            "$default": "clientID"
        },
        "SECURITY_TOKEN": {
            "$filter": "env",
            "local": fs.readFileSync(path.join(__dirname, '../cert/esb/esb-security-token.key'), 'utf8'),
            "dev": fs.readFileSync(path.join(__dirname, '../cert/esb/esb-security-token.key'), 'utf8'),
            "test": fs.readFileSync(path.join(__dirname, '../cert/esb/esb-security-token.key'), 'utf8'),
            "prod": fs.readFileSync(path.join(__dirname, '../cert/esb/esb-security-token.key'), 'utf8'),
            "$default": fs.readFileSync(path.join(__dirname, '../cert/esb/esb-security-token.key'), 'utf8')
        },
        // Used to sign the SOAP calls
        "X509_CERT": {
            "$filter": "env",
            "local": fs.readFileSync(path.join(__dirname, '../cert/esb/esb-x509cert.crt'), 'utf8'),
            "dev": fs.readFileSync(path.join(__dirname, '../cert/esb/esb-x509cert.crt'), 'utf8'),
            "test": fs.readFileSync(path.join(__dirname, '../cert/esb/esb-x509cert.crt'), 'utf8'),
            "prod": fs.readFileSync(path.join(__dirname, '../cert/esb/esb-x509cert.crt'), 'utf8'),
            "$default": fs.readFileSync(path.join(__dirname, '../cert/esb/esb-x509cert.crt'), 'utf8')
        },
        // Used to create SSL tunnel
        "PUBLICKEY": {
            "$filter": "env",
            "local": fs.readFileSync(path.join(__dirname, '../cert/esb/esb-publickey.crt'), 'utf8'),
            "dev": fs.readFileSync(path.join(__dirname, '../cert/esb/esb-publickey.crt'), 'utf8'),
            "test": fs.readFileSync(path.join(__dirname, '../cert/esb/esb-publickey.crt'), 'utf8'),
            "prod": fs.readFileSync(path.join(__dirname, '../cert/esb/esb-publickey.crt'), 'utf8'),
            "$default": fs.readFileSync(path.join(__dirname, '../cert/esb/esb-publickey.crt'), 'utf8')
        },
        "WSDL_ROOT_PATH": "lib/esb/wsdl/",
        "SERVICES": {
            "wsdlService1": {
                "wsdlPath": "wsdlService1_v2/enterpriseWsdlService1_secure.wsdl",
                "servicePath": "/enterprise/wsdlService1/wsdlOperation1/v2_0",
                "exceptionElement": "wsdlService1Exception",
                "isCacheRequired": false,
                "operations": [
                    "getWsdlService1"
                ],
                "cache": [
                    "getWsdlService1"
                ]
            },
            "wsdlService2": {
                "wsdlPath": "wsdlService2_v2/enterpriseWsdlService2_secure.wsdl",
                "servicePath": "/enterprise/wsdlService2/wsdlOperation1/v2_0",
                "exceptionElement": "wsdlService2Exception",
                "isCacheRequired": false,
                "operations": [
                    "getWsdlService2"
                ],
                "cache": []
            }
            // Add other ESB services here
        },
        "CACHE_EXP_TIME": 60
    },
    /* SSL Settings */
    "SSL": {
        "PORT": 443, // Default port for SSL
        // SSL private key
        "KEY": {
            "$filter": "env",
            "local": fs.readFileSync(path.join(__dirname, '../cert/ssl/key.pem'), 'utf8'),
            "dev": fs.readFileSync(path.join(__dirname, '../cert/ssl/key.pem'), 'utf8'),
            "test": fs.readFileSync(path.join(__dirname, '../cert/ssl/key.pem'), 'utf8'),
            "prod": fs.readFileSync(path.join(__dirname, '../cert/ssl/key.pem'), 'utf8'),
            "$default": fs.readFileSync(path.join(__dirname, '../cert/ssl/key.pem'), 'utf8')
        },
        // SSL certificate
        "CERT": {
            "$filter": "env",
            "local": fs.readFileSync(path.join(__dirname, '../cert/ssl/cert.pem'), 'utf8'),
            "dev": fs.readFileSync(path.join(__dirname, '../cert/ssl/cert.pem'), 'utf8'),
            "test": fs.readFileSync(path.join(__dirname, '../cert/ssl/cert.pem'), 'utf8'),
            "prod": fs.readFileSync(path.join(__dirname, '../cert/ssl/cert.pem'), 'utf8'),
            "$default": fs.readFileSync(path.join(__dirname, '../cert/ssl/cert.pem'), 'utf8')
        }
    },

    /* Redis Settings */
    "REDIS_INSTANCE_HOST": {
        "$filter": "env",
        "local": "127.0.0.1",
        "dev": "127.0.0.1",
        "test": "127.0.0.1",
        "prod": "127.0.0.1",
        "$default": "127.0.0.1"
    },
    "REDIS_INSTANCE_PORT": 6379,
    "CACHE_TTL": {
        "$filter": "env",
        "local": "60 * 60 * 24 * 1000",
        "dev": "60 * 60 * 24 * 1000",
        "test": "60 * 60 * 24 * 1000",
        "prod": "60 * 60 * 24 * 1000",
        "$default": "60 * 60 * 24 * 1000"
    },
    "REDIS_USER_KEYS": {
        "EXPIRE_TIME": "expireTime"
    },

    /* JWT Settings */
    "JWT": {
        "CACHE": {
            "USER_KEYS": {
                "EXPIRE_TIME": {
                    "$filter": "env",
                    "local": 120,
                    "dev": 60,
                    "test": 60,
                    "prod": 60,
                    "$default": 60
                }
            }
        },
        // JWT secret key using for signing/encrypting JWT
        "SECRET": {
            "$filter": "env",
            "local": fs.readFileSync(path.join(__dirname, '../cert/jwt/jwt-secret.key'), 'utf8'),
            "dev": fs.readFileSync(path.join(__dirname, '../cert/jwt/jwt-secret.key'), 'utf8'),
            "test": fs.readFileSync(path.join(__dirname, '../cert/jwt/jwt-secret.key'), 'utf8'),
            "prod": fs.readFileSync(path.join(__dirname, '../cert/jwt/jwt-secret.key'), 'utf8'),
            "$default": fs.readFileSync(path.join(__dirname, '../cert/jwt/jwt-secret.key'), 'utf8')
        },
        "EXPIRATION": 20, // Minutes until expiration
        "COOKIE": {
            "NAME": "sec02token",
            "PATH": "/",
            "DOMAIN": {
                "$filter": "env",
                "local": "127.0.0.1",
                "$default": ".client.com"
            },
            "isSecure": {
                "$filter": "env",
                "local": false,
                "$default": true
            },
            "isHttpOnly": {
                "$filter": "env",
                "local": true,
                "$default": false
            }
        }
    },

    /* Log Settings */
    "LOG": {
        "GENERAL": {
            "IS_ACTIVE": {
                "$filter": "env",
                "local": true,
                "dev": true,
                "test": true,
                "prod": true,
                "$default": true
            },
            // Will output logs to the console for the level chosen, and levels above that
            // Values: 10 (trace), 20 (debug), 30 (info), 40 (warn), 50 (error), 60 (fatal). Refer to log_settings.js for levels.
            // 100 to turn off all logs (really any value over 60)
            "TO_CONSOLE": {
                "$filter": "env",
                "local": 10,
                "dev": 20,
                "$default": 100
            },
            // Will output logs to the log files for the level chosen, and levels above that
            // Values: 10 (trace), 20 (debug), 30 (info), 40 (warn), 50 (error), 60 (fatal). Refer to log_settings.js for levels.
            // 100 to turn off all logs (really any value over 60)
            "LEVEL": {
                "$filter": "env",
                "local": 20,
                "dev": 20,
                "test": 40,
                "prod": 50,
                "$default": 50
            },
            "LOCATION": "./logs/", // Location to save the logs, needs the trailing "/"
            "FILENAME": {
                "FATAL": "fatal.log",
                "ERROR": "error.log",
                "WARN": "warn.log",
                "INFO": "info.log",
                "DEBUG": "debug.log",
                "TRACE": "trace.log"
            }
        },

        // Used to log only requests and responses
        // This will turned on for all environments
        "TRANSACTION": {
            // Controls whether any logging will be done
            "IS_ACTIVE": {
                "$filter": "env",
                "local": false,
                "$default": true
            },
            // Controls whether the raw JWT payload is logged (default should be FALSE for higher environments)
            "LOG_JWT_PAYLOAD": {
                "$filter": "env",
                "dev": true,
                "test": true,
                "prod": true,
                "$default": false
            },

            // Controls whether input/output JSON will be logged (default should be FALSE for higher environments)
            "LOG_JSON": {
                "INPUT": {
                    "$filter": "env",
                    "local": true,
                    "dev": true,
                    "test": true,
                    "prod": true,
                    "$default": false
                },
                "OUTPUT": {
                    "$filter": "env",
                    "local": true,
                    "dev": true,
                    "test": true,
                    "prod": true,
                    "$default": false
                }
            },
            // Controls whether the logs will be written to console (transaction logs are always logged to file)
            "TO_CONSOLE": {
                "$filter": "env",
                "local": true,
                "dev": true,
                "$default": false
            },
            "LOCATION": "./logs/", // Location to save the logs, needs the trailing "/"
            "FILENAME": {
                "INFO": "transaction.log"
            }

        },

        "PERFORMANCE": {
            // Controls whether any logging will be done
            "IS_ACTIVE": {
                "$filter": "env",
                "local": true,
                "dev": true,
                "$default": false
            },

            // Controls whether the logs will be written to console (transaction logs are always logged to file)
            "TO_CONSOLE": {
                "$filter": "env",
                "local": true,
                "$default": false
            },
            "LOCATION": "./logs/", // Location to save the logs, needs the trailing "/"
            "FILENAME": {
                "INFO": "performance.log"
            }
        }
    },

    "SENECA_TIMEOUT": 120000
};

