const { Command } = require("discommand");
const { ApplicationCommandType } = require("discord.js");

module.exports = class SayUserNameUserContextMenus extends Command {
  constructor() {
    super();
    this.type = ApplicationCommandType.User;
    this.name = "sayUserName";
  }
  execute(interaction) {
    interaction.reply(`User Name is ${interaction.targetUser}`);
  }
};
