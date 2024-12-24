$(document).ready(function() {

	//Таймер обратного отсчета
	//Документация: http://keith-wood.name/countdown.html
	//<div class="countdown" date-time="2015-01-07"></div>
	var austDay = new Date($(".countdown").attr("date-time"));
	$(".countdown").countdown({until: austDay, format: 'yowdHMS'});

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();

	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	$(".top_mnu").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$("a.scroll").click(function() {
		$.scrollTo($(".div"), 800, {
			offset: -90
		});
	});

	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	var owl = $(".carousel");
	owl.owlCarousel({
		items :4,
	});
	owl.on("mousewheel", ".owl-wrapper", function (e) {
		if (e.deltaY > 0) {
			owl.trigger("owl.prev");
		} else {
			owl.trigger("owl.next");
		}
		e.preventDefault();
	});
	$(".next").click(function(){
		owl.trigger("owl.next");
	});
	$(".prev").click(function(){
		owl.trigger("owl.prev");
	});
	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("form").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});
    //КАЛЬКУЛЯТОР    
    var srcValue = $('.calc img').attr('src');

    var buildingSpecs,
        buildingSpecsHolder,
        price,
        priceHoilder;

        buildingSpecsHolder = $('#buildingSpecs');
        priceHolder = $('#price');	

        price = '0';
        buildingSpecs = '';

        function calculatePrice(){
        var building = $ ('option[name=building]:checked', '#building').val();
        var material = $ ('option[name=material]:checked', '#material').val();
        var width = $('input[name=width]').on('input change').val(); 
        var height = $('input[name=height]').on('input change').val(); 

        building = parseInt(building);
        material = parseInt(material);
        width = parseInt(width);
        height = parseInt(height);
       

       
        var price = (building + material) * (width * height);
       
        priceHolder.text(price + 'руб.*');
        };
        function compileSpecs(){
        buildingSpecs = $ ('option[name=building]:checked', '#building').text();
        var width = $('input[name=width]').val(); 
        var height = $('input[name=height]').on('input change').val(); 
        buildingSpecs = buildingSpecs + width;
        buildingSpecsHolder.text(buildingSpecs);
        };
        $('#calc select').on('change', function(){	
        calculatePrice();
        compileSpecs();
    });
        calculatePrice();
        compileSpecs();
        
        var sound_link = $("#sound-link")[0];
               $("button").mouseenter(function() {
               	sound_link.play();      	
               });
        var sound_btn = $("#sound-button")[0];
               $("a").mouseenter(function() {
               	sound_btn.play();       	
               });       
    });    
    
 