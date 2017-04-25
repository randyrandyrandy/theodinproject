$(document).ready(function(){
    $(".popup").each(function() {
        var previousCss  = $(this).attr("style");
        $(this).addClass("show");
        var popupContentHeight = $(this).find(".popup-content").outerHeight(true);
        $(this).css("height", popupContentHeight);
        $(this).removeClass("show").addClass("hide");
    });
    $(".popup-link").on('click', function(e){
        e.preventDefault();
        showPopup($(this));
        $(this).addClass("show");
    });
});

function showPopup(link) {
    var popupId = link.attr('href');
    var popup = $(popupId);
    popup.prev().addClass("show");
    popup.removeClass("hide").addClass("show");
}

function hidePopup(popup){
    popup.addClass("hide");
    popup.prev().removeClass("show");
}