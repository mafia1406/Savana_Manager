const Savana = require("savana.js");

module.exports.run = async (client, interaction) => { //run function

    var state = (interaction.options.get("abstatus").value) ? 1 : 0;

    console.log(state)
    await (Savana.UpdateGuild.id(interaction.guild.id, {
        anti_bot: state
    }))

    await (Savana.UpdateGuild.id(interaction.guild.id))
     interaction.reply({
         content: "C'est bon !",
         ephemeral: true
     }, {});
}

module.exports.help = {
    name: "antibot", //String
    alias: ["protectbot"], //Object<String>
    description: "Set antibot status !", //String
    options: [{ //Object<JSON>
        type: "BOOLEAN", 
        name: "abstatus",
        description: "Define the anti bot status",
        required: true,
        channel_types: 0,
    }],
    permissions: [], //Object<String>
    premiumLevel: 0, // Integer
    whitelist: 7, // Integer  (Whitelist Level)
}