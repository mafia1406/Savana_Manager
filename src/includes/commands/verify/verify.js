const Discord = require("discord.js");
const Savana = require("../../index");
var [result, fields] = [];


module.exports.run = async (client, interaction) => {
    var verifyURL = "https://savana-project.com/verify/";
    var verifyKey = "";

    [result, fields] = await Savana.mysql.query(`SELECT * FROM \`sm_verify\` WHERE userid=${interaction.user.id} AND serverid=${interaction.guild.id}`);

    if(!result[0]){
        var serials = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        var chars = 4;
        var segments = 4;

        for (var i = 0; i < segments; i++) {
            var segment = "";

            for (var I = 0; I < chars; I++) {
                var x = Math.floor( Math.random() * ( 35 - 0 + 1 ) ) + 0;
                segment += serials[x];
            }

            verifyKey += segment;

            if(i < ( segments - 1)){
                verifyKey += "-";
            }
        }

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
        .setFooter(client.footer);

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