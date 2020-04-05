/**
 *
 * @type {{getData: set of objects that matching the format returned from back end getData call}}
 * @usage var appConfig = require('application-configuration')();
 *      var getDataResponse = appConfig.mockData.get('/getData');
 *
 * Note: This file can be edited directly from gitlab by BA Team
 */
module.exports = {
    getData: {
        getDataResponseAttribute1: "value1",
        getDataResponseAttribute2: "value2"
    }
}
