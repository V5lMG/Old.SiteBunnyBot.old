// Chargement du fichier de configuration JSON
fetch('config.json')
  .then(response => response.json())
  .then(data => {
    // Récupération de l'ID et du token du bot à partir du fichier JSON
    var botId = data.bot_id;
    var botToken = data.bot_token;

    // Appel à l'API Discord pour récupérer l'avatar du bot
    fetch(`https://discord.com/api/v9/users/${botId}`, {
      headers: {
        Authorization: `Bot ${botToken}`
      }
    })
    .then(response => response.json())
    .then(data => {
      // Récupération de l'URL de l'avatar et placement dans une balise <img>
      var avatarUrl = `https://cdn.discordapp.com/avatars/${botId}/${data.avatar}.png`;
      document.getElementById("bot-avatar").src = avatarUrl;
    })
    .catch(error => console.error(error));
  })
  .catch(error => console.error(error));


// Oauth2
const express = require('express');
const { port } = require('./config.json');

const app = express();

app.get('/', (request, response) => {
	return response.sendFile('index.html', { root: '.' });
});

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));