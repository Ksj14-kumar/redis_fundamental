const client = require("./client");

async function init() {
  const res1 = await client.hset("bike:1", {
    model: "Deimos",
    brand: "Ergonom",
    type: "Enduro bikes",
    price: 4972,
  });

  console.log(res1);

  //retrival information

  console.log(await client.hget("bike:1", "model"))  //retrive single key for a hashmap
  console.log(await client.hmget("bike:1", ["brand", "model", "price"]))  //retrive multiple key of a hashmap
  console.log(await client.hgetall("bike:1"))
  console.log(await client.hincrby("bike:1", "price",100))
  console.log(await client.hincrby("bike:1", "price", -100))
}

init();
