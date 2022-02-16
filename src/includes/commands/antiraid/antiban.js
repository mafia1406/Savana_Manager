const Savana = require("savana.js");

module.exports.run = async (client, interaction) => { //run function

    var time = interaction.options.get("step1").value;
    var ban_limit = interaction.options.get("step2").value;
    var action = interaction.options.get("step3").value;

    await (Savana.UpdateGuild.id(interaction.guild.id, {
        max_bans: ban_limit,
        time_max: time,
        time_action: action
    }))

    await (Savana.UpdateGuild.id(interaction.guild.id))
     interaction.reply({
         content: "C'est bon !",
         ephemeral: true
     }, {});
}

module.exports.help = {
    name: "antiban", //String
    alias: ["setupban"], //Object<String>
    description: "Set antiban  !", //String
    options: [{ //Object<JSON>
        type: "NUMBER", 
        name: "step1",
        description: "Configure the time in minute the bot save the ban for the limit.",
        required: true,
        channel_types: 0,
        min_value: 0,
        max_value: 10,
    }, {
        type: "NUMBER", 
        name: "step2",
        description: "Max ban in X minute(s)  (If the value is 0 the limit will be disabled).",
        required: true,
        channel_types: 0,
        min_value: 0,
        max_value: 30,
    }, {
        type: "NUMBER", 
        name: "step3",
        description: "Sanction if the ban limit has been exceeded.",
        required: true,
        choices: [{
            name: "Remove all roles",
            value: 1
        }, {
            name: "Kick",
            value: 2
        }, {
            name: "Ban",
            value: 3
        }],
        channel_types: 0,
    }],
    permissions: [], //Object<String>
    premiumLevel: 0, // Integer
    whitelist: 7, // Integer  (Whitelist Level)
}