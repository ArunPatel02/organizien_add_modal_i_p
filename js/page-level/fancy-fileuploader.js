$(window).on("load",function(){

      $('#demo').FancyFileUpload({
            'url' : '/',
            params : {
                  action : 'fileuploader'
            },
            maxfilesize : 1000000
      });

});
