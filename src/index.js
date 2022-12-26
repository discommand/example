const { DiscommandClient } = require("discommand");
const { GatewayIntentBits } = require("discord.js");
const { join } = require("path");
require("dotenv/config");

const client = new DiscommandClient(
  {
    intents: [GatewayIntentBits.Guilds],
  },
  {
    directory: {
      command: join(__dirname, "Commands"),
    },
  }
);

client.loadAll();
client.login();
