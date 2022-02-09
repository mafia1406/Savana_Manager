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
    console.log("-----------------------------------------------CONSOLE :-----------------------------------------------");
    Savana.output.show('info', "Connecting to Discord.js API V13 in progress...")
    var [clientResult, ClientFields] = await mysql.query("SELECT * FROM `sm_settings`"); // Get Client Information From The DataBase
    
    var activities = { //Object (Cache of activities in database)
        name: [], //Array<String>
        type: [], //Array<String>
        url: [], //Array<URL>
        time: [] //Array<Integer>
    }

    if(clientResult && clientResult.length >= 0){

        await client.login(clientResult[0].token)

        for (var i = 0; i < clientResult.length; i++){
            activities.name.push(clientResult[i].activity)
            activities.type.push(clientResult[i].activityType)
            activities.url.push(clientResult[i].activityURL)
            activities.time.push(clientResult[i].activityInterval)
        }   
    } else {
        Savana.output.show("error", "Please introduce at least one line in the sm_settings table !")
    }

    fs.readdir("./src/includes/commands/", (err, content) => {
        if(err) Savana.output.show("error", err);

        if(content.length < 1) return Savana.output.show("error", "Please create folders in the commands folder !")

        var groups = [] //Array of folders
        content.forEach(element => {
            if(!element.includes(".")) groups.push(element) //Check if the element contains a . to add only the folder(s)
        })

        
    })


    Savana.output.show("info", "Everything is fine so far !")
}



/* Utilities
var guildData = (await Savana.GetGuild.id("840671648255311923"))
console.log( (await Savana.GetGuild.id("840671648255311923")).Config.verify.verify_type)

var [result, fields] = await mysql.query("SELECT * FROM `sm_iusers`");
console.log(result)
*/