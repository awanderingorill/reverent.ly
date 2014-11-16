var preprocess = function() {
    $("body").html($("body").html().replace(/North Korea/g,"Democratic People's Republic of Korea"));

    // Set matters straight
	$("body").html($("body").html().replace(/U.S./g,"imperialistic U.S."));

	//Enlarge font size of the Dear Leader's names
	$("body").html($("body").html().replace(/Kim Jong-Un/g,"<span style='font-size:190%'>Kim Jong-un</span>"));
	$("body").html($("body").html().replace(/Kim Il-sung/g,"<span style='font-size:190%'>Kim Il-sung</span>"));
	$("body").html($("body").html().replace(/Kim Jong-il/g,"<span style='font-size:190%'>Kim Jong-il</span>"));


	// Restyle links into colors of the North Korean flag
	$("a").attr("style","color: #ed1c27;");
	$("a").mouseenter(function() {
		$(this).attr("style","color: #024fa2;");
	});
	$("a").mouseleave(function() {
		$(this).attr("style","color: #ed1c27;");
	});

	// Add motivational image
	$("body").prepend("<img src='https://aotearoaawiderperspective.files.wordpress.com/2013/04/article-0-19306d7c000005dc-867_634x514.jpg'>");

};

/* Listen for messages */
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {

	
  if (msg.command && (msg.command == "revere")) {

  	setTimeout(preprocess, 100);
    
  }

});