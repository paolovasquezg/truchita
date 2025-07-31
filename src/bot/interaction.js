import say from "../interaction/say.js"
import play from "../interaction/play.js";


const interaction = async (interaction) => {
    if (!interaction.isCommand()) return;

    if (interaction.commandName == 'say') {
        await say(interaction)
    }

    if (interaction.commandName == 'play'){
        await play(interaction)
    }
}

export default interaction