const Promise = require("bluebird");
const ping = require("ping");

const hosts = ["192.168.1.1", "google.com", "yahoo.com"];

async function pingHosts() {
  const pingResponsePromises = Promise.map(hosts, host =>
    ping.promise.probe(host)
  );

  return pingResponsePromises;
}

module.exports = {
  pingHosts
};
