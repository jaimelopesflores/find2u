'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
/* eslint-disable no-unused-vars */
var requireProcessEnv = function requireProcessEnv(name) {
  if (!process.env[name]) {
    throw new Error('You must set the ' + name + ' environment variable');
  }
  return process.env[name];
};

/* istanbul ignore next */
if (process.env.NODE_ENV !== 'production') {
  var dotenv = require('dotenv-safe');
  dotenv.load({
    path: _path2.default.join(__dirname, '../.env'),
    sample: _path2.default.join(__dirname, '../.env.example')
  });
}

var config = {
  all: {
    env: process.env.NODE_ENV || 'development',
    root: _path2.default.join(__dirname, '..'),
    port: process.env.PORT || 3000,
    ip: process.env.IP || '0.0.0.0',
    masterKey: requireProcessEnv('MASTER_KEY'),
    jwtSecret: requireProcessEnv('JWT_SECRET'),
    mongo: {
      options: {
        db: {
          safe: true
        }
      }
    }
  },
  test: {
    mongo: {
      uri: 'mongodb://localhost/temp-test',
      options: {
        debug: false
      }
    }
  },
  development: {
    mongo: {
      uri: 'mongodb://localhost/temp-dev',
      options: {
        debug: true
      }
    }
  },
  production: {
    ip: process.env.IP || undefined,
    port: process.env.PORT || 8080,
    mongo: {
      uri: process.env.MONGODB_URI || 'mongodb://admin:Bilac_123@ds141454.mlab.com:41454/find2u'
    }
  }
};

module.exports = _lodash2.default.merge(config.all, config[config.all.env]);
exports.default = module.exports;
//# sourceMappingURL=config.js.map