const { Command } = require("discommand");
const { ApplicationCommandType } = require("discord.js");

module.exports = class PingCommands extends Command {
  constructor() {
    super();
    this.type = ApplicationCommandType.ChatInput;
    this.name = "ping";
    this.description = "Pong";
  }
  execute(interaction) {
    interaction.reply("Pong");
  }
};
