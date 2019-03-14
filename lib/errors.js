'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on rtmcore-p2p Module {0}'
};

module.exports = require('rtmcore-lib').errors.extend(spec);
