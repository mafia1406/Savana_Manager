const Discord = require("discord.js");
const Savana = require("../../index");

module.exports.run = async (client, interaction) => {
    var embed = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setTitle(``)
        .setURL("")
        .setDescription("")
        .setFooter(client.footer);

    interaction.reply({
        embeds: [embed],
        ephemeral: true
    });
}

module.exports.help = {
    name: "verify",
    alias: ["verif", "verifier"],
    description: "Get verified on this server !",
    permissions: [],
    premiumLevel: 0,
}