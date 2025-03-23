! function (e) {
    e.fn.YouTubePopUp = function (t) {
        var o = e.extend({
            autoplay: 1
        }, t);

        function a(e, t) {
            return e = e.replace("#", ""), r = parseInt(e.substring(0, 2), 16), g = parseInt(e.substring(2, 4), 16), b = parseInt(e.substring(4, 6), 16), result = "rgba(" + r + "," + g + "," + b + "," + t / 100 + ")", result
        }
        e(this).on("click", function (t) {
            var i = e(this).attr("href"),
                s = e(this).attr("data-time"),
                r = e(this).attr("data-endtime"),
                l = e(this).attr("data-iv"),
                p = e(this).attr("data-width"),
                u = e(this).attr("data-height"),
                n = e(this).attr("data-overlay"),
                c = e(this).attr("data-relvid"),
                d = e(this).attr("data-controls"),
                v = e(this).attr("data-dwrap"),
                f = e(this).attr("data-soundcloud"),
                h = " vp-vt-youtube",
                m = e(this).attr("wpt-video-p");
            if (n) {
                var _ = " background-color: " + a(n, 80) + " !important;";
                if ("#ffffff" == n) var y = " vp-dark-ci",
                    g = " vp-dark-bg";
                else y = "", g = ""
            } else if (video_popup_general_settings.o_color) {
                if ("#ffffff" == video_popup_general_settings.o_color) y = " vp-dark-ci", g = " vp-dark-bg";
                else y = "", g = "";
                _ = " background-color: " + a(video_popup_general_settings.o_color, 80) + " !important;"
            } else _ = null, y = "", g = "";
            if (c || e(this).hasClass("vp-dr") || 1 == m) var b = "&rel=0";
            else b = "&rel=1";
            if (d) var w = "&controls=0";
            else w = "&controls=1";
            if (l) var k = "&iv_load_policy=3";
            else k = "&iv_load_policy=1";
            if (i.match(/(youtube.com)/) || i.match(/(youtu.be)/) || i.match(/(vimeo.com)/)) {
                if (i.match(/(youtube.com)/)) var P = "v=",
                    U = 1;
                if (i.match(/(youtu.be)/) || i.match(/(vimeo.com\/)+[0-9]/)) P = "/", U = 3;
                if (i.match(/(vimeo.com\/)+[a-zA-Z]/)) P = "/", U = 5;
                var x = i.split(P)[U].replace(/(&)+(.*)/, "");
                if (i.match(/(youtu.be)/) || i.match(/(youtube.com)/)) {
                    if (s) var C = "&start=" + s;
                    else C = "&start=0";
                    if (r) var T = "&end=" + r;
                    else T = "";
                    var Y = '<iframe src="' + ("https://www.youtube.com/embed/" + x + "?autoplay=" + o.autoplay + b + C + w + T + k) + '" allow="autoplay" allowfullscreen></iframe>'
                }
                if (i.match(/(vimeo.com\/)+[0-9]/) || i.match(/(vimeo.com\/)+[a-zA-Z]/)) Y = '<iframe src="' + ("https://player.vimeo.com/video/" + x + "?autoplay=" + o.autoplay) + '" allow="autoplay" allowfullscreen></iframe>', h = " vp-vt-vimeo"
            } else if (f) Y = '<iframe src="' + e(this).attr("data-embedsc") + '" allow="autoplay" allowfullscreen></iframe>', h = " vp-vt-soundcloud";
            else {
                if (1 == o.autoplay) var W = 'controls autoplay controlsList="nodownload"';
                else W = 'controls controlsList="nodownload"';
                Y = "<video " + W + '><source src="' + i + '" type="video/mp4"></video>', h = " vp-vt-locally"
            }
            if (p) var I = p;
            else if (video_popup_general_settings.width_s) I = video_popup_general_settings.width_s;
            else I = "880";
            if (u) var V = u;
            else if (video_popup_general_settings.height_s) V = video_popup_general_settings.height_s;
            else V = "440";
            if (v || e(this).hasClass("vp-dw") || video_popup_general_settings.r_border) var z = " vp-flex-no-border";
            else z = "";
            e("body").append('<div style="display:none;' + _ + '" class="YouTubePopUp-Wrap VideoPopUpWrap"></div>'), e(".VideoPopUpWrap").fadeIn(300), e(".VideoPopUpWrap").append('<div class="Video-PopUp-Content"><div style="max-width:' + I + "px; height:" + V + 'px;" class="vp-flex' + g + z + h + '"><span class="YouTubePopUp-Close' + y + '"></span>' + Y + "</div></div>"), e(".YouTubePopUp-Wrap, .YouTubePopUp-Close").click(function () {
                e(".YouTubePopUp-Wrap").fadeOut(300).delay(325).queue(function () {
                    e(this).remove()
                })
            }), e(".vp-flex, .vp-flex *").click(function (e) {
                e.stopPropagation()
            }), t.preventDefault()
        }), e(document).keyup(function (t) {
            27 == t.keyCode && e(".YouTubePopUp-Close").click()
        })
    }
}(jQuery);
