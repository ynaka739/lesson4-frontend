function showTab(selector) {
    $(".tabs-menu div").removeClass("active");
    $(".tabs-menu div[id='" + selector + "']").addClass("active");
    $(".tabs-content > div").hide();
    var lastchar = selector.slice(-1);
    var addchar = "#tabs-" + lastchar;
    $(addchar).show();
}

$(document).ready(function() {
    showTab("tab-menu-a");

    $(".tabs-menu div").click(function() {
        var selector = $(this).attr("id");
        showTab(selector);
    });
});