(function ($) {
	$.fn.ssMenu = function (options) {

		return this.each(function () {

			var target = $(this);
			var ssMenu = $(".ss-menu");
			var Triggers = $(ssMenu).find("li");
 
			// 当指针进入侧边栏范围时打开侧边栏
			$(ssMenu).mouseenter(function () {
				//避免重复添加类名
				if ($(ssMenu).hasClass("open")) { return; }
				$(ssMenu).addClass("open");
				$(ssMenu).removeClass("hide");
			});
			// 当鼠标点击除链接外的任意位置时收回侧边栏
			$(Window).click(function (e) {
				if ($(e.target).closest(Triggers).length) { return; }
				$(ssMenu).removeClass("open");
				$(ssMenu).addClass("hide");
			});

			// 当指针离开侧边栏范围时收回侧边栏
			$(ssMenu).mouseleave(function () {
				$(ssMenu).removeClass("open");
				$(ssMenu).addClass("hide");
			});


		});
	};
})(jQuery);

$(document).ready(function () {

	$(".ss-menu").ssMenu();

});