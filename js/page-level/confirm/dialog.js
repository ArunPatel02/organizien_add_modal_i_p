$(document).on("click",".dialog",function(e){
      $.dialog({
          title: 'Text content!',
          content: 'Simple modal!',
      });
      e.preventDefault();
});
