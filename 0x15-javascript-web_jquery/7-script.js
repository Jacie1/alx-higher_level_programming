// Use the jQuery function $.get() to fetch data from the API endpoint
$.get('https://swapi-api.alx-tools.com/api/people/5/?format=json', function(data) {
  // Extract the character name from the data object
  const characterName = data.name;

  // Use the jQuery selector to select the DIV#character element and set its text to the character name
  $('div#character').text(characterName);
});
