const Savana = require("savana.js");

module.exports.run = async (client, interaction) => {

    var state = (interaction.options.get("awstatus").value) ? 1 : 0;

    await (Savana.UpdateGuild.id(interaction.guild.id, {
        anti_webhook: state
    }))

     interaction.reply({
         content: "C'est bon !",
         ephemeral: true
     }, {});
}

module.exports.help = {
    name: "antiwebhook", //String
    alias: ["-webhook"], //Object<String>
    description: "Set antibot status !", //String
    options: [{ //Object<JSON>
        type: "BOOLEAN", 
        name: "awstatus",
        description: "Define the anti webhook status",
        required: true,
        channel_types: 0,
    }],
    permissions: [], //Object<String>
    premiumLevel: 0, // Integer (Premium Level)
    whitelist: 7, // Integer  (Whitelist Level)
}