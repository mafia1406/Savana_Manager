const Savana = require("savana.js");
var badgeEmoji = {
    "owner": "a:courone:789173585507385354",
    "dev": ":developer:858468570576584754",
    "admin": ":administrator:858468570495975424",
    "support": ":support:858468570559414282",
    "mbughunter": ":mbughunter:858468570497024030",
    "bughunter": ":bughunter:858468570610139146",
    "partner": "a:partner:859551112326938635",
    "p1": ":p1:858468570497024031",
    "p2": ":p2:858468570539622440",
    "p3": ":p3:858468570170392618",
    "boost": "a:nitro:789172677062426667"
};


module.exports.run = async (client, interaction) => {
    var userData = (await Savana.GetUser.id(interaction.user.id))

    console.log(userData)

    await interaction.reply({
        content: JSON.parse(userData),
        ephemeral: true
    })
};

module.exports.help = {
    name: "profil",
    alias: ["userinfo", "getuser", "infouser"],
    description: "Get verified on this server !",
    permissions: [],
    premiumLevel: 0,
};