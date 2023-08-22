require('dotenv').config();
const { Client, IntentsBitField, MessageReaction } = require('discord.js');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on('ready', (client) => {
  console.log(`✅ ${client.user.tag} is login and online ✅`);
})

client.on('messageCreate', (message) => {
  if(message.content == 'Alex better than Cool Doggo'){
    message.reply('Its not true❗');
  }
})


client.login(process.env.TOKEN);
