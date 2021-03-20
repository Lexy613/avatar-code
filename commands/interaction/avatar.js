const { MessageEmbed } = require('discord.js');
const { getMember } = require('../../utils');

module.exports = {
  name: "avatar",
  aliases: ["av", "pfp"],
  category: "interaction",
  usage: "avatar [ID or Mention]",
  descripcion: "Muestra tu avatar o el de otra persona",
  
  run: async (client, message, args) => {
    
    const embed = new MessageEmbed();
    const member = await getMember(message, args.join(''));
    const avaurl = member.user.displayAvatarURL({ format: 'jpg', dynamic: true, size: 1024 });
    embed.setImage(avaurl)
    .setColor("PURPLE")
    .setTitle(`Avatar de ${member.user.username}`)
    .setDescription(`[Avatar URL](${avaurl})`)
    .setFooter(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
    .setTimestamp()

    .setColor(message.guild.me.displayHexColor)
    message.channel.send(embed);
  },
};
