    //Replace "North Korea" with "Democratic People's Republic of Korea"
		$("body").html($("body").html().replace(/North Korea/g,"Democratic People's Republic of Korea"));

		//Enlargen font size of the Dear Leader's name
		$("body").html($("body").html().replace(/Kim Jong-Un/g,"<span style='font-size:120%'>Kim Jong-un</span>"));
		$("body").html($("body").html().replace(/Kim Il-sung/g,"<span style='font-size:120%'>Kim Il-sung</span>"));
		$("body").html($("body").html().replace(/Kim Jong-il/g,"<span style='font-size:120%'>Kim Jong-il</span>"));

		//Restyle links into colors of the North Korean flag
		$("a").css("color","#024fa2");
		$("a").mouseenter(function() {
			$(this).css("color","#ed1c27");
		});
		$("a").mouseleave(function() {
			$(this).css("color","#024fa2");
		});