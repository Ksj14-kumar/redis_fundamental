const client = require("./client")

async function init(){
    await client.set("user:1", "tony")  // set single value in redis db
    await client.mset(["user:2", "sanju", "user:3", "Aman Dixit"])  // set multiple value at same time with
    await client.mget(["user:1", "user:2", "user:3"])  // get multiple value at same time
    await client.set("number",0)  // set numeric value and 
    await client.incrby("number", 2)  // increament numeric value via specif number
    // await client.expire("number", 10) // value in second (set expire time)
    console.log("hii")
    console.log(await client.get("user:1"))  
    console.log(await client.get("user:2"))
    console.log(await client.get("user:3"))
    console.log(await client.mget(["user:1", "user:2", "user:3"]))
    // console.log(await client.incrby("number", 2))
    // console.log(await client.getdel("number"))   //get value and delete
    // console.log(await client.incrby("number", 6))
    // console.log(await client.incrbyfloat("number", .4567))
    await client.del(["user:1", "user:2"])  //delete multiple keys at same times
    console.log(await client.get("number"))
    console.log(await client.get("user:1"))
    console.log(await client.substr("f1:1", 0, 4))

}

init()