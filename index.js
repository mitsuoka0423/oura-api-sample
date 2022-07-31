const OuraApiClient = require('oura-api-v2-client');

const client = new OuraApiClient(process.env.ACCESS_TOKEN);

const main = async () => {
  const heartRate = await client.heartRate();
  console.log(heartRate);  
};

main();
