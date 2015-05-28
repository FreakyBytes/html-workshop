$(document).ready(function() {
    
    $("a.col-link").show();
    
    $("a.col-link").click(function () {
        var parent = $(this).parent();
        parent.find("div.contain").slideUp();
        $(this).hide();
        parent.find("a.exp-link").show();
        return false;
    });
    $("a.exp-link").click(function () {
        var parent = $(this).parent();
        parent.find("div.contain").slideDown();
        $(this).hide();
        parent.find("a.col-link").show();
        return false;
    });
});
