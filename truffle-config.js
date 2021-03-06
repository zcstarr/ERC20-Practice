const Web3 = require("web3");
require("ts-node/register");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*", // Match any network id
    },
    kotti: {
      network_id: "*",
      provider: new Web3.providers.HttpProvider('https://services.jade.builders/multi-geth/kotti/1.9.9')
    }
  },
  test_file_extension_regexp: /.*\.ts$/
};

