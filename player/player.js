    function onImgError(source) {
      source.src = "1600x1200.jpg";
      // disable onerror to prevent endless loop
      source.onerror = "";
      return true;
    }

    google.load("search", "1");

        function searchComplete(searcher) {
          // Check that we got results
          if (searcher.results && searcher.results.length > 0) {

            var results = searcher.results;

            var result = results[0];

            console.log(result.url);

            $("#background").html('<img src="'+result.url+'" onerror="onImgError(this);">');
          }
        }

    function querify(artist, album) {

      // Our ImageSearch instance.
      var imageSearch = new google.search.ImageSearch();

      // Restrict to extra large images only
      /*
      imageSearch.setRestriction(google.search.ImageSearch.RESTRICT_IMAGESIZE,
                             google.search.ImageSearch.IMAGESIZE_MEDIUM);
      */
      imageSearch.setSiteRestriction('amazon.com');

      imageSearch.setSearchCompleteCallback(this, searchComplete, [imageSearch]);

      // Find me a beautiful car.
      imageSearch.execute(artist+" album");
    }


$(document).ready(function(){

   querify("Smashing Pumpkins","Melencholy and the Infinite Sadness");

   t = setTimeout(function(){

     $("#background img").css({"width":$(window).width(),"height":$(window).height()});

    }, 500);

   $(window).resize(function() {
     $("#background img").css({"width":$(window).width(),"height":$(window).height()});
   });


});


