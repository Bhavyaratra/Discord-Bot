
const hey = require("./commands/hey");
const clear = require("./commands/clear");

const Allcommands = { hey , clear };

module.exports = async function (msg){ 
                        //hellhole testing                     //kilsao_matt testing
    if(msg.channel.id=='778678501217533972' || msg.channel.id=='781135786858250291'){
        var s=msg.content.split(" ");
        let command = s.shift();
        if (command.charAt(0)==="$")
        {
            //valid command
            command = command.substring(1);
            Allcommands[command](msg , s);
        }
        
    }
}

