/* Listen for messages */
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {

	
  if (msg.command && (msg.command == "revere")) {
    var src = document.getElementsByTagName("title")[0].innerHTML;
    var dst = msg.title;
    document.getElementsByTagName("title")[0].innerHTML = dst;

    $("body").html($("body").html().replace(/North Korea/g,"Democratic People's Republic of Korea"));

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
    
    sendResponse("the page title's changed: '" + src + "' -> '" + dst + "'");
  }

});