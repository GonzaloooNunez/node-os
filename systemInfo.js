const { OsInfo } = require("./osModule");
const { getNetworkInfo } = require("./networkModule");

console.log("Información del sistema operativo:");
const osInfo = OsInfo();
for (const key in osInfo) {
  console.log(`${key}: ${osInfo[key]}`);
}

console.log("\nInformación de las interfaces de red:");

getNetworkInfo("lo0", "IPv4", "127.0.0.1", true);
getNetworkInfo("lo0", "IPv6", "::1", true);
getNetworkInfo("lo0", "IPv6", "fe80::1", true);
getNetworkInfo("en5", "IPv6s", "fe80::aede:48ff:fe00:1122", false);

const networkInfo = getNetworkInfo();
networkInfo.forEach((item) => {
  console.log(`Interfaz ${item.Interfaz}:`);
  console.log(`  Familia: ${item.Familia}`);
  console.log(`  Dirección: ${item.Dirección}`);
  console.log(`  Interno: ${item.Interno}`);
});
