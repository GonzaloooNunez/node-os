const os = require("os");

function getNetworkInfo() {
  const networkInterfaces = os.networkInterfaces();
  const networkInfo = [];

  for (const iface in networkInterfaces) {
    networkInterfaces[iface].forEach((addr) => {
      networkInfo.push({
        Interfaz: iface,
        Familia: addr.family,
        Dirección: addr.address,
        Interno: addr.internal,
      });
    });
  }

  return networkInfo;
}

module.exports = {
  getNetworkInfo,
};
