$(function(){
    $('.show').hide().fadeIn(1500);
    
    $('.togglebutton').click(function() {
        $("#"+ $(this).data('id')).toggle(1000);
});
});


