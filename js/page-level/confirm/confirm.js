$(document).on("click",".confirm",function(e){
      $.confirm({
          title: 'Confirm!',
          content: 'Simple confirm!',
          buttons: {
              confirm: function () {
                  $.alert('Confirmed!');
              },
              cancel: function () {
                  $.alert('Canceled!');
              },
              ok: {
                  text: 'Ok',
                  btnClass: 'btn-blue',
                  keys: ['enter', 'shift'],
                  action: function(){
                      $.alert('Something else?');
                  }
              }
          }
      });

      e.preventDefault();
});
