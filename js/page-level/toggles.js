$(window).on("load",function(){
	$(".toggle").each(function(){
	    $(this).find('.content').hide();
	    $(this).find('h2:first').addClass('active').next().slideDown(500).parent().addClass("activate");
	    $('h2', this).on("click",function(){
		  if ($(this).next().is(':hidden')){
			$(this).parent().parent().find("h2").removeClass('active').next().slideUp(500).parent().removeClass("activate");
			$(this).toggleClass('active').next().slideDown(500).parent().toggleClass("activate");
		  }
	    });
	});
});
