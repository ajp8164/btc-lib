'use strict';

var should = require('chai').should();
var btccore = require('../');

describe('#versionGuard', function() {
  it('global._btccore should be defined', function() {
    should.equal(global._btccore, btccore.version);
  });

  it('throw an error if version is already defined', function() {
    (function() {
      btccore.versionGuard('version');
    }).should.throw('More than one instance of btccore-lib');
  });
});
