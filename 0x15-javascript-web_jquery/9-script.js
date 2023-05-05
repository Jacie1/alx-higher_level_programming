// Use the jQuery function $.get() to fetch data from the API endpoint
$.get('https://fourtonfish.com/hellosalut/?lang=fr', function(data) {
  // Extract the "hello" value from the data object
  const hello = data.hello;

  // Update the text of the DIV#hello element with the "hello" value
  $('#hello').text(hello);
});
