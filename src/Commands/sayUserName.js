const { Command } = require("discommand");
const {
  ApplicationCommandType,
  UserContextMenuCommandInteraction,
} = require("discord.js");

module.exports = class SayUserNameUserContextMenus extends Command {
  constructor() {
    super("sayUserName");
    this.data = {
      type: ApplicationCommandType.User,
      name: "sayUserName",
    };
    this.name = "sayUserName";
  }

  /**
   *
   * @param {UserContextMenuCommandInteraction} interaction
   */
  execute(interaction) {
    interaction.reply(`User Name is ${interaction.targetUser}`);
  }
};
