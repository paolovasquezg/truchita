import say from "../interaction/say.js"


const interaction = async (interaction) => {
    if (!interaction.isCommand()) return;

    if (interaction.commandName == 'say') {
        await say(interaction)
    }
}

export default interaction