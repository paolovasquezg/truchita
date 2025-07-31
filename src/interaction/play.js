import { joinVoiceChannel, createAudioPlayer, createAudioResource, AudioPlayerStatus, StreamType } from '@discordjs/voice';
import ytdl from '@distube/ytdl-core';
import ytSearch from 'yt-search';

const play = async (interaction) => {
  const query = interaction.options.getString('name');
  const voiceChannel = interaction.member.voice.channel;

  if (!voiceChannel) {
    return await interaction.reply('🔇 ¡Debes estar en un canal de voz!');
  }

const results = await ytSearch(query);
if (!results.videos.length) {
  return await interaction.reply('❌ No se encontró ningún video con ese nombre.');
}
const url = results.videos[0].url;

  try {
    const connection = joinVoiceChannel({
      channelId: voiceChannel.id,
      guildId: voiceChannel.guild.id,
      adapterCreator: voiceChannel.guild.voiceAdapterCreator,
      selfDeaf: false,
      selfMute: false
    });

    const player = createAudioPlayer();
    connection.subscribe(player);

    const stream = ytdl(url, {
      filter: 'audioonly',
      quality: 'highestaudio',
      highWaterMark: 1 << 25
    });

    const resource = createAudioResource(stream, {
      inputType: StreamType.Arbitrary
    });

    player.play(resource);

    await interaction.reply(`▶️ Reproduciendo: ${results.videos[0].title}`);
  } catch (error) {
    console.error(error);
    await interaction.reply('❌ Error al intentar reproducir el audio.');
  }
};

export default play;

////