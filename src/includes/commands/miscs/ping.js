module.exports.run = async (client, interaction) => {
    interaction.reply({
        content: "Pong !",
        ephemeral: true
    });
}

module.exports.help = {
    name: "ping", //Array
    alias: ["ping", "test"], //Array<String>
    description: "Test command to get pong", //String
    permissions: [], //Array<String>
    premiumLevel: 0, //Integer (Premium Level)
    options: [], //Object<JSON>
    whitelist: 7, //Integer  (Whitelist Level)
    developer: true, //Boolean
}