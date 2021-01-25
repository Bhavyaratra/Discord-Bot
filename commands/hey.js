const greetings = [
    'Hello!',
    "Hey!",
    "What's up",
    "Yo!" 
];

module.exports= function(msg, args){
const index = Math.floor(Math.random() * greetings.length);
msg.reply(greetings[index]);
}