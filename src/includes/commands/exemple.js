const Savana = require("../../index")
const Discord = require("discord.js")
const { mysql } = require("../../index")

module.exports = (client) => {
    this.help = {
        name: "Ping",
        description: "Ping commands to get pong response",
        hwt: `${client.prefix}ping`
    }

    run: async (client, interaction) => {
        interaction.reply("Pong !")
    }
}