const say = async (interaction) => {

    const message = interaction.options.getString('message')
    await interaction.reply(message)
}

export default say