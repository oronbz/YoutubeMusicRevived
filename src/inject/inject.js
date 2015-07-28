console.log("YouTube Music Revived!");
var musicElement = document.createElement('div');;
var musicInnerHtml = '<li><a href="/feed/music" class="yt-uix-button spf-link yt-uix-sessionlink yt-uix-button-epic-nav-item yt-uix-button-size-default" aria-selected="false"><span class="yt-uix-button-content">Music(Revived)</span></a></li>';
musicElement.innerHTML = musicInnerHtml;
var navElement = document.getElementsByClassName('appbar-nav-menu')[0];
console.log(musicElement.childNodes);
navElement.appendChild(musicElement.childNodes[0]);

/*
chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. This message was sent from scripts/inject.js");
		// ----------------------------------------------------------

	}
	}, 10);
});
*/