require('dotenv').config();

module.exports= async function(msg , args){
    var keyword = args;

    const fetch = require("node-fetch");

    let url= `https://wallhaven.cc/api/v1/search?q=${keyword}&purity=111&atleast=1920x1080&apikey=${process.env.WALL_KEY}`;
    let response = await fetch(url);
    let json = await response.json();
    console.log(json); 
    let index = Math.floor(Math.random() * json.data.length);
    msg.channel.send(json.data[index].path);
}