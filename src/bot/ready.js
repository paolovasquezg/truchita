import commands from "../commands/comands.js"
import { DISCORD_TOKEN, GUILD_ID } from "../bot/constants.js"
import { REST, Routes } from 'discord.js'

const REST_CLIENT = new REST({ version: '10' }).setToken(DISCORD_TOKEN)

const ready = async function () {
    await REST_CLIENT.put(
        Routes.applicationGuildCommands(this.user.id, GUILD_ID),
        { body: commands }
    )
}

export default ready