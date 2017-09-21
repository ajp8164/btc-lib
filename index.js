'use strict';

var btccore = {};
var owsCommon = require('ows-common');

// module information
btccore.version = 'v' + require('./package.json').version;

// crypto
btccore.crypto = {};
btccore.crypto.BN = owsCommon.crypto.BN;
btccore.crypto.ECDSA = require('./lib/crypto/ecdsa');
btccore.crypto.Hash = owsCommon.crypto.Hash;
btccore.crypto.Random = owsCommon.crypto.Random;
btccore.crypto.Point = require('./lib/crypto/point');
btccore.crypto.Signature = require('./lib/crypto/signature');

// encoding
btccore.encoding = {};
btccore.encoding.Base58 = owsCommon.encoding.Base58;
btccore.encoding.Base58Check = owsCommon.encoding.Base58Check;
btccore.encoding.BufferReader = owsCommon.encoding.BufferReader;
btccore.encoding.BufferWriter = owsCommon.encoding.BufferWriter;
btccore.encoding.Varint = owsCommon.encoding.Varint;

// utilities
btccore.util = {};
btccore.util.buffer = owsCommon.util.buffer;
btccore.util.js = owsCommon.util.js;
btccore.util.preconditions = owsCommon.util.preconditions;

// errors thrown by the library
btccore.errors = owsCommon.errors;

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

module.exports = btccore;
