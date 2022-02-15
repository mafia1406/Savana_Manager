const Discord = require("discord.js");
const Savana = require("savana.js");

/*      Interaction Events     */
module.exports = async (client, interaction) => {
    if(!interaction.isCommand()) return;

    var cmd = client.commands.get(interaction.commandName) || client.commands.find(cmds => cmds.help.alias && cmds.help.alias.includes(interaction.commandName));

    var guildData = (await Savana.GetGuild.id(interaction.guild.id));
    
    client.prefix = guildData.Settings.prefix;
    client.language = require(`../../language/${guildData.Settings.language}`);


    
    cmd.run(client, interaction)
}