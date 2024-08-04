const client = require("./client")


async function init(){
    // await client.lpush("message1", "Hii")
    // await client.lpush("message1", "How are you")
    // await client.lpush("message1", "so what")

    // console.log(await client.llen("message1"))
    // console.log(await ?client.lpop("message1"))
    await client.lpop("message1")
    await client.lpop("message1")
    await client.lpop("message1")
    await client.lpush("message1", "Hii")
    await client.lpush("message1", "Hellp")
    await client.lpush("message1", "how r u")
    await client.rpush("message1", "Hii")
    await client.rpop("message1", "Hello")
    console.log(await client.lrange("message1",0, 20))
    
}

init()