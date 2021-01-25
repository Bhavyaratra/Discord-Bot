require('dotenv').config();

module.exports =async function(msg, args){
    
    var keyword = args;

    const fetch = require("node-fetch");
    let url = `https://api.tenor.com/v1/search?q=${keyword}&key=${process.env.TENOR_KEY}&limit=8`;
    let response = await fetch(url);
    let json = await response.json();
    console.log(json);
    const index= Math.floor(Math.random() * json.results.length);
    msg.channel.send(json.results[index].url);
}