jQuery(document).ready(function($){

	var showChar = 250;  // How many characters are shown by default
    var ellipsestext = "...";
    var moretext = "Показать полностью";
    var lesstext = "Скрыть";

    $('.info__block .text').each(function() {
        var content = $(this).html();
 
        if(content.length > showChar) {
 
            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);
 
            var html = c + '<span class="text__ellipses">' + ellipsestext+ '</span><span class="text__more"><span>' + h + '</span><button class="text__link">' + moretext + '</button></span>';
 
            $(this).html(html);
        }
 
    });
 
    $(".text__link").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });

	if (/Android|BlackBerry|iPhone|iPad|iPod|webOS/i.test(navigator.userAgent) === false) {
		var path = window.location.pathname;
		var condition1 = '/paik/menu.html';
		var condition2 = '/paik/catalog.html';
		if ( path == condition1 || path == condition2){
			window.location.replace("/paik/");
		}
	}

	/* Input type tel */
	$('input[type="tel"]').mask("(999) 999 99 99");
	/* Resize function */
	
	if ($(window).width() < 1100){
		$('.feedback .item__block--status .title').show();
	} else {
		$('.feedback .item__block--status .title').hide();
	}
	$(window).on('resize', function(){
		if ($(window).width() < 1100){
			$('.feedback .item__block--status .title').show();
		} else {
			$('.feedback .item__block--status .title').hide();
		}
	});

	/* hamburger click */
	$('.header__item--hamburger').on('click', function(){
		$('body').toggleClass('fixed');
		$('.header--mobile').toggleClass('leave');
		$('.header--mobile').toggleClass('enter');
		$('.header--overlay').toggleClass('leave');
		$('.header--overlay').toggleClass('enter');
	});
	$('.header--overlay').on('click', function(){
		$('body').toggleClass('fixed');
		$('.header--mobile').toggleClass('leave');
		$('.header--mobile').toggleClass('enter');
		$('.header--overlay').toggleClass('leave');
		$('.header--overlay').toggleClass('enter');
	});


	/* Open/Close Popups */
	$('.m-auth__button--login').on('click', function(){
		$('.popup').show();
		$('.popup__content--login').show();
		$('body').toggleClass('fixed');
		$('.header--mobile').toggleClass('leave');
		$('.header--mobile').toggleClass('enter');
		$('.header--overlay').toggleClass('leave');
		$('.header--overlay').toggleClass('enter');
		$('body').addClass('fixed');
	});
	$('.auth--mobile__button--login').on('click', function(){
		$('.popup').show();
		$('.popup__content--login').show();
		$('body').toggleClass('fixed');
		$('.overlay').toggleClass('leave');
		$('.overlay').toggleClass('enter');
		$('body').addClass('fixed');
	});
	$('.m-auth__button--registration').on('click', function(){
		$('.popup').show();
		$('body').toggleClass('fixed');
		$('.popup__content--registration').show();
		$('.header--mobile').toggleClass('leave');
		$('.header--mobile').toggleClass('enter');
		$('.header--overlay').toggleClass('leave');
		$('.header--overlay').toggleClass('enter');
		$('body').addClass('fixed');
	});
	$('.auth--mobile__button--registration').on('click', function(){
		$('.popup').show();
		$('.popup__content--registration').show();
		$('body').toggleClass('fixed');
		$('.overlay').toggleClass('leave');
		$('.overlay').toggleClass('enter');
		$('body').addClass('fixed');
	});
	
	$('.overlay').on('click', function(){
		$('.popup').hide();
		$('.popup__content--login').hide();
		$('.popup__content--registration').hide();
		$('.overlay').toggleClass('leave');
		$('.overlay').toggleClass('enter');
	});
	$('.popup__overlay').on('click', function(){
		$('.popup').hide();
		$('.popup__content--login').hide();
		$('.popup__content--registration').hide();
		$('.overlay').addClass('leave');
		$('.overlay').removeClass('enter');
		$('body').removeClass('fixed');
	});
	$('.popup__close').on('click', function(){
		$('.popup').hide();
		$('.popup__content--login').hide();
		$('.popup__content--registration').hide();
		$('.overlay').addClass('leave');
		$('.overlay').removeClass('enter');
		$('body').removeClass('fixed');
	});
	$('.form__switcher--login').on('click', function(){
		$('.popup__content--registration').hide();
		$('.popup__content--login').show();
	});
	$('.form__switcher--registration').on('click', function(){
		$('.popup__content--login').hide();
		$('.popup__content--registration').show();
	});

	/* Change auth popup login-registration */
	$('.change-auth--registration > a, .change-auth--login > a').on('click', function(){
		$('.auth--login').toggleClass('visible');
		$('.auth--login').toggleClass('hidden');
		$('.auth--registration').toggleClass('visible');
		$('.auth--registration').toggleClass('hidden');
	});


	/* Owl Carousel*/
	$('.slider--main .owl-carousel').owlCarousel({
		items: 1,
		dots: true,
		nav: false,
		center: true,
		loop: true,
		stagePadding: 0,
		smartSpeed: 450,
		mouseDrag: false,
		responsive : {
			0 : {
				items: 1,
				margin: 10,
			},
			550: {
				items: 1,
			},
			1024: {
				merge:true
			}
		}
	});
	$('.slider--products .owl-carousel').owlCarousel({
		dots: true,
		nav: false,
		loop: true,
		margin: 20,
		stagePadding: 0,
		smartSpeed: 450,
		mouseDrag: false,
		responsive: {
			0: {
				center: true,
				autoWidth: true,
				items: 2,
			},
			768: {
				center: true,
				autoWidth: true,
				items:3,
			},
			1200: {
				items: 4
			}
		}
	});


	var sync1 = $("#gallery");
    var sync2 = $("#thumbnails");
    var slidesPerPage = 4; //globaly define number of elements per page
    var syncedSecondary = true;

    sync1.owlCarousel({
        items: 1,
        slideSpeed: 2000,
        nav: false,
        dots: false,
		loop: true,
		mouseDrag: false,
        responsiveRefreshRate: 200,
        navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
    }).on('changed.owl.carousel', syncPosition);

    sync2
        .on('initialized.owl.carousel', function() {
            sync2.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
            items: 6,
            dots: false,
			nav: true,
			stagePadding: 10,
            smartSpeed: 200,
            slideSpeed: 500,
            slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
            responsiveRefreshRate: 100
        }).on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - (el.item.count / 2) - .5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }
        sync2
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = sync2.find('.owl-item.active').length - 1;
        var start = sync2.find('.owl-item.active').first().index();
        var end = sync2.find('.owl-item.active').last().index();

        if (current > end) {
            sync2.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
            sync2.data('owl.carousel').to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            sync1.data('owl.carousel').to(number, 100, true);
        }
    }

    sync2.on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = $(this).index();
        sync1.data('owl.carousel').to(number, 300, true);
	});
	





	/* Change currency on site */

	$('.course__button').on('click', function(){
		$('.course__button').toggleClass('active');
		$('.course').toggleClass('dollar');
		$('.course').toggleClass('hryvna');
	});


	/* Check if product is in stock */

	$('.product').each(function(){
		if ($(this).hasClass('product--in-stock')){
			$(this).find('.count__block--input').val("1");
		}
		if ($(this).hasClass('product--out-of-stock')){
			$(this).find('.count__block--input').val("0");
			$(this).find('.count__block--input').prop('disabled', true);
		}
	});


	/* Plus and Minus buttons */

	$(".product, .cart, .single").on("click", ".count__block--plus", function(){
		var input = $(this).parent().children(".count__block--input").children("input");
		count = Number(input.val());
		count++;
		input.val(count);
	});
	$(".product, .cart, .single").on("click", ".count__block--minus", function(){
		var input = $(this).parent().children(".count__block--input").children("input");
		count = Number(input.val());
		if (count > 1){
			count--;
		}
		input.val(count);
	});

	/* Toggle menu Categories */
	$('.menu--toggle .menu__button').on('click', function(event){
		event.stopPropagation();
		$('.menu__nav').slideToggle('100');
	});

	$('.menu__button--catalog').on('click', function(event){
		event.stopPropagation();
		$('.catalog--mobile .list').slideToggle('100');
	});

	/* Can't write < 1 */

	$('.count__block--input > input').keypress(function(e) {
		if (e.which != 8 && e.which != 0 && e.which != 46 && (e.which < 48 || e.which > 57)) {
			return false;
		}
		var input = $(this).val();
		if (input == 0){
			$(this).val(1);
		}
	});
	

	/* Active Input Count Product */

	$('.count__block--input').on('click', function(){
		$(this).toggleClass("active");
	});


	/* Choose category when searching */

	$('.search__item--list .list__item.active').hide();
	$('.search__item--list .list__item').on('click', function(){
		$('.search__nav').slideUp('300');
		$('.search__button').toggleClass("search__button--open");
		text = $(this).text();
		$('.search__button > span').text(text);
		$('.search__item--list .list__item').removeClass("active");
		$(this).addClass("active");
		setTimeout(function(){
			$('.search__item--list .list__item').show();
			$('.search__item--list .list__item.active').hide();
		}, 300);
	});

	/* Open Search Categories */

	$('.search__button').on('click', function(event){
		event.stopPropagation();
		$(this).toggleClass("search__button--open");
		$('.search__nav').slideToggle('300');
	});

	/* Open Auth Popup */
	$('.header__item--user .header__link').on('click', function(event){
		event.stopPropagation();
		$('.auth').slideToggle();
	});
	
	$('.form__block--enter > a').on('click', function(){
		$('.auth').slideToggle();
	});

	/* Open Filter */
	$('.filter__title').on('click', function(){
		$(this).siblings('.filter__block').slideToggle();
		$(this).parent().toggleClass('open');
	});


	/* Localstorage Data */
	
	if (localStorage.getItem("product_type") === null) {
		localStorage.setItem('product_type', 'tile');
		$('.products').addClass('products--tile');
	}

	if (localStorage.getItem("product_type") == 'tile'){
		$('.sort__button--list').removeClass('active');
		$('.sort__button--tile').addClass('active');
		$('.products').addClass('products--tile');
	}

	if (localStorage.getItem("product_type") == 'list'){
		$('.sort__button--tile').removeClass('active');
		$('.sort__button--list').addClass('active');
		$('.products').addClass('products--list');
	}

	$('.sort__button--tile').on('click', function(){
		localStorage.setItem('product_type', 'tile');
		if (localStorage.getItem("product_type") == 'tile'){
			$('.sort__button--list').removeClass('active');
			$('.sort__button--tile').addClass('active');
			$('.products').removeClass('products--list');
			$('.products').addClass('products--tile');
		}
	});

	$('.sort__button--list').on('click', function(){
		localStorage.setItem('product_type', 'list');
		if (localStorage.getItem("product_type") == 'list'){
			$('.sort__button--tile').removeClass('active');
			$('.sort__button--list').addClass('active');
			$('.products').removeClass('products--tile');
			$('.products').addClass('products--list');
		}
	});


	
	/* Localstorage Data */
	
	if (localStorage.getItem("archive_type") === null) {
		localStorage.setItem('archive_type', 'tile');
		$('.archive').addClass('archive--tile');
		$('.feedback').addClass('feedback--tile');
	}

	if (localStorage.getItem("archive_type") == 'tile'){
		$('.sort__button-archive--list').removeClass('active');
		$('.sort__button-archive--tile').addClass('active');
		/* Archive */
		$('.archive').removeClass('archive--list');
		$('.archive').addClass('archive--tile');
		if ($(window).width() > 991){
			$('.archive .details .details__row--info').hide();
		} else {
			$('.archive .details .details__row--info').show();
		}
		$('.archive .details .details__row--product').show();
		$('.archive .details .details__row--delivery').show();
		$('.archive .details .details__row--total').show();
		$('.archive .archive__row--status .title').show();
		$('.archive .order__button--number').addClass('open');
		$('.archive .order__button--details').removeClass('open');
		/* Feedback */
		$('.feedback').removeClass('feedback--list');
		$('.feedback').addClass('feedback--tile');
		$('.feedback .details .details__row--product').show();
		$('.feedback .item__block--date').addClass('open');
	}

	if (localStorage.getItem("archive_type") == 'list'){
		$('.sort__button-archive--tile').removeClass('active');
		$('.sort__button-archive--list').addClass('active');
		/* Archive */
		$('.archive').addClass('archive--list');
		$('.archive .details .details__row--info').hide();
		$('.archive .details .details__row--product').hide();
		$('.archive .details .details__row--delivery').hide();
		$('.archive .details .details__row--total').hide();
		$('.archive .archive__row--status .title').hide();
		$('.archive .order__button--details').removeClass('open');
		$('.archive .order__button--number').removeClass('open');
		/* Feedback */
		$('.feedback').addClass('feedback--list');
		$('.feedback .details').hide();
		$('.feedback .item__block--date').removeClass('open');
	}

	$('.sort__button-archive--tile').on('click', function(){
		localStorage.setItem('archive_type', 'tile');
		if (localStorage.getItem("archive_type") == 'tile'){
			$('.sort__button-archive--list').removeClass('active');
			$('.sort__button-archive--tile').addClass('active');
			/* Archive */
			$('.archive').removeClass('archive--list');
			$('.archive').addClass('archive--tile');
			if ($(window).width() < 1100){
				$('.archive .details .details__row--info').hide();
			} else {
				$('.archive .details .details__row--info').show();
			}
			$('.archive .details .details__row--info').hide();
			$('.archive .details .details__row--product').show();
			$('.archive .details .details__row--delivery').show();
			$('.archive .details .details__row--total').show();
			$('.archive .archive__row--status .title').show();
			$('.archive .order__button--details').removeClass('open');
			$('.archive .order__button--number').addClass('open');
			/* Feedback */
			$('.feedback').removeClass('feedback--list');
			$('.feedback').addClass('feedback--tile');
			$('.feedback .details').show();
			$('.feedback .item__block--date').addClass('open');
		}
	});

	$('.sort__button-archive--list').on('click', function(){
		localStorage.setItem('archive_type', 'list');
		if (localStorage.getItem("archive_type") == 'list'){			
			$('.sort__button-archive--tile').removeClass('active');
			$('.sort__button-archive--list').addClass('active');
			/* Archive */
			$('.archive').removeClass('archive--tile');
			$('.archive').addClass('archive--list');
			$('.archive .details .details__row--info').hide();
			$('.archive .details .details__row--product').hide();
			$('.archive .details .details__row--delivery').hide();
			$('.archive .details .details__row--total').hide();
			$('.archive .archive__row--status .title').hide();
			$('.archive .order__button--number').removeClass('open');
			$('.archive .order__button--details').removeClass('open');
			/* Feedback */
			$('.feedback').removeClass('feedback--tile');
			$('.feedback').addClass('feedback--list');
			$('.feedback .details').hide();
			$('.feedback .item__block--date').removeClass('open');
		}
	});


	$('.order__button--details').on('click', function(){
		$(this).toggleClass('open');
		$(this).parent().siblings('.details').children('.details__row--info').toggle();
	})

	$('.order__button--number').on('click', function(){
		$(this).toggleClass('open');
		$(this).parent().parent().siblings('.archive__row--status').children('.title').toggle();
		$(this).parent().siblings('.details').children('.details__row--product').toggle();
		$(this).parent().siblings('.details').children('.details__row--delivery').toggle();
		$(this).parent().siblings('.details').children('.details__row--total').toggle();
	})


	$('.item__block--date').on('click', function(){
		$(this).parent().siblings('.details').toggle();
		$(this).toggleClass('open');
	});


	$('.form__block').on('click', '.remove__input', function(){
		$(this).parent().remove();
	});

	/* Add form field */
	$('.form__add').on('click', function(){
		$(this).parent().find('.form__input:first').clone().insertBefore($(this));
		$(this)
			.parent()
			.find('.form__input:last')
			.append('<div class="remove__input"></div>')
			.find('input[type="tel"]').val('')
			.mask('(999) 999 99 99');
		$(this)
			.parent()
			.find('.form__input:last')
			.find('input').val('');
	});

	/* Go to top */
	$('.gotop').on('click', function(){
		$('html, body').animate({
			scrollTop:0
		}, 500);
	});


	/* Cart Front */

	var count = $(".cart__items").children(".item").length
	$(".cart__header .count span:nth-child(2)").html(count);
	$(".cart").on("click", ".count__block--plus", function(){
		var item_count = $(this).siblings(".count__block--input").children("input").val();
		var item_price = $(this).parent().parent().siblings(".item__block--sum").children(".item__price").children(".price").attr("data-price");
		var sum_item = 0;
		sum_item = item_count * item_price;
		$(this).parent().parent().siblings(".item__block--sum").children(".item__price").children(".price").html(sum_item);
		var sum_items = 0;
		$(".cart__items .item").each(function(){
			var price = $(this).find(".price").html();
			sum_items += parseInt(price);
		});
		$(".cart__header .total span:nth-child(2) .price").html(sum_items);
	});

	$(".cart").on("click", ".count__block--minus", function(){
		var item_count = $(this).siblings(".count__block--input").children("input").val();
		var item_price = $(this).parent().parent().siblings(".item__block--sum").children(".item__price").children(".price").attr("data-price");
		var sum_item = 0;
		sum_item = item_count * item_price;
		$(this).parent().parent().siblings(".item__block--sum").children(".item__price").children(".price").html(sum_item);
		var sum_items = 0;
		$(".cart__items .item").each(function(){
			var price = $(this).find(".price").html();
			sum_items += parseInt(price);
		});
		$(".cart__header .total span:nth-child(2) .price").html(sum_items);
	});
	
	$(".cart").on("keyup", ".count__block--input > input", function(){
		var item_count = $(this).val();
		var item_price = $(this).parent().parent().parent().siblings(".item__block--sum").children(".item__price").children(".price").attr("data-price");
		var sum_item = 0;
		sum_item = item_count * item_price;
		$(this).parent().parent().parent().siblings(".item__block--sum").children(".item__price").children(".price").html(sum_item);
		var sum_items = 0;
		$(".cart__items .item").each(function(){
			var price = $(this).find(".price").html();
			sum_items += parseInt(price);
		});
		$(".cart__header .total span:nth-child(2) .price").html(sum_items);
	});



	$(".cart").on("click", ".duplicate-item", function(){
		var clone_item = $(this).parent().parent().parent().clone();
		$(".cart__items").append(clone_item);
		var sum_items = 0;
		$(".cart__items .item").each(function(){
			var price = $(this).find(".price").html();
			sum_items += parseInt(price);
		});
		$(".cart__header .total span:nth-child(2) .price").html(sum_items);
		var count = $(".cart__items .item").length;
		$(".cart__header .count span:nth-child(2)").html(count);
	});

	$(".cart").on("click", ".delete-item", function(){
		$(this).parent().parent().parent().remove();
		var sum_items = 0;
		$(".cart__items .item").each(function(){
			var price = $(this).find(".price").html();
			sum_items += parseInt(price);
		});
		$(".cart__header .total span:nth-child(2) .price").html(sum_items);
		var count = $(".cart__items").children(".item").length
		$(".cart__header .count span:nth-child(2)").html(count);
	});




	/* Steps */
	$(".next-step").on("click", function(){
		$(".step").removeClass("active");
		$(".step--second").addClass("active");
		$(".checkout__info--order").hide();
		$(".checkout__info--payment").show();
	});

	$(".prev-step").on("click", function(){
		$(".step").removeClass("active");
		$(".step--first").addClass("active");
		$(".checkout__info--payment").hide();
		$(".checkout__info--order").show();
	});

	$(".step__edit").on("click", function(){
		$(".step").removeClass("active");
		$(".step--first").addClass("active");
		$(".checkout__info--payment").hide();
		$(".checkout__info--order").show();
	});

	/* Close by click outside the block */
	/*
	$(document).on("click", function(event){
		if($dropdown !== event.target && !$dropdown.has(event.target).length){
			$dropdown.removeClass('dropdown_open');
		}            
	});
	*/
	$(document).click(function (event) {
		
        if ($(event.target).closest('.menu--toggle .menu__nav').length == 0 && $(event.target).attr('class') != 'menu__button') {
            $('.menu--toggle .menu__nav').slideUp();
		} 
		if ($(event.target).closest('.search__nav').length == 0 && $(event.target).attr('class') != 'search__button') {
			$('.search__button').removeClass('search__button--open');
            $('.search__nav').slideUp();
		}
		 if ($(event.target).closest('.auth').length == 0 && $(event.target).attr('id') != 'button-enter') {
            $('.auth').slideUp();
        }
	});

	$('.slider--mobile').removeClass('products--tile');
});