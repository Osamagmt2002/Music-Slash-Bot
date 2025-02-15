const Discord = require("discord.js")
const progressbar = require("string-progressbar")

module.exports = {
    name: "vol",
    description: "Change the music player's volume.",
    options: [
        {
            name: "amount",
            type: 10,
            description: "Percentage of the audio volume",
            required: true
        }
    ],
    timeout: 5000,
    run: async (interaction, client) => {
        const args = interaction.options.getNumber("amount")
        const queue = await client.distube.getQueue(interaction)
        const voiceChannel = interaction.member.voice.channel
      /*  if (!voiceChannel) {
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
        const volume = parseInt(args)
        if (volume < 1 || volume > 100) {
            return interaction.reply({ content: "Please enter a valid number (between 1 and 100)", ephemeral: true })
        }
        await client.distube.setVolume(interaction, volume)
        const total = 100
        const current = volume
        await interaction.reply(`Set the new volume to ${volume}%.`)
    }
}
