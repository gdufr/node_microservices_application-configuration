## Synopsis

This module contains: 
* A wrapper library that uses the Confidence module for retrieving settings/constants. 
** Each property can have different settings, one for each environment and the NODE_ENV environment is used by the wrapper library to determine with value to use for each property

* The actual settings and constant values which are stored in settings.js and constants.js
** The included settings.js and constants.js files will contain default values. Ideally we will only store things that are used by all the projects. Things that are used only by a project/microservice should be in its own settings.js/constants.js file

* ESB keys and certs, JWT secret, SSL certs


## Initialization

```javascript
var appConfig = require('application-configuration')(config);
```

Note: the () after the require statement is mandatory but the opts object is optional.

This module is bundled with its own set of default settings.js and constants.js. These settings and constants can be overridden by passing in an object containing one or both of these properties.

appConfig is an object with two properties: settings and constants. Both these two properties have a 'get' function that can be used to retrieve the setting/constant.

Example:

```javascript
var config = {
    "settings": {
        "CONNECTION_MODE": "HTTPS"
    },
    "constants": {
        "ESB_ERROR_CODE": "0000001"
    },
    "mockData": {
        customer1:{
            "id": 93939393
            "mdn":[
                1231231234,
                5435435432
            ]
        }
    }
}

var appConfig = require('application-configuration')(config);

```

The above will override the default settings and constant values.

## Usage

Once intialized, you can retrieve a setting/constant by doing the following:

```javascript

appConfig.settings.get('/CONNECTION_MODE'); // This returns "HTTPS"

appConfig.constants.get('/NODE_CODES/CACHING_DOWN/ERROR_CODE'); // This returns "NODE001"

```