'use strict';

var btc = {};
var owsCommon = require('ows-common');

// module information
btc.version = 'v' + require('./package.json').version;

// crypto
btc.crypto = {};
btc.crypto.BN = owsCommon.crypto.BN;
btc.crypto.ECDSA = require('./lib/crypto/ecdsa');
btc.crypto.Hash = owsCommon.crypto.Hash;
btc.crypto.Random = owsCommon.crypto.Random;
btc.crypto.Point = require('./lib/crypto/point');
btc.crypto.Signature = require('./lib/crypto/signature');

// encoding
btc.encoding = {};
btc.encoding.Base58 = owsCommon.encoding.Base58;
btc.encoding.Base58Check = owsCommon.encoding.Base58Check;
btc.encoding.BufferReader = owsCommon.encoding.BufferReader;
btc.encoding.BufferWriter = owsCommon.encoding.BufferWriter;
btc.encoding.Varint = owsCommon.encoding.Varint;

// utilities
btc.util = {};
btc.util.buffer = owsCommon.util.buffer;
btc.util.js = owsCommon.util.js;
btc.util.preconditions = owsCommon.util.preconditions;

// errors thrown by the library
btc.errors = owsCommon.errors;

// main bitcoin library
btc.Address = require('./lib/address');
btc.Block = require('./lib/block');
btc.MerkleBlock = require('./lib/block/merkleblock');
btc.BlockHeader = require('./lib/block/blockheader');
btc.HDPrivateKey = require('./lib/hdprivatekey.js');
btc.HDPublicKey = require('./lib/hdpublickey.js');
btc.Networks = require('./lib/networks');
btc.Opcode = require('./lib/opcode');
btc.PrivateKey = require('./lib/privatekey');
btc.PublicKey = require('./lib/publickey');
btc.Script = require('./lib/script');
btc.Transaction = require('./lib/transaction');
btc.URI = require('./lib/uri');
btc.Unit = require('./lib/unit');

// dependencies, subject to change
btc.deps = {};
btc.deps.bnjs = require('bn.js');
btc.deps.bs58 = require('bs58');
btc.deps.Buffer = Buffer;
btc.deps.elliptic = require('elliptic');
btc.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
btc.Transaction.sighash = require('./lib/transaction/sighash');

module.exports = btc;
