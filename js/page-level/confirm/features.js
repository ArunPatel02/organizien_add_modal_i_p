// alert
$('.example-p-1').on('click', function(){
      $.alert({
            title: 'Alert alert!',
            content: 'This is a simple alert. <br> with some <strong>HTML</strong> <em>contents</em>',
            icon: 'fa fa-rocket',
            animation: 'scale',
            closeAnimation: 'scale',
            buttons: {
                  okay: {
                        text: 'Okay',
                        btnClass: 'btn-blue'
                  }
            }
      });
});

// confirmation
$('.example-p-2').on('click', function(){
      $.confirm({
            title: 'A secure action',
            content: 'Its smooth to do multiple confirms at a time. <br> Click confirm or cancel for another modal',
            icon: 'fa fa-question-circle',
            animation: 'scale',
            closeAnimation: 'scale',
            opacity: 0.5,
            buttons: {
                  'confirm': {
                        text: 'Proceed',
                        btnClass: 'btn-blue',
                        action: function(){
                              $.confirm({
                                    title: 'This maybe critical',
                                    content: 'Critical actions can have multiple confirmations like this one.',
                                    icon: 'fa fa-warning',
                                    animation: 'scale',
                                    closeAnimation: 'zoom',
                                    buttons: {
                                          confirm: {
                                                text: 'Yes, sure!',
                                                btnClass: 'btn-orange',
                                                action: function(){
                                                      $.alert('A very critical action <strong>triggered!</strong>');
                                                }
                                          },
                                          cancel: function(){
                                                $.alert('you clicked on <strong>cancel</strong>');
                                          }
                                    }
                              });
                        }
                  },
                  cancel: function(){
                        $.alert('you clicked on <strong>cancel</strong>');
                  },
                  moreButtons: {
                        text: 'something else',
                        action: function(){
                              $.alert('you clicked on <strong>something else</strong>');
                        }
                  },
            }
      });
});

// prompt
$('.example-p-7-1').on('click', function(){
      $.confirm({
            title: 'A simple form',
            content: 'url:form.html',
            buttons: {
                  sayMyName: {
                        text: 'Say my name',
                        btnClass: 'btn-orange',
                        action: function(){
                              var input = this.$content.find('input#input-name');
                              var errorText = this.$content.find('.text-danger');
                              if(!input.val().trim()){
                                    $.alert({
                                          content: "Please don't keep the name field empty.",
                                          type: 'red'
                                    });
                                    return false;
                              }else{
                                    $.alert('Hello ' + input.val() + ', i hope you have a great day!');
                              }
                        }
                  },
                  later: function(){
                        // do nothing.
                  }
            }
      });
});

// alert types
$('.example-p-70-type').on('click', function(){
      $.alert({
            title: 'Error',
            icon: 'fa fa-warning',
            type: 'orange',
            content: 'Something went wrong, please retry again after sometime.' +
            '<hr>' +
            'More types: red, green, orange, blue, purple, dark',
      });
});

// background dismiss
$('.example-p-3').on('click', function(){
      $.alert({
            title: 'Background dismiss',
            content: 'Click outside the modal to close it.' +
            '<br>this modal has the `bottom` close animation',
            animation: 'scale',
            closeAnimation: 'bottom',
            backgroundDismiss: true,
            buttons: {
                  okay: {
                        text: 'okay',
                        btnClass: 'btn-blue',
                        action: function(){
                              // do nothing
                        }
                  }
            }
      });
});

// using as dialogs
$('.example-p-4').on('click', function(){
      $.dialog({
            title: 'Title comes here',
            content: 'Just need a popup without buttons, <strong>no problem!</strong><br>' +
            '<h3>disable the buttons</h3>' +
            '<h4><strong>and you get a dialog modal</strong></h4>' +
            '<h5><em>Well, that close icon is shown if no buttons are here (u need something to close the modal right), u can explicitly control that too.</em></h5>' +
            '<button type="button" class="btn btn-success">Click me to change the content</button>',
            animation: 'scale',
            onOpen: function(){
                  var that = this;
                  this.$content.find('button').click(function(){
                        that.setContent('As simple as that !');
                  })
            }
      });
});

// asynchronous content
$('.example-p-5').on('click', function(){
      $.dialog({
            title: 'Asynchronous content',
            content: 'url:table.html',
            animation: 'scale',
            columnClass: 'medium',
            closeAnimation: 'scale',
            backgroundDismiss: true,
      });
});

