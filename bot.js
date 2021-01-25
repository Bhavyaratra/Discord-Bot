console.log("GG!");

const fetch = require("node-fetch") 

const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();
 const api_key=process.env.API_KEY; 
client.login(api_key);

client.on('ready', readyDiscord);

function readyDiscord(){
    console.log('ping');
}
                               // "./" used to search file localy and not in node_modules 
const commandHandler = require("./commands");

client.on('message',commandHandler);

