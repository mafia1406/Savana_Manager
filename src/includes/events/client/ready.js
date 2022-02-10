const Discord = require("discord.js")
const Savana = require("../../index")

/*      Ready Events     */
module.exports = async (client) => {
    client.guilds.cache.forEach(guild => {
        let newCommand;
        client.commands.forEach(async (command) => {
            if(guild) {
                newCommand = guild.commands
            } else {
                newCommand = client.application.commands
            }
            
            for(var i = 0; i < command.help.alias.length; i++) {
                try {
                    newCommand.create({
                        name: command.help.alias[i],
                        description: command.help.description,
                    })
                } catch (e) {
                    Savana.output.show("error", e)
                }
            }
            try {
                newCommand.create({
                    name: command.help.name,
                    description: command.help.description,
                })
            } catch(e) {
                Savana.output.show("error", e)
            }            
        });
    });
};