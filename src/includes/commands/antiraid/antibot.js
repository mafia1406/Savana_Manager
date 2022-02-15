const Savana = require("savana.js");

module.exports.run = async (client, interaction) => {

    var state = interaction.options.get("abstatus").value;

    interaction.reply({
        content: "Pong !",
        ephemeral: true
    });

    Savana.output.show("info", `${JSON.stringify(state)}`);
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
}