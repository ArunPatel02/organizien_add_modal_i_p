$(window).on("load",function(){
      $('#demo1').tagEditor({
            initialTags: ['Hello', 'World', 'Example', 'Tags'],
            delimiter: ', ', /* space and comma */
            placeholder: 'Enter tags ...'
      });
});
