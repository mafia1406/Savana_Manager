module.exports.run = async (client, interaction) => {
    interaction.reply({
        content: "Pong !",
        ephemeral: true
    });
}

module.exports.help = {
    name: "ping",
    alias: ["ping", "test"],
    description: "Test command to get pong",
    permissions: [],
    premiumLevel: 0,
}