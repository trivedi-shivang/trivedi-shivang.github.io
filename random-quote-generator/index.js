const quoteURL = "https://goquotes-api.herokuapp.com/api/v1/random?count=1";
$(document).ready(function () {
  //call api to fetch random quote
  fetchQuote();
});

// GET request to fetch quote and updates corresponding element's text.
function fetchQuote() {
  $.ajax({
    url: quoteURL,
    type: "GET",
    tryCount: 0,
    retryLimit: 3,
    success: function (response) {
      updateElementText("#quote-text", response.quotes[0].text);
      updateElementText("#quote-author", response.quotes[0].author);
    },
    error: function (xhr, textStatus, errorThrown) {
      if (textStatus == "timeout") {
        this.tryCount++;
        if (this.tryCount <= this.retryLimit) {
          $.ajax(this);
          return;
        }
        return;
      }
    },
  });
}

function updateElementText(el, text) {
  $(el).text(text);
}
