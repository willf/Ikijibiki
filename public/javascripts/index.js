$(document).ready(function () {
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
  var sample_size = 50
  var kwords = 636.357

  $("#according").show();

  $(".word").click(function () {
    // remove the current definition (if there)
    $("#definition").html('')

    // highlight it
    $(this).toggleClass("highlight");
    // calculate size of vocabulary — note magic numbers
    var w = kwords * ($('.highlight').length / sample_size);
    w = Math.round(w)*1000

    $('#wordcount').text(addCommas(w));

    // declare intelligence...
    (w > 200000) ?  $('#ikijibiki').text("You are a walking dictionary! an Ikijibiki!") : $('#ikijibiki').text('')
  });
});
