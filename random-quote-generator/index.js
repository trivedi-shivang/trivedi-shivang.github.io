const quoteURL = "https://goquotes-api.herokuapp.com/api/v1/random?count=1";
const twitterURL = "https://www.twitter.com/intent/tweet";
$(document).ready(function () {
  attachClickHandler();
  fetchQuote();
});

function attachClickHandler() {
  $("#new-quote").click(function () {
    fetchQuote();
  });
}

// GET request to fetch quote and updates corresponding element's text.
function fetchQuote() {
  $.get(quoteURL, function (response) {
    updateElementText("#text", response.quotes[0].text);
    updateElementText("#author", `~ ${response.quotes[0].author}`);
    updateTwitterURL(response.quotes[0].text);
  });
}

function updateTwitterURL(tweetText) {
  let modifiedTwitterURL = `${twitterURL}?text=${tweetText}&hashtags=quotes`;
  $("#tweet-quote").attr("href", modifiedTwitterURL);
}

function updateElementText(el, text) {
  $(el).text(text);
}
