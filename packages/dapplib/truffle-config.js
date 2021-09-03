require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter brand venture stool crawl shift protect inner cash food gauge'; 
let testAccounts = [
"0x36fa76e005371bcaf14aa3a0b7911d7aef34190cdcdd6c9fc095337576eee57d",
"0xa9713ea3d1e8f5562fd91514f06e8425b209f97b0b4e2e119f0e20b056c6f113",
"0xc6b2b5f3ea24d4059a2754da3b3d93e86420a0646b9945154337e616b56832b9",
"0x421b23918c92eca07a4d77fa31ec37a3fdc36e97d0e61d3cfe58738815cf9571",
"0xe1ce25deb798134000cbcc9ab79c2b1046124db03ea9947cb758f1721f005ce9",
"0xc3b57ea77a3a91c033b3444671c2d6e622a96aa42c1078ef6169e16e49c30960",
"0x2d115a358e39f447350ac3a2b16e7da8ee101aa64bdad2f8d8c4f0665e3643d8",
"0x5cb31d3c589389edd02568bf3f1b34a61427bbee22618d77d197123d01a37539",
"0x41bafa6e3aa2a1b3200231687a7ab07d854338e0b3b9dcbd65871d9b88e4a06e",
"0x9c28d51bb4336efe4d2699c264a4c780df826d36306beb0bcbe39045324cb301"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


