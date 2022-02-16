const Discord = require("discord.js");
const Savana = require("savana.js");
var [result, fields] = [];


module.exports.run = async (client, interaction) => {
    var verifyURL = "https://savana-project.com/verify/";

    [result, fields] = await Savana.mysql.query(`SELECT * FROM \`sm_verify\` WHERE userid=${interaction.user.id} AND serverid=${interaction.guild.id}`);

    if(!result[0]){
        var verifyKey = (await Savana.random.key());

        await Savana.mysql.query(`INSERT INTO \`sm_verify\` (userid, serverid, apikey, roleid, username, guildname) VALUES ('${interaction.user.id}', '${interaction.guild.id}', '${verifyKey}', '${(await Savana.GetGuild.id(interaction.guild.id)).Config.verify.verify_roles}', '${interaction.user.username}', '${interaction.guild.name}')`)
    
        verifyURL += verifyKey;
    } else {
        verifyURL += result[0].apikey; 
    }


    var embed = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setTitle(`TEST`)
        .setURL(verifyURL)
        .setDescription("TEST")
        .setFooter({
            text: client.footer
        });

    interaction.reply({
        embeds: [embed],
        ephemeral: true
    });
};

module.exports.help = {
    name: "verify",
    alias: ["verif", "verifier"],
    description: "Get verified on this server !",
    permissions: [],
    premiumLevel: 0,
};