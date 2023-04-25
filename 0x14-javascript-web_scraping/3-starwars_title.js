#!/usr/bin/node
const request = require('request');

const movieId = process.argv[2];

const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request.get(url, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }

  if (response.statusCode !== 200) {
    console.error(`Failed to retrieve movie information. Status code: ${response.statusCode}`);
    return;
  }

  const movie = JSON.parse(body);

  if (movie.episode_id !== Number(movieId)) {
    console.error(`No movie found with ID ${movieId}`);
    return;
  }

  console.log(`Title of episode ${movie.episode_id}: ${movie.title}`);
});
