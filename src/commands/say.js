import { SlashCommandBuilder } from "discord.js"

const SayCommand = new SlashCommandBuilder()
    .setName('say')
    .setDescription('Envía un mensaje a través del bot')
    .addStringOption(option =>
      option.setName('message')
        .setDescription('Mensaje a enviar')
        .setRequired(true))

export default SayCommand;