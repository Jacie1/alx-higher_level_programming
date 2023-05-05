// Use the jQuery function $.get() to fetch data from the API endpoint
$.get('https://swapi-api.alx-tools.com/api/films/?format=json', function(data) {
  // Extract the movie data from the data object
  const movies = data.results;

  // Iterate over each movie and add the title to the UL#list_movies element
  movies.forEach(function(movie) {
    // Create a new <li> element with the movie title
    const newMovie = $('<li></li>').text(movie.title);

    // Add the new <li> element to the UL#list_movies element
    $('ul#list_movies').append(newMovie);
  });
});
