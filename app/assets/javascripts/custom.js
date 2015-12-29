$(document).ready(function() {

	var $tm = TweenMax;
	var $card = $(".cardette"); 
	var $anchor = $(".anchor");
	var $anchorMemo = $(".anchor_memo");
	var $anchorDif = $(".anchor_difference");
	var $changes = $(".changes");
	var $heads = $(".heads");
	var $letters = $(".letters");
	var $numbers = $(".numbers");
	var $objects = $(".objects");
	var $checkId = [];
	var $clicks = 0; 
	var $moves = 0;
	var $tlBravo = new TimelineMax();
	var $tlStars = new TimelineMax({repeat: 5});
	var $tl = new TimelineMax({repeat: -1});

	$(".print_button").click(function() {
		window.print();
	});

	//Home banner animation
	$tl.staggerFrom($heads, 2, { top: -800, ease: Bounce.easeOut }, 0.5)
			.staggerTo($heads, 1, { rotation: -1080 }, 0.25, "+=3")
			.to($(".head1"), 1, { left: -1000 }, "-=1")
			.to($(".head2"), 1, { left: -1000, top: -800 }, "-=1")
			.to($(".head3"), 1, { left: 1000, top: -800 }, "-=1")
			.to($(".head4"), 1, { left: 2000 }, "-=1")
		.staggerFrom($letters, 2, { top: -1000, ease: Bounce.easeOut }, 0.5)
			.staggerTo($letters, 1, { rotation: -1080 }, 0.25, "+=3")
			.to($(".letter1"), 1, { left: -1000 }, "-=1")
			.to($(".letter2"), 1, { left: -1000, top: -800 }, "-=1")
			.to($(".letter3"), 1, { left: 1000, top: -800 }, "-=1")
			.to($(".letter4"), 1, { left: 2000 }, "-=1")
		.staggerFrom($objects, 2, { top: -1000, ease: Bounce.easeOut }, 0.5)
			.staggerTo($objects, 1, { rotation: -1080 }, 0.25, "+=3")
			.to($(".object1"), 1, { left: -1000 }, "-=1")
			.to($(".object2"), 1, { left: -1000, top: -800 }, "-=1")
			.to($(".object3"), 1, { left: 1000, top: -800 }, "-=1")
			.to($(".object4"), 1, { left: 2000 }, "-=1")
		.staggerFrom($numbers, 2, { top: -1000, ease: Bounce.easeOut }, 0.5)
			.staggerTo($numbers, 1, { rotation: -1080 }, 0.25, "+=3")
			.to($(".number1"), 1, { left: -1000 }, "-=1")
			.to($(".number2"), 1, { left: -1000, top: -800 }, "-=1")
			.to($(".number3"), 1, { left: 1000, top: -800 }, "-=1")
			.to($(".number4"), 1, { left: 2000 }, "-=1")
		

	//Bravo Win function
	function bravo_win() {
		$(".bravo_win_container").show();
		$tlBravo.to($anchor, 1, {opacity: 0.2, delay: 0.5})
			.to($(".bravo_win"), 1 ,{ opacity: 1, scale: 2 }, "-=1")
			.to($(".bravo_win_stars"), 1 ,{ opacity: 0, scale: 2 }, "-=1")
		$tlStars.to($(".bravo_win_stars"), 0.2 ,{ opacity: 1 })
			.to($(".bravo_win_stars"), 0.2 ,{ opacity: 0 })

		$tlBravo.append($tlStars);
	}



	//Spot The Difference logic
	$changes.click(function() {
		$(this).addClass("spoted");
		var checkIdDif = this.id
		if ($anchorDif.find(".changes")) {
			$(".changes[id]").each(function() {
				if ((this.id) == checkIdDif) {
					$tm.to(this, 1, {opacity: 1} );
				}
			});
		}
		$tm.to(this, 1, {opacity: 1} );
	});

	$changes.click(function() {
		if ($(".difference_game_container").find(".spoted").length == 7) {
			bravo_win();
		}
	});
		



	//Memo card logic
	function flipAllCardBack() {
		if ($anchorMemo.find(".finished").length == 12) {
			bravo_win();
		}
		$card.removeClass("is_facing");
		$tm.to($(".cardette"), 0.1, {transform: "rotateY(0deg)", boxShadow: "0px 0px 0px #aaa"});
	}

	$card.click(function() {
		$moves += 1;
		$tm.to(this, 0.1, {transform: "rotateY(180deg)", boxShadow: "-5px 5px 5px #aaa"});
		$(this).addClass("is_facing");
		$("#memo_score").html($moves);
	});

	$card.click(function() {
		$clicks += 1;
		//check how many card are facing
		if ($anchorMemo.find(".is_facing").length > 1) {
			$(".is_facing[id]").each(function(){
    			$checkId.push(this.id);
			});
			//check if facing card are the same
			if ($checkId[0] == $checkId[1]) {
				$(".is_facing").each(function() {
					$(this).removeClass('cardette');
					$(this).addClass('finished');
				});
				$checkId = [];
				$clicks = 0;
				flipAllCardBack();
			} 
		} 
		if (($clicks >= 2) && ($checkId[0] != $checkId[1])) {
			setTimeout(function() {
				$checkId = [];
				flipAllCardBack();
			}, 700);
			$clicks = 0;
		}
	});

	



	
	//Nav home/index
	$(window).scroll(function() {
		if ($(this).scrollTop() > 400) {
			$("#nav_index").fadeIn("slow");
		} else {
			$("#nav_index").fadeOut("slow");
		}
	});


	//Inits
	$(".book_carousel").owlCarousel({
		items: 3, 
		autoPlay: true, 
		scrollPerPage: true
	});
	$(".game_carousel").owlCarousel({
		items: 3, 
		autoPlay: 2000, 
		scrollPerPage: true
	});
	$("#flip_book").turn({
	  autoCenter: true
	});


	
});
