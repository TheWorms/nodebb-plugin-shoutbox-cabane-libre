"use strict";

(function(Shoutbox) {
	var Bug = function(sbInstance) {
		this.register = function() {
			sbInstance.dom.container.find('.shoutbox-button-bug').off('click').on('click', function() {
				window.open('https://github.com/TheWorms/nodebb-plugin-shoutbox-cabane-libre/issues/new', '_blank').focus();
			});
		};
	};

	Shoutbox.actions.register('bug', Bug);
})(window.Shoutbox);