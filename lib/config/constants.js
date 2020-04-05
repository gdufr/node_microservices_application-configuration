module.exports = {

    // Custom Node Error Codes
    "NODE_CODES": {
        "CACHING_DOWN": {
            "ERROR_CODE": "NODE001",
            "STATUS_CODE": 503,
            "ERROR_DESCRIPTION": "Cannot connect to Redis cache server"
        },
        "ESB_TIMEOUT": {
            "ERROR_CODE": "NODE002",
            "STATUS_CODE": 503,
            "ERROR_DESCRIPTION": "Request to ESB timed out"
        },
        "TRANSFORMATION_ERROR": {
            "ERROR_CODE": "NODE003",
            "STATUS_CODE": 500,
            "ERROR_DESCRIPTION": "Unexpected/missing attributes returned from ESB/LDAP/IAM/etc or transformation error"
        },
        "BAD_INPUT": {
            "ERROR_CODE": "NODE004",
            "STATUS_CODE": 400,
            "ERROR_DESCRIPTION": "Unexpected/missing attributes received from front end or transformation error"
        },
        "ESB_DOWN": {
            "ERROR_CODE": "NODE005",
            "STATUS_CODE": 503,
            "ERROR_DESCRIPTION": "ESB server down"
        },
        "ESB_ERROR": {
            "ERROR_CODE": "NODE006",
            "STATUS_CODE": 400,
            "ERROR_DESCRIPTION": "Unhandled SOAP transformation error"
        },
        "LDAP_DOWN": {
            "ERROR_CODE": "NODE007",
            "STATUS_CODE": 503,
            "ERROR_DESCRIPTION": "LDAP/IDP is down"
        },
        "INTERNAL_NODE_ERROR": {
            "ERROR_CODE": "NODE008",
            "STATUS_CODE": 500,
            "ERROR_DESCRIPTION": "Unhandled error"
        },
        "REQUEST_TRANSFORMATION_ERROR": {
            "ERROR_CODE": "NODE009",
            "STATUS_CODE": 400,
            "ERROR_DESCRIPTION": "Indicates unexpected/missing attributes found while forming ESB/LDAP/IAM request"
        },
        "USER_NOT_AUTHORIZED": {
            "ERROR_CODE": "NODE010",
            "STATUS_CODE": 401,
            "ERROR_DESCRIPTION": "Authentication required"
        },
        "USER_PREPAID_STATUS": {
            "ERROR_CODE": "NODE011",
            "STATUS_CODE": 400,
            "ERROR_DESCRIPTION": "Prepaid Registration Not Eligible"
        },
        "INVALID_ANSWER": {
            "ERROR_CODE": "NODE012",
            "STATUS_CODE": 400,
            "ERROR_DESCRIPTION": "Answer is invalid or not found",
            "QUESTION": null
        },
        "INVALID_RECAPTCHA": {
            "ERROR_CODE": "NODE013",
            "STATUS_CODE": 400,
            "ERROR_DESCRIPTION": "Invalid ReCaptcha response/parameters missing"
        },
        "REQUEST_PASSCODE": {
            "ERROR_CODE": "NODE014",
            "STATUS_CODE": 400,
            "ERROR_DESCRIPTION": "Invalid passcode request"
        },
        "VERIFY_PASSCODE": {
            "ERROR_CODE": "NODE015",
            "STATUS_CODE": 400,
            "ERROR_DESCRIPTION": "Passcode does not match or has expired"
        },
        // NODE016 - NODE020 are used for IDP, see below
        "RECAPTCHA_SERVICE_DOWN": {
            "ERROR_CODE": "NODE021",
            "STATUS_CODE": 503,
            "ERROR_DESCRIPTION": "Unable to connect to reCaptcha service"
        },
        "VERIFY_EMAIL": {
            "ERROR_CODE": "NODE022",
            "STATUS_CODE": 400,
            "ERROR_DESCRIPTION": "Email verification does not match or has expired"
        },
        "LOCKOUT": {
            "ERROR_CODE": "NODE023",
            "STATUS_CODE": 400,
            "ERROR_DESCRIPTION": "You have been locked out for 30 minutes. Please call for support"
        },
        "USER_REGISTRATION": {
            "ERROR_CODE": "NODE024",
            "STATUS_CODE": 400,
            "ERROR_DESCRIPTION": "User has already been registered"
        },
        "VERIFY_PIN": {
            "ERROR_CODE": "NODE025",
            "STATUS_CODE": 400,
            "ERROR_DESCRIPTION": "The PIN you entered does not match our records"
        },
        "DUPLICATE_PASSWORD": {
            "ERROR_CODE": "NODE026",
            "STATUS_CODE": 400,
            "ERROR_DESCRIPTION": "Duplicate password"
        }
    },

    // ESB/SOAP related
    "ESB": {
        "CODES": {
            "SUCCESS": "value",
            "SYSTEM_ERROR": "value",
            "SUB_CODE": "value",
            "STATUS_CODE_FAULT": 500,
            "STATUS_CODE_ERROR": 400
        }
    },

    // LDAP Settings related
    "LDAP": {
        "CODES": {
            "AUTHORIZED": "authorized",
            "UNAUTHORIZED": "unauthorized",
            "SUB_CODE": "value"
        }
    },

    "IDP": {
        "ERROR_DESCRIPTION": {
            "invalid token": "NODE020", //ex: refresh token is invalid
            "invalid_grant: Login failed, please try again.": "NODE019", //ex: invalid password
            "OAuth Client Authentication Failure because username parameter is missing in the request": "NODE018", // ex: no username sent in request
            "invalid_grant: Your login has been disabled due to intruder detection.": "NODE017", // ex: exceeded login attempts
            default: "NODE016"
        }
    },

    ALLOW_HEADERS: [
        "sid",
        "lang",
        "origin",
        "X-Request-Id",
        "X-Requested-With",
        "Accept",
        "Accept-Version",
        "Content-Type",
        "Api-Version",
        "uxfauthorization",
        "service",
        "operation",
        "authorization",
        "Accept-Encoding",
        "Accept-Language",
        "Access-Control-Request-Headers",
        "Access-Control-Request-Method",
        "Cache-Control",
        "Connection",
        "Host",
        "Origin",
        "Pragma",
        "Referer",
        "User-Agent",
        "accept",
        "x-devtools-emulate-network-conditions-client-id"
    ],
    "LOGGING": {
        "LOG_TYPE": {
            "REQUEST": "REQUEST",
            "RESPONSE": "RESPONSE",
            "FUNCTION": {
                "ENTER": "FUNCTION_ENTER",
                "EXIT": "FUNCTION_EXIT",
                "INSIDE": "FUNCTION_INSIDE"
            },
            "EXECUTION_TIME": "EXECUTION_TIME"
        },
        "REQ_TYPE": {
            "API_CALL": "API_CALL",
            "OAUTH": "OAUTH",
            "CMT": "CMT",
            "OTHER": "OTHER"
        }
    },
    "DATETIME": {
        "DATE_FORMAT": "MM/DD/YYYY",
        "UTC_FORMAT": "YYYY-MM-DD[T]HH:mm:ss[Z]",
        "UTC_FORMAT_T": "YYYY-MM-DD",
        "SOAP_DATE_FORMAT": "YYYYMMDD"
    },
    "CARD_TYPE": {
        "visa": "Visa",
        "amex": "AmericanExpress",
        "discover": "Discover",
        "mastercard": "MasterCard"
    },
}
