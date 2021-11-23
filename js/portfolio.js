$(function () {
    $('a[href^="#"]').click(function () {
        var speed = 1500;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({ scrollTop: position }, speed, "swing");
        return false;
    });
});

$(function () {
    $('.effect div, .effect a').css("opacity", "0");
    $(window).scroll(function () {
        $(".effect").each(function () {
            var imgPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > imgPos - windowHeight + windowHeight / 5) {
                $("a, div", this).css("opacity", "1");
                $("a", this).css({
                    // "font-size": "100px",
                    // "padding": "0 20px 40px"
                });
            } else {
                $("a, div", this).css("opacity", "0");
                $("a", this).css({
                    // "font-size": "20px",
                    // "padding": "20px"
                });
            }
        });
    });
});

//音声の再生
// document.getElementById('audio').play();
document.getElementById('audio').play();

//音声の一時停止
document.getElementById('audio').pause();

$(function () {
    var audioBtn = $('.audio_button'),
        audioWrap = $('.audio_wrap'),
        audio = document.getElementById('audio');

    audioBtn.on('click', function () {
        if (audioWrap.hasClass('play')) {
            audio.pause();
            audioWrap.removeClass('play');
        } else {
            audio.play();
            audioWrap.addClass('play');
        }
    });
});