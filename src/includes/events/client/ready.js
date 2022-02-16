const Discord = require("discord.js")
const Savana = require("savana.js")

/*      Ready Events     */
module.exports = async (client) => {
    await Savana.output.show("ok", `I'am now connected on ${client.user.username} !`)
    
    client.user.setPresence(client.activities.name[0], {
        type: client.activities.type[0],
        url: client.activities.url[0]
    })

    setInterval(async () => {
        Savana.output.show("info", "Activity Updated!");

        var i = (await Savana.random.max(client.activities.time.length))

        client.user.setPresence(client.activities.name[i], {
            type: client.activities.type[i],
            url: client.activities.url[i]
        })

    }, client.activities.time[(await Savana.random.max(client.activities.time.length))] * 60 * 60 * 1000)

    client.guilds.cache.forEach(guild => {
        let newCommand;
        client.commands.forEach(async (command) => {
            if(guild) {
                newCommand = guild.commands;
            } else {
                newCommand = client.application.commands;
            }
            
            for(var i = 0; i < command.help.alias.length; i++) {
                try {
                    newCommand.create({
                        name: command.help.alias[i],
                        description: command.help.description,
                        options: command.help.options
                    })

                } catch (e) {
                    Savana.output.show("error", e)
                }
            }
            try {
                newCommand.create({
                    name: command.help.name,
                    description: command.help.description,
                    options: command.help.options
                })

            } catch(e) {
                Savana.output.show("error", e)
            }            
        });
    });
};