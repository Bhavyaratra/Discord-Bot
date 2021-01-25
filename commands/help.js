const Discord = require('discord.js');


module.exports = function(msg , args){
    const embedex = new Discord.MessageEmbed()
    .setColor('#9999f')
    .setTitle('commands')
    .setThumbnail('https://imgur.com/vtjO5K3.png')
    .addField(
		 'Prefix: $', 'clear \ngif' ,true
		

    )
    .setTimestamp();


    msg.channel.send(embedex);
}