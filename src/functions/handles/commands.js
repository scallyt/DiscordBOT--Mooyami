const fs = require("fs");

module.exports = (client) => {
  client.commands = (async) => {
    const commandsFolder = fs.readdirSync("./src/commands");
    for (const folder of commandsFolder) {
      const commandFile = fs
        .readdirSync(`./src/commands/${folder}`)
        .filter((file) => file.endsWith(".js"));


        for(const file of  commandFile){
            
        }
    }
  };
};
