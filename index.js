'use strict';

var btccore = module.exports;

// module information
btccore.version = 'v' + require('./package.json').version;
btccore.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of ows-btc-core-lib found. ' +
      'Please make sure to require ows-btc-core-lib and check that submodules do' +
      ' not also include their own ows-btc-core-lib dependency.';
    throw new Error(message);
  }
};
btccore.versionGuard(global._btccore);
global._btccore = btccore.version;

// crypto
btccore.crypto = {};
btccore.crypto.BN = require('./lib/crypto/bn');
btccore.crypto.ECDSA = require('./lib/crypto/ecdsa');
btccore.crypto.Hash = require('./lib/crypto/hash');
btccore.crypto.Random = require('./lib/crypto/random');
btccore.crypto.Point = require('./lib/crypto/point');
btccore.crypto.Signature = require('./lib/crypto/signature');

// encoding
btccore.encoding = {};
btccore.encoding.Base58 = require('./lib/encoding/base58');
btccore.encoding.Base58Check = require('./lib/encoding/base58check');
btccore.encoding.BufferReader = require('./lib/encoding/bufferreader');
btccore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
btccore.encoding.Varint = require('./lib/encoding/varint');

// utilities
btccore.util = {};
btccore.util.buffer = require('./lib/util/buffer');
btccore.util.js = require('./lib/util/js');
btccore.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
btccore.errors = require('./lib/errors');

// main bitcoin library
btccore.Address = require('./lib/address');
btccore.Block = require('./lib/block');
btccore.MerkleBlock = require('./lib/block/merkleblock');
btccore.BlockHeader = require('./lib/block/blockheader');
btccore.HDPrivateKey = require('./lib/hdprivatekey.js');
btccore.HDPublicKey = require('./lib/hdpublickey.js');
btccore.Networks = require('./lib/networks');
btccore.Opcode = require('./lib/opcode');
btccore.PrivateKey = require('./lib/privatekey');
btccore.PublicKey = require('./lib/publickey');
btccore.Script = require('./lib/script');
btccore.Transaction = require('./lib/transaction');
btccore.URI = require('./lib/uri');
btccore.Unit = require('./lib/unit');

// dependencies, subject to change
btccore.deps = {};
btccore.deps.bnjs = require('bn.js');
btccore.deps.bs58 = require('bs58');
btccore.deps.Buffer = Buffer;
btccore.deps.elliptic = require('elliptic');
btccore.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
btccore.Transaction.sighash = require('./lib/transaction/sighash');
