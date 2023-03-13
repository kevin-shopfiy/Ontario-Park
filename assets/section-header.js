$(document).ready(function(){
    $('.icon-search').click(function(event){
        event.preventDefault(); 
        event.stopPropagation();   
        // $('.custom_search_bar').attr('style', 'display:block !important');
        $('.custom_search_bar').css({ "height": "125px", "margin": "0 auto" });
        $('.custom_search_bar').addClass('active');
    });
    $('.input-group').click(function(event){
        event.stopPropagation();
            
        // $('.custom_search_bar').attr('style', 'display:block !important');
        $('.custom_search_bar').css({ "height": "125px", "margin": "0 auto" });
        $('.custom_search_bar').addClass('active');
    });
    $('body').click(function(){
        $('.custom_search_bar').removeClass('active');
        $('.custom_search_bar').attr('stryle', 'transition: all 0.4s ease');
    });
    
    $(".form-control").focus(function(){
        $('.custom_search_bar_close').attr('style', 'display:block !important');
        $('.input-group-append').attr('style', 'display:none !important');
        // $(".input-group-append").css("display", "none").fadeOut(2000);
    });
    $( ".custom_search_bar" ).mouseleave(function() {
        $( ".custom_search_bar_close" ).attr('style', 'display:none !important');
        $('.input-group-append').attr('style', 'display:block !important');
        // $('.btn.d-block').attr('style', 'margin-top:12px !important');
        // $('.btn-custom_search_bar').attr('style', 'align-items:center !important');
        // $('.btn-custom_search_bar').css({ "display": "flex", "align-items": "center" });
    });
   
})