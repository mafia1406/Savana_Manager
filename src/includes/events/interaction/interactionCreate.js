const Discord = require("discord.js");
const Savana = require("savana.js");

/*      Interaction Events     */
module.exports = async (client, interaction) => {
    if(!interaction.isCommand()) return;
    var guildID = "00000000000000000"

    var cmd = client.commands.get(interaction.commandName) || client.commands.find(cmds => cmds.help.alias && cmds.help.alias.includes(interaction.commandName));

    if(interaction.guild){
        guildID = interaction.guild.id;
    }

    var guildData = (await Savana.GetGuild.id(interaction.guild.id));
    var userData = (await Savana.GetUser.id(interaction.user.id, guildID));

    if (cmd.help.whitelist > userData.cache.whitelist) return interaction.reply({
        content: "Vous n'avez pas le niveau de white list requis !",
        ephemeral: true
    });

    if (cmd.help.developer && !userData.cache.developer) return interaction.reply({
        content: "Vous n'êtes pas un développeur de Savana !",
        ephemeral: true
    });

    client.prefix = guildData.Settings.prefix;
    client.language = require(`../../language/${guildData.Settings.language}`);
    
    cmd.run(client, interaction)
}