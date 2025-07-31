import { SlashCommandBuilder } from "discord.js"

const PlayCommand = new SlashCommandBuilder()
    .setName('play')
    .setDescription('Reproduce el sonido de un video')
    .addStringOption(option =>
      option.setName('name')
        .setDescription('Nombre del video')
        .setRequired(true))

export default PlayCommand