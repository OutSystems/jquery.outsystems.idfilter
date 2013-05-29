/*!
 * jQuery selector filter for JSF-generated IDs containing colons ":"
 *
 * Copyright OutSystems
 * Released under the MIT license
 */
(function(jQuery){
	var oldInit = jQuery.fn.init;
	var idlike = /^\s*#\S+\s*$/;
	jQuery.fn.init = function(s,context,root) {
		var scapedSelector = "";
		if (s && typeof(s)==='string' && !/^\s*</.test(s)) {
			var splitedSelector = s.split(" ");
			for (var si = 0; si < splitedSelector.length; si++) {
				var selectorToScape = splitedSelector[si];
				if (idlike.test(selectorToScape)) {
					var parts = selectorToScape.split(':');
					var pseudoCount = 0;
					for (var i = parts.length-1; i > 0; i--) {
						if (parts[i] in jQuery.expr[':']) {
							pseudoCount++;
						} else {
							break;
						}
					}
					if (!pseudoCount) {
						selectorToScape = selectorToScape.replace(/([^\\]):/g, '$1\\:');
					} else {
						selectorToScape = parts.slice(0,parts.length-pseudoCount).join("\\:") +
							":" + parts.slice(-pseudoCount).join(":");
					}	
				}
				if (si !== 0) {
					scapedSelector += " ";
				}
				scapedSelector += selectorToScape;
			}
		} else {
			scapedSelector = s;
		}
		return oldInit.call(this,scapedSelector,context,root);
	};
	jQuery.fn.init.prototype = oldInit.prototype;
})(jQuery);
// vim: ts=4 noet
