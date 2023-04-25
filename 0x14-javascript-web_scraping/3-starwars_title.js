#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];

const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request.get(url, (err, res, body) => {
  if (err) {
    console.error(err);
    return;
  }

  const movie = JSON.parse(body);

  console.log(`Title of episode ${movie.episode_id}: ${movie.title}`);
});

