const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  var list = [
    "https://pa1.narvii.com/6457/fba783d9bd0ad25e4e6c505b08b9ce48d6c8d1bb_hq.gif",
    "http://i.imgur.com/Mg57kuj.gif",
    "https://i.gifer.com/CZbe.gif",
    "https://thumbs.gfycat.com/DisfiguredPalatableBabirusa-size_restricted.gif",
    "https://66.media.tumblr.com/ee9d8838648a99aaa96700ec5720b576/tumblr_inline_pa1boq2ke11vow54i_540.gif",
    "https://i.pinimg.com/originals/4b/0d/84/4b0d84de7839e69b3f42b76b2b0a3b9c.gif",
    "https://pa1.narvii.com/6362/7d40fb66bd695b43aba31fce56619b30b5c05c7f_hq.gif",
    "https://animaxforce.files.wordpress.com/2016/03/1.gif?w=346",
    "https://pa1.narvii.com/6457/ef21d3fe6324b364aa23f0d398aec3190dda0b6a_hq.gif",
    "https://geekquantico.com.br/wp-content/uploads/2019/08/Ging-levando-um-soco-de-Leorio.gif",
    "https://i.pinimg.com/originals/24/f5/db/24f5dbeacbbf3b146cef0d8ef7b7fe0c.gif",
    "https://s.aficionados.com.br/imagens/izuku-midoriya.gif",
    "https://pa1.narvii.com/7121/47ce96bc3b5515b4987dd4fa64afb5ea8d31c6abr1-480-270_hq.gif",
    "https://3.bp.blogspot.com/-tyRwIgOyUrA/VrHSpVjdKRI/AAAAAAAABcw/LCTnDImCgVc/s1600/tumblr_ngp51bYfRW1rbrys3o1_500.gif",
    "http://3.bp.blogspot.com/-aQBIxJaF2z0/VQHksl6buVI/AAAAAAAAAaU/6nqFObRBr98/s1600/tumblr_nh2ediq8G01rydwbvo1_500.gif",
    "https://pa1.narvii.com/6347/1da2264ac8792d3acb89b543f0a649feb2d582f2_hq.gif"
  ];

  var rand = list[Math.floor(Math.random() * list.length)];
  let user = message.mentions.users.first() || client.users.cache.get(args[0]);
  if (!user) {
    return message.reply(
      "lembre-se de mencionar um usuário válido para socar!"
    );
  }
  /*
message.channel.send(`${message.author.username} **acaba de socar** ${user.username}! :heart:`, {files: [rand]});
*/
  let avatar = message.author.displayAvatarURL({ format: "png" });
  const embed = new Discord.MessageEmbed()
    .setTitle("vocé acabou de socar")
    .setColor("#000000")
    .setDescription(`${message.author} acaba de socar ${user}`)
    .setImage(rand)
    .setTimestamp()
    .setThumbnail(avatar)
    .setFooter("Kissu kissu kissu")
    .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
};
