import { Command } from "discommand";
import {
  ApplicationCommandType,
  UserContextMenuCommandInteraction,
} from "discord.js";

export default class SayUserNameUserContextMenus extends Command {
  constructor() {
    super({
      type: ApplicationCommandType.User,
      name: "sayUserName",
    });
  }

  /**
   *
   * @param {UserContextMenuCommandInteraction} interaction
   */
  execute(interaction) {
    interaction.reply(`User Name is ${interaction.targetUser}`);
  }
}
