$(window).on("load",function(){
      $('#demo2').tagEditor({
          autocomplete: {
                delay: 0,
                position: { collision: 'flip' },
                source: ['ActionScript', 'AppleScript', 'Asp', 'BASIC', 'C', 'C++', 'CSS', 'Clojure', 'COBOL', 'ColdFusion', 'Erlang', 'Fortran', 'Groovy', 'Haskell', 'HTML', 'Java', 'JavaScript', 'Lisp', 'Perl', 'PHP', 'Python', 'Ruby', 'Scala', 'Scheme']
           },
          forceLowercase: false,
          placeholder: 'Programming languages ...'
      });
});
