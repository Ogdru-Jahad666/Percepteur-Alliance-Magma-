const express = require('express');
const { Client, GatewayIntentBits } = require('discord.js');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Discord bot is running!');
});

app.listen(port, () => {
  console.log(`Web server listening at http://localhost:${port}`);
});

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

client.once('ready', () => {
  console.log('Discord bot is ready!');
});

if (process.env.DISCORD_TOKEN) {
  client.login(process.env.DISCORD_TOKEN).catch(err => {
    console.error('Failed to login to Discord:', err.message);
  });
} else {
  console.warn('DISCORD_TOKEN not found in environment variables. Bot will not start.');
}
