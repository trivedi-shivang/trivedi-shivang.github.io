const quoteURL = "https://goquotes-api.herokuapp.com/api/v1/random?count=1";
$(document).ready(function () {
  attachClickHandler();
  fetchQuote();
});

function attachClickHandler() {
  $(".new-quote-button").click(function () {
    fetchQuote();
  });
}

// GET request to fetch quote and updates corresponding element's text.
function fetchQuote() {
  $.get(quoteURL, function (response) {
    updateElementText("#quote-text", response.quotes[0].text);
    updateElementText("#quote-author", response.quotes[0].author);
  });
}

function updateElementText(el, text) {
  $(el).fadeIn("slow");
  $(el).text(text);
}
