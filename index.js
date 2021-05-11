// PhoenixNorvell
const { constants } = require('buffer');
const chalk = require('chalk');

console.log(chalk.blue('Hello world!'));

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
const prefix = "?"
client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
  else{
      let args = msg.content.substring(prefix.length).split(" ");
      console.log(args)
      switch(args[0])
      {
          case 'website':
            msg.channel.send("https://www.youtube.com/channel/UC-PmQkjnog6mOwjPDd03mXA");
            break;
        case 'clear':
            if (!args[1]){
                return msg.reply("What define 2nd param")
            }
            else
            {
                msg.channel.bulkDelete(args[1]);
                break;
            }

      }
  }

 
});



client.login('ODM5OTEzMTIwNDc3NDc4OTc5.YJQkDA.ZH1qTHL8W-gzaKYOsqc-sleliqU');
