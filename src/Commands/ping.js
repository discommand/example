const { Command } = require("discommand");
const { ApplicationCommandType } = require("discord.js");

module.exports = class PingCommands extends Command {
  constructor() {
    super("ping");
    this.data = {
      type: ApplicationCommandType.ChatInput,
      name: "ping",
      description: "Pong",
    };
  }
  execute(interaction) {
    interaction.reply("Pong");
  }
};
