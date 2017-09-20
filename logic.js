$(document).ready(function() {
  var text_to_tweet = "";
  $("#newQuote").on("click", function() {
    var url = "https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?";
    $.getJSON(url, function(json) {
      text_to_tweet = json.quoteText;
      $("#message").text(text_to_tweet);
      $("#cite").text(json.quoteAuthor);
    }); 
  });
  /* */
  $('#twitter').click(function() {
    var twtLink = 'http://twitter.com/home?status=' +encodeURIComponent(text_to_tweet);
    window.open(twtLink,'_blank');
  });
});
