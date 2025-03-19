$(document).ready(function ()
{
    $(".top").mouseenter(function () {
        $('.title-bar').stop(true, false).animate({opacity:1}, 400, "swing", enableHover); //fadeIn() does not work?
    });
    
    $('.title-bar').delay(5000).fadeOut(1000, enableHover);
});

function enableHover()
{
    $('.top').unbind('mouseenter');
    
    $('.top').hover(
        function()
        {
            $('.title-bar').stop(true, true).fadeIn();
        },
        function()
        {
            $('.title-bar').stop(true, true).fadeOut();
        }
    )
}