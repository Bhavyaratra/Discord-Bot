console.log("GG!");

const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();
 const api_key=process.env.API_KEY; 
client.login(api_key);

client.on('ready', readyDiscord);

function readyDiscord(){
    console.log('ping');
}

const greetings = [
    'Hello!',
    "Hey!",
    "What's up",
    "Yo!" 
]

client.on('message',gotMessage);

function gotMessage(msg){ //hellhole testing                     //kilsao_matt testing
    if(msg.channel.id=='778678501217533972' || msg.channel.id=='781135786858250291'){
        var s=msg.content;
    
        const index = Math.floor(Math.random() * greetings.length);

        if(msg.content==='hey' || msg.content==='hello' ){
        msg.reply(greetings[index]);
        }

        if(msg.content==='ghoda'){
            msg.channel.send('behen ka loda!');
        }

        if(s[0]==='c' && s[1]==='l'){
          
              var n=s.match(/\d/g);
              n=n.join("");
              n=Number(n)+1;  
                console.log(n);
                async function clear(){
                
                await msg.channel.bulkDelete(n)  
                }   
            clear()     
        }
    }
}

