
$(window).on("load", function(){

      // ========== Header Load ============ //
      $("header").load('includes/header.html', function(){
            $('[data-rel="tooltip"]').tooltip({ container: 'body' });
      });
      // ========== Header Load ============ //


      // ========== Options Panel Starts ============ //
      $(".more-opt-panel").load('includes/options.html', function(responseTxt, statusTxt, xhr){
            if(statusTxt == "success"){
                  $.getScript( "https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.7/js/select2.min.js", function( data, textStatus, jqxhr ) {
                        $(".select2").select2();
                        $(".select2.classic").select2({ theme: "classic"});
                  });

            }
      });
      // ========== Options Panel Ends ============ //


      // ========== Sidemenu Functions Starts ============ //
      $("#sidemenu").load('includes/sidemenu.html', function(responseTxt, statusTxt, xhr){
            if(statusTxt == "success")
            // Sidemenu Open & Close
            $("body").on("click", ".sidemenu-opener", function(){
                  $(".console-sidemenu").toggleClass('active');
            });


            // Sidemenu Dropdown
            $(".console-sidemenu ul ul").parent().addClass("menu-item-has-children");
            $(".console-sidemenu ul li.menu-item-has-children > a").on("click", function() {
                  $(this).parent().toggleClass("active").siblings().removeClass("active");
                  $(this).next("ul").slideToggle();
                  $(this).parent().siblings().find("ul").slideUp();
                  return false;
            });

            let selectCurrent = $("#toparea").attr('class');
            $("#select_toparea").val(selectCurrent).change();
      });

      $(document).on("click", ".content-area > div", function(){
            $(".more-opt-panel").removeClass('active');
      });
      // ========== Sidemenu Functions Ends ============ //


      // $.LoadingOverlay("hide");



      // ========== More Option Panel Functions ============ //
      // Open & Close
      $("body").on("click", ".more-opt-open", function(){
            $(".more-opt-panel").toggleClass('active');
      });


      // ========== Grid Stack Initialization ============ //
      var options = {
            float: false,
            cellHeight: 10,
            animate:true,
            width:12,
            verticalMargin: 20,
            handle: '.console-panel-header, .console-no-header'

      };
      $('.grid-stack').gridstack(options)



      // ========== Panel Header Background Color ============ //
      if($("body").find('.cp').length > 0){
            var colorpick = $('.cp');
            colorpick.colorpickerplus()
            colorpick.on("click", function(){
                  return false;
            });
            $("body").on("click",".colorpickerplus",function(){
                  return false;
            })
            colorpick.on('changeColor', function(e,color){
                  if(color==null) {
                        //when select transparent color
                        $('.color-fill-icon', $(this)).addClass('colorpicker-color');
                  } else {
                        $('.color-fill-icon', $(this)).removeClass('colorpicker-color');
                        $('.color-fill-icon', $(this)).css('background-color', color);
                        $(this).parents('.console-panel-header').css('background-color', color);
                  }
                  return false;
            });
      }

      // ========== Panel Header Font Color ============ //
      $(".header-fontcolor").on("click",function(){
            $(this).parents('.console-panel-header').toggleClass('light');
            $(this).find('span').toggleClass('active');
            return false;
      });


      // ========== Panel Switch Full Screen ============ //
      $("body").on("click",".switch-full", function(){
            let parent = $(this).parents('.console-panel');
            parent.toggleClass('fullscreen');
            parent.hasClass('fullscreen') ? $(this).find("i").attr('class','icon dripicons-contract-2') : $(this).find("i").attr('class','icon dripicons-expand-2');
            parent.hasClass('fullscreen') ? $(".content-area").addClass('fullscreen-active') : $(".content-area").removeClass('fullscreen-active');
            return false;
      });


      // ========== Collapse Panel ============ //
      $("body").on("click",".collapse-panel", function(){
            $(this).attr('class','expand-panel').find('i').attr('class','icon dripicons-chevron-down');
            let parent = $(this).parents('.grid-stack-item');
            let currentHeight = $(parent).attr('data-gs-height');
            parent.attr('data-heighthistory',currentHeight);

            let minHeight = $(parent).attr('data-gs-min-height');
            if(parent.attr('data-gs-min-height')){
                  parent.attr('data-minheighthistory',minHeight);
            }

            var grid = $('.grid-stack').data('gridstack');
            grid.minHeight(parent , '', 3);
            grid.resize(parent , '', 3);
            grid.resizable(parent,false);
            parent.find('.console-panel-body').slideUp();
            parent.find('.console-footer').slideUp();
            return false;
      });

      // ========== Uncollapse Panel ============ //
      $("body").on("click",".expand-panel", function(){
            $(this).attr('class','collapse-panel').find('i').attr('class','icon dripicons-chevron-up');
            let parent = $(this).parents('.grid-stack-item');
            var grid = $('.grid-stack').data('gridstack');
            if (parent.attr('data-heighthistory')){
                  let heightHistory = parseInt(parent.attr('data-heighthistory'));
                  grid.resize(parent , '', heightHistory);
            }else{
                  grid.resize(parent , '', 20);
            }

            if(parent.attr('data-minheighthistory')){
                  let minHeight = parseInt(parent.attr('data-minheighthistory'));
                  grid.minHeight(parent, minHeight)
            }

            grid.resizable(parent,true);
            parent.find('.console-panel-body').slideDown();
            parent.find('.console-footer').slideDown();
            return false;
      });


      // ========== Remove Panel ============ //
      $("body").on("click",".removeWidget", function(){
            let _this = this;
            let parent = $(this).parents('.grid-stack-item');
            $.confirm({
                  theme: 'bootstrap',
                  title: 'Are You Sure?',
                  content: 'You will not be able to see this panel back on this page.',
                  buttons: {
                        confirm:{
                              text: 'Confirm',
                              btnClass: 'btn-blue',
                              keys: ['enter', 'shift'],
                              action: function(){
                                    var grid = $('.grid-stack').data('gridstack');
                                    $(_this).parents('.console-panel').slideUp("complete", (function(){
                                          grid.removeWidget(parent, true)
                                    }));
                                    $.alert('Widget Removed!');
                              }
                        },
                        cancel: function () {
                        }
                  }
            });
            return false;
      });



      /*=== Filter Close ===*/
      $("body").on("click", 'a.filter-close', function(){
            $(this).parents('.console-filters').addClass(`slideOut`);
      });
      $("body").on("click", 'a.filter-open', function(){
            $(this).next('.console-filters').removeClass(`slideOut`);
      });

      /*=== Tooltip ===*/
      $('[data-rel="tooltip"]').tooltip({
            container: 'body'
      });


      /*=== Toaster Settings ===*/
      $.toaster({
            settings : {
                  'timeout':3500
            }
      });






      // ============================//
      // DEMO OPTIONS //
      // ============================//

      // ===== Header Background Start =====//
      $(document).on("change", "#default_header", function(){
            if($(this).prop('checked') == true){
                  $("header").attr('class','');
                  $("#logo_img").attr('src','images/logo.png');
            }
      });

      $(document).on("change", "#coloured_header", function(){
            if($(this).prop('checked') == true){
                  $("header").attr('class','style2');
                  $("#logo_img").attr('src','images/logo2.png');
            }
      });

      $(document).on("change", "#dark_header", function(){
            if($(this).prop('checked') == true){
                  $("header").attr('class','style3');
                  $("#logo_img").attr('src','images/logo2.png');
            }
      });

      $(document).on("change", "#gradient_header", function(){
            if($(this).prop('checked') == true){
                  $("header").attr('class','style4');
                  $("#logo_img").attr('src','images/logo2.png');
            }
      });
      // ===== Header Background End =====//


      // ===== Enable / Disable Dragging Start =====//
      $(document).on("change", "#draggable_widgets", function(){
            var grid = $('.grid-stack').data('gridstack');
            if($(this).prop('checked') == true){
                  grid.movable('.grid-stack-item', true);
                  $.toaster({ message : 'Widgets are now draggable', title : 'Draggable Turned On', priority : 'info' });
            }
            else{
                  grid.movable('.grid-stack-item', false);
                  $.toaster({ message : 'Widgets are now not draggable', title : 'Draggable Turned Off', priority : 'warning' });
            }
      });
      // ===== Enable / Disable Dragging End =====//

      // ===== Enable / Disable Resizing Start =====//
      $(document).on("change", "#resizable_widget", function(){
            var grid = $('.grid-stack').data('gridstack');
            if($(this).prop('checked') == true){
                  grid.resizable('.grid-stack-item', true);
                  $.toaster({ message : 'Widgets are now resizable', title : 'Resizable Turned On', priority : 'info' });
            }
            else{
                  grid.resizable('.grid-stack-item', false);
                  $.toaster({ message : 'Widgets are now not resizable', title : 'Resizable Turned Off', priority : 'warning' });
            }
      });
      // ===== Enable / Disable Resizing End =====//




      // ===== Top Area Functions Start =====//
      $(document).on("click", '.get_pn', function(){
            let name = $(this).attr('data-title');
            $.cookie("page_name"  ,name);
      });


      function toparea() {
            let name = $.cookie("page_name");

            if($('#toparea').hasClass('style1')){
                  $("#toparea").load('includes/toparea-style1.html');
            }
            else if($('#toparea').hasClass('style2')){
                  $("#toparea").load('includes/toparea-style2.html', function(responseTxt, statusTxt, xhr){
                        if(statusTxt == "success"){
                              $("#page_name").html(name);
                              create_breadcrumbs();
                        }
                  });
            }
            else if($('#toparea').hasClass('style3')){
                  $("#toparea").load('includes/toparea-style3.html', function(responseTxt, statusTxt, xhr){
                        if(statusTxt == "success"){
                              $("#page_name").html(name);

                              $.getScript( "js/plugins/datepicker/datepicker.js")

                              $.getScript( "js/plugins/datepicker/datepicker.js",  function( data, textStatus, jqxhr ) {
                                    $('.datepicker-here').datepicker({
                                          lang: "en"
                                    }).data('datepicker');
                              });
                        }
                  });
            }
            else if($('#toparea').hasClass('style4')){
                  $("#toparea").load('includes/toparea-style4.html', function(responseTxt, statusTxt, xhr){
                        if(statusTxt == "success"){
                              $("#page_name").html(name);
                              $('[data-rel="tooltip"]').tooltip({ container: 'body' });
                              create_breadcrumbs();
                        }
                  });
            }
      }
      toparea();

      $(document).on("change", '#select_toparea', function(){
            let selected = $(this).find(':selected').val();
            if (selected == 'style1'){
                  $('#toparea').attr('class', 'style1');
            }
            else if (selected == 'style2'){
                  $('#toparea').attr('class', 'style2');
            }
            else if (selected == 'style3'){
                  $('#toparea').attr('class', 'style3');
            }
            else if (selected == 'style4'){
                  $('#toparea').attr('class', 'style4');
            }
            toparea();
      });

      function create_breadcrumbs(){
            var here = location.href.split('/').slice(3);
            var parts = [{ "text": 'Home', "link": '/' }];
            for( var i = 0; i < here.length; i++ ) {
                  var part = here[i];
                  var text = part.replace(/.html|#/g, '');

                  var link = '/' + here.slice( 0, i + 1 ).join('/');
                  parts.push({ "text": text, "link": link });
            }

            let parts_length = parts.length - 1;
            $.each(parts, function(i,e){
                  if(i == parts_length ){
                        $("#breadcrumbs").append(`<li class="breadcrumb-item active">${e.text}</li>`)
                  }
                  else if(i == 0){
                        $("#breadcrumbs").append(`<li class="breadcrumb-item"><a href="index.html"><i class="icon dripicons-home"></i></a></li>`)
                  }
                  else{
                        $("#breadcrumbs").append(`<li class="breadcrumb-item"><a href="${e.link}">${e.text}</a></li>`);
                  }

            });
      }
      // ===== Top Area Functions Ends =====//


      // ===== Sideheader Functions Starts =====//
      $(document).on("change","#sideheader_settings", function(){
            let selected = $(this).find(':selected').val();
            if (selected == 'top'){
                  $('.theme-content').attr('class', 'theme-content topmenu');
                  $("#user-info").addClass('hidden');
            }
            else if (selected == 'contained'){
                  $('.theme-content').attr('class', 'theme-content contained-menu');
                  $("#user-info").removeClass('hidden');
            }
            else if (selected == 'narrow'){
                  $('.theme-content').attr('class', 'theme-content narrow-menu');
                  $("#user-info").removeClass('hidden');
            }
            else if (selected == 'default'){
                  $('.theme-content').attr('class', 'theme-content');
                  $("#user-info").removeClass('hidden');
            }
      });

      $(document).on("change","#user_info_check", function(){
            $(this).prop('checked') ==  true ? $(".user").addClass('hidden') : $(".user").removeClass('hidden');
      });

      // ===== Sideheader Functions Ends =====//

      // ===== Sideheader Background Start =====//
      $(document).on("change", "#default_sidemenu", function(){
            $(this).prop('checked') == true ? $(".console-sidemenu").attr('class', 'console-sidemenu active') : '';
      });

      $(document).on("change", "#coloured_sidemenu", function(){
            $(this).prop('checked') == true ? $(".console-sidemenu").attr('class', 'console-sidemenu active coloured') : '';
      });

      $(document).on("change", "#gradient_sidemenu", function(){
            $(this).prop('checked') == true ? $(".console-sidemenu").attr('class', 'console-sidemenu active gradient') : '';
      });

      $(document).on("change", "#dark_sidemenu", function(){
            $(this).prop('checked') == true ? $(".console-sidemenu").attr('class', 'console-sidemenu active dark') : '';
      });

      $(document).on("change", "#dark2_sidemenu", function(){
            $(this).prop('checked') == true ? $(".console-sidemenu").attr('class', 'console-sidemenu active dark dark2') : '';
      });
      // ===== Sideheader Background End =====//



      // ===== Disable Code Inspection =====//
      document.onkeydown = function(e) {
            if(event.keyCode == 123) {
                  return false;
            }
            if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
                  return false;
            }
            if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
                  return false;
            }
            if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
                  return false;
            }
      }

      if (document.addEventListener) {
            document.addEventListener('contextmenu', function(e) {
                  e.preventDefault();
            }, false);
      } else {
            document.attachEvent('oncontextmenu', function() {
                  window.event.returnValue = false;
            });
      }
      // ===== Disable Code Inspection =====//


})
