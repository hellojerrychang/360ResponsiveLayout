$(function() {
	//菜单栏
	$('.menu').click(function() {
		$('.toggle').toggle()
	})

	//轮播
	var mySwiper = $('.swiper-container').swiper({
		loop: true,
		autoplay: 3000,
		autoplayDisableOnInteraction: false,
		pagination: '.pagination',
		paginationClickable :true,

	});

})