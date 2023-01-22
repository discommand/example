import { Command } from "discommand";
import {
  ApplicationCommandType,
  ChatInputCommandInteraction,
} from "discord.js";

export default class PingCommands extends Command {
  constructor() {
    super({
      type: ApplicationCommandType.ChatInput,
      name: "ping",
      description: "Pong",
    });
  }
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   * */
  execute(interaction) {
    interaction.reply("Pong");
  }
}
