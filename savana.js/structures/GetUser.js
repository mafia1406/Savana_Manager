const { mysql } = require("savana.js")
const Savana = require("savana.js");

/** 
 * @typedef {(userID: string)}
*/

module.exports = class GetUser {
    static async id(userID) {
        this.userid = userID;

        var [settings, fields] = [];

        [settings, fields] = await mysql.query(`SELECT * FROM \`sm_usersettings\` WHERE user_id=${this.userid}`);
        
        if(!settings[0]){
            await Savana.CreateUser.new(this.userid);
            [settings, fields] = await mysql.query(`SELECT * FROM \`sm_usersettings\` WHERE user_id=${this.userid}`);
        }

        this.cache = {
            id: settings[0].id,
            user_id: settings[0].user_id,
            descs: settings[0].descs,
            premium: {
                premiumLevel: settings[0].premiumLevel,
                guildPremium: settings[0].guildPremium
            },
            badge: {
                owner: settings[0].owner,
                developer: settings[0].developer,
                admin: settings[0].admin,
                support: settings[0].support,
                bugresolved: settings[0].bugresolved,
                partner: settings[0].partner
            },
            stats: {
                booster: settings[0].booster,
                vote: settings[0].vote,
                commands: settings[0].commands
            },
            card: {
                kingofsavana: settings[0].kingofsavana,
                topsecret: settings[0].topsecret,
                legendary: settings[0].legendary,
                epic: settings[0].epic,
                rare: settings[0].rare,
                current: settings[0].current
            }  
        };
        
        return {
            cache: this.cache
        };
    };
};