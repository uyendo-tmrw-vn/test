// var tag = document.createElement('script');
// tag.src = "https://www.youtube.com/iframe_api";
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// var player;
// function onYouTubeIframeAPIReady() {
//     player = new YT.Player('iframe-video', {
//         videoId: 'FjrvOPo4-8g',
//         playerVars: {
//             playlist: 'FjrvOPo4-8g',
//             loop: 1,
//             // autoplay: 1,
//         },
//     });
// }

function getOffset(el) {
    var _x = 0;
    var _y = 0;
    while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return { top: _y, left: _x };
}

var i = 0;
document.addEventListener('DOMContentLoaded', function () {
    AOS.init();
});
document.addEventListener('scroll', function () {
    let scroll = window.scrollY;
    i += 1;
    if (i > 0 && i < 6) {
        // console.log('init aos');
        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 80,
        });
    }
});
// let unLock = true;
// document.addEventListener('scroll', function () {
//     var posAboutUs = getOffset(document.getElementById('about-us')).top;
//     var scroll = window.scrollY;
//     // console.log({ unLock, scroll, posAboutUs, window: window.innerHeight });
//     if (unLock) {
//         if (scroll + (window.innerHeight / 2) > posAboutUs + 200) {
//             // console.log('okkk');
//             async function a() {
//                 await player.playVideo();
//                 await setTimeout(function () {
//                     unLock = false;
//                 }, 1000);
//             }
//             a();
//         }
//     }
// });

window.onload = function () {
    var preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    setInterval(function () {
        preloader.style.display = 'none';
    }, 500);
    // console.log('loaded');
};