// auto close
$('.example-p-6').on('click', function(){
      $.confirm({
            title: 'Auto close',
            content: 'Some actions maybe critical, prevent it with the Auto close. This dialog will automatically trigger cancel after the timer runs out.',
            autoClose: 'cancelAction|10000',
            escapeKey: 'cancelAction',
            buttons: {
                  confirm: {
                        btnClass: 'btn-red',
                        text: 'Delete ben\'s account',
                        action: function(){
                              $.alert('You deleted Ben\'s account!');
                        }
                  },
                  cancelAction: {
                        text: 'Cancel',
                        action: function(){
                              $.alert('Ben just got saved!');
                        }
                  }
            }
      });
});

// key strokes
$('.example-p-7').on('click', function(){
      $.confirm({
            title: 'Keystrokes',
            escapeKey: true, // close the modal when escape is pressed.
            content: 'Press the <strong>escape key</strong> to close the modal. That works.' +
            '<br> press <strong>enter key</strong> to trigger okay.' +
            '<br> press <strong>shift or ctrl key</strong> to trigger cancel.',
            backgroundDismiss: true, // for escapeKey to work, backgroundDismiss should be enabled.
            buttons: {
                  okay: {
                        keys: [
                              'enter'
                        ],
                        action: function(){
                              $.alert('<strong>Okay button</strong> was triggered.');
                        }
                  },
                  cancel: {
                        keys: [
                              'ctrl',
                              'shift'
                        ],
                        action: function(){
                              $.alert('<strong>Cancel button</strong> was triggered.');
                        }
                  }
            },
      });
});

// alignment
$('.example-pc-1').on('click', function(){
      $.confirm({
            title: 'Gracefully center aligned',
            content: '<p>You can add content and not worry about the alignment. The goal is to make a Interactive dialog!.</p>' +
            '<button type="button" class="btn btn-success">Click me to add more content</button> <div id="contentArea"></div> ',
            buttons: {
                  someButton: {
                        text: 'Add wow',
                        btnClass: 'btn-green',
                        action: function(){
                              this.$content.find('#contentArea').append('<br>Wowww');
                              return false; // prevent dialog from closing.
                        }
                  },
                  someOtherButton: {
                        text: 'Clear it',
                        btnClass: 'btn-orange',
                        action: function(){
                              this.$content.find('#contentArea').html('');
                              return false; // prevent dialog from closing.
                        }
                  },
                  close: function(){
                        // lets the user close the modal.
                  }
            },
            onOpen: function(){
                  // onOpen attach the events.
                  var that = this;
                  this.$content.find('button').click(function(){
                        that.$content.find('#contentArea').append('<br>This is awesome!!!!');
                  });
            },
      });
});

// working with images
var getNewMeme = function(){
      var prevTitle = $('.meme-text').html();
      $('.meme-text').html('Loading memes 👌');
      $.get('https://craftpip.com/api/memes.json', {
            previousTitle: prevTitle,
      }).then(function(data){
            console.log(data);
            $('.meme-text').html(data.title);
            $('.meme-image img').attr('src', data.image);
      }).catch(function(err){

      })
};
// todo: images is not tested yet.
$('.example-pc-2').on('click', function(){
      $.confirm({
            title: 'Adding images',
            content: '' +
            '<div class="meme-image"><img style="    border: solid 1px #ddd;\n' +
            '    margin-bottom: 10px;\n' +
            '    border-radius: 4px;" src="" alt=""></div>' +
            '<div class="meme-text" style="font-weight: bold;margin-bottom: 20px;"></div>' +
            '<div>Memes from <a target="_blank" href="https://www.reddit.com/r/programminghumor">ProgrammingHumor</a></div>' +
            '',
            animation: 'scale',
            animationClose: 'top',
            buttons: {
                  confirm: {
                        text: 'Next meme',
                        btnClass: 'btn-blue',
                        action: function(){
                              getNewMeme();
                              return false;
                        }
                  },
                  cancel: function(){
                        // lets the user close the modal.
                  }
            },
            onContentReady: function(){
                  getNewMeme();
            }
      });
});

// animations
$(' .example-pc-3').on('click', function(){
      $.alert({
            title: 'Animations',
            content: 'jquery-confirm provides a lot of open &amp; close animations out of the box. <br>The best part is, you can add custom ones too.',
            animation: 'scale',
            closeAnimation: 'right',
            buttons: {
                  zoom: function(){
                        this.setCloseAnimation('zoom');
                  },
                  rotate: function(){
                        this.setCloseAnimation('rotate');
                  },
                  scale: function(){
                        this.setCloseAnimation('scale');
                  },
                  top: function(){
                        this.setCloseAnimation('top');
                  }
            },
            backgroundDismiss: function(){
                  return false;
            },
      });
});

$('.example-p-7-2').on('click', function(){
      $.alert({
            title: 'A draggable dialog',
            content: 'This dialog is draggable, use the title to drag it around. It wont touch the screen borders',
            type: 'blue',
            animation: 'scale',
            draggable: true,
      });
})
