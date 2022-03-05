const Discord = require("discord.js")
const status = (queue) => `Volume: \`${queue.volume}%\` | Loop: \`${queue.repeatMode ? queue.repeatMode === 2 ? "All Queue" : "This Song" : "Off"}\` | Autoplay: \`${queue.autoplay ? "On" : "Off"}\` | Filter: \`${queue.filters.join(", ") || "Off"}\``
module.exports = {
    name: "np",
    description: "Current song playing",
    timeout: 5000,
    run: async (interaction, client) => {
        const queue = await client.distube.getQueue(interaction)
        const voiceChannel = interaction.member.voice.channel
     /*   if (!voiceChannel) {
            return interaction.reply({ content: "Please join a voice channel!", ephemeral: true })
        }
        if (!queue) {
            const queueError = new Discord.MessageEmbed()
                .setDescription("There is Nothing Playing")
                .setColor("RANDOM")
            return interaction.reply({ embeds: [queueError] })
        }
        if (interaction.member.guild.me.voice.channelId !== interaction.member.voice.channelId) {
            return interaction.reply({ content: "You are not on the same voice channel as me!", ephemeral: true })
        }*/
        const song = queue.songs[0]
        const embed = new Discord.MessageEmbed()
            .setDescription(`[${song.name}](${song.url}) \`[${queue.formattedCurrentTime}/${song.formattedDuration}]\``)
            .setThumbnail(song.thumbnail)
            .setFooter({ text: `${song.user.username}`, iconURL: song.user.avatarURL() 
           return interaction.reply(`:notes: Now Playing`)
        await interaction.channel.send({ embeds: [embed] })
    }
}
