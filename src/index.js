const 
    Discord = require("discord.js"),
    fs = require("fs"),
    moment = require("moment"),
    replaceOnce = require("replace-once"),
    Savana = require("./includes/index"),
    { mysql } = require("./includes/index");



const client = new Discord.Client({
    retryLimit: 6,
    fetchAllMembers: true,
    messageCacheLifetime: 3600,
    ws: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MEMBERS, Discord.Intents.FLAGS.GUILD_BANS, Discord.Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS, Discord.Intents.FLAGS.GUILD_INTEGRATIONS, Discord.Intents.FLAGS.GUILD_WEBHOOKS, Discord.Intents.FLAGS.GUILD_INVITES, Discord.Intents.FLAGS.GUILD_VOICE_STATES, Discord.Intents.FLAGS.GUILD_PRESENCES, Discord.Intents.FLAGS.GUILD_MESSAGES, Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Discord.Intents.FLAGS.GUILD_MESSAGE_TYPING, Discord.Intents.FLAGS.DIRECT_MESSAGES, Discord.Intents.FLAGS.DIRECT_MESSAGE_REACTIONS, Discord.Intents.FLAGS.DIRECT_MESSAGE_TYPING],
    intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MEMBERS, Discord.Intents.FLAGS.GUILD_BANS, Discord.Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS, Discord.Intents.FLAGS.GUILD_INTEGRATIONS, Discord.Intents.FLAGS.GUILD_WEBHOOKS, Discord.Intents.FLAGS.GUILD_INVITES, Discord.Intents.FLAGS.GUILD_VOICE_STATES, Discord.Intents.FLAGS.GUILD_PRESENCES, Discord.Intents.FLAGS.GUILD_MESSAGES, Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Discord.Intents.FLAGS.GUILD_MESSAGE_TYPING, Discord.Intents.FLAGS.DIRECT_MESSAGES, Discord.Intents.FLAGS.DIRECT_MESSAGE_REACTIONS, Discord.Intents.FLAGS.DIRECT_MESSAGE_TYPING],
})

main()

async function main() {
    var [clientResult, ClientFields] = await mysql.query("SELECT * FROM `sm_settings`"); // Get Client Information From The DataBase
    var activities = {
        name: [],
        type: [],
        url: [],
        time: []
    }

    if(clientResult && clientResult.length >= 0){

        await client.login(clientResult[0].token)

        for (var i = 0; i < clientResult.length; i++){
            activities.name.push(clientResult[i].activity)
            activities.type.push(clientResult[i].activityType)
            activities.url.push(clientResult[i].activityURL)
            activities.time.push(clientResult[i].activityInterval)
        }   
    }

    console.log(activities)
    //var guildData = (await Savana.GetGuild.id("840671648255311923"))
    //console.log( (await Savana.GetGuild.id("840671648255311923")).Config.verify.verify_type)
}

/*
var [result, fields] = await mysql.query("SELECT * FROM `sm_iusers`");
console.log(result)
*/


