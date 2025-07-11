module.exports = {
  name: "disconnect",
  run: async (client, name, players, moved) => {
    if (!Array.isArray(players)) {
      console.error("Players is not an array.");
      return;
    }
    if (moved) return;
    players.map((player) => player.connection.disconnect());
    client.logger.log(`Lavalink ${name}: Disconnected`, "warn");
  },
};
