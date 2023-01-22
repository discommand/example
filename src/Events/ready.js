import { Listener } from "discommand";
import { Client } from "discord.js";

export default class ClientReady extends Listener {
  constructor() {
    super("ready");
  }
  /**
   *
   * @param {Client} client
   * */
  execute(client) {
    console.log(`Login as ${client.user?.tag}`);
  }
}
