$(document).on("click",".alert",function(e){
      $.alert({
          title: 'Alert!',
          content: 'Simple alert!',
          confirm: function(){
              alert('Confirmed!');
          }
      });

      e.preventDefault();
});
