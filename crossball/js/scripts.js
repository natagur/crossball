
$(document).on('click','.sidebar-bottom-link',function(event){
    if($('.siderbar-list').hasClass("active")){
        $('.siderbar-list').removeClass("active");
    }else{
        $('.siderbar-list').addClass("active");
    }

   event.preventDefault();
});