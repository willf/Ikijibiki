$(document).ready(function () {
  
  window.wordnik = new Api({
    discoveryUrl: "http://api.wordnik.com/v4/resources.json",
    apiKey: "a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5",
    success: function() {  }
  });

  function addCommas(nStr)
  {
  	nStr += '';
  	x = nStr.split('.');
  	x1 = x[0];
  	x2 = x.length > 1 ? '.' + x[1] : '';
  	var rgx = /(\d+)(\d{3})/;
  	while (rgx.test(x1)) {
  		x1 = x1.replace(rgx, '$1' + ',' + '$2');
  	}
  	return x1 + x2;
  }
  
  var sample_size = 50;
  var kwords = 636.357;
  
  $(".wn_small_heart").click(function () {
    var w = $(this).parent().find(".word").text().trim();
    wordnik.word.getDefinitions({'word': w}, function(definitions) {
      console.log(definitions);
      if (definitions.length > 0) {
        var t = w + ": " + definitions[0]["text"];
        var s = " <span class='attr'><a class ='wn_link' href='http://wordnik.com/words/" + w + "'>more</a></span>";
        var a = "<div class='attr'>"+ definitions[0]["attributionText"]+ s + "</div>";
      } else {
        var t = w + ": No definition found";
        var a = "";
      }
      $("#definitions").prepend(t + a);
    });
  });
  
  $("#according").show();

  $(".word").click(function () {
    // remove the current definition (if there)
    // $("#definitions").html('')

    // highlight it
    $(this).toggleClass("highlight");
    // calculate size of vocabulary — note magic numbers
    var w = kwords * ($('.highlight').length / sample_size);
    w = Math.round(w)*1000;

    $('#wordcount').text(addCommas(w));

    // declare intelligence...
    (w > 200000) ?  $('#ikijibiki').text("You are a walking dictionary! an Ikijibiki!") : $('#ikijibiki').text('');
  });
});
