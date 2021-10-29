require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good clock bottom short blanket crater remember history grid kiwi suit tonight'; 
let testAccounts = [
"0x5992716b9018b3cf5d462625c2a4a167acd11e5cd1fca177c4b8167c79baa6b2",
"0x9de6b621fd617d5e9c61ef228621f5fb16509fa3a6f6980645775e8d309d275c",
"0xb54dc5d6cc6df4d3ace047ca6befd319c4a0342585f7c5b29f3b89d11f7494ed",
"0xbb342b7ec667d4784bed78ba782d53a96b7da97715fbb7a1e08c3a6916f052b9",
"0xbb80b7801c507256a20c48a2fe9b8837f43f182a94c671518a46156498129602",
"0xa331624d8400f118eb1afe33c19fe0fec13cca685cc9453a2d2087b512eb06b1",
"0x37bd3a41766ba2f4128e649c0443a7af6ab5483af800255ce836706de4e421c7",
"0x8cdd63041b5fe01abd19235508d8c5e5ef43edabb785eef0033a9e0c4612d732",
"0x23ffe7645c468df9658921b9856ea292323dbbec861671ebc36819926ee7b10d",
"0x8e0288e9ec1574d93a1564c549411a321baacbb1d145ad05ce50842e4f514396"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

