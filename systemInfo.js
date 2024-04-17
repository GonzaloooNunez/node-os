const { OsInfo } = require("./osModule");
const { getNetworkInfo } = require("./networkModule");

console.log("Información del sistema operativo:");
const osInfo = OsInfo();
for (const key in osInfo) {
  console.log(`${key}: ${osInfo[key]}`);
}

console.log("\nInformación de las interfaces de red:");

const networkInfo = getNetworkInfo();
networkInfo.forEach((item) => {
  console.log(`Interfaz ${item.Interfaz}:`);
  console.log(`  Familia: ${item.Familia}`);
  console.log(`  Dirección: ${item.Dirección}`);
  console.log(`  Interno: ${item.Interno}`);
});
