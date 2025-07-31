import ready from './bot/ready.js'
import interaction from './bot/interaction.js'
import BOT from './bot/basic.js'
import {DISCORD_TOKEN} from './bot/constants.js'

BOT.on('interactionCreate', interaction)
BOT.on('ready', ready)

BOT.login(DISCORD_TOKEN)