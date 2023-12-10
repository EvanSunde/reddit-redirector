chrome.webRequest.onBeforeRequest.addListener(
	function(details){
		return {redirectUrl: "https://photon-reddit.com" + details.url.match(/^https?:\/\/[^\/]+([\S\s]*)/) [1]};
		},
		{
			urls:["https://reddit.com/*","http://reddit.com/*"],
			types:["main_frame"]
		},
		["blocking"]
);