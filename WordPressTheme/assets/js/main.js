$(function(){
	$(window).on('load',function(){
		var setElm = $('.viewer'),
		setMaxWidth = 720,
		setMinWidth = 320,
		fadeSpeed = 1500,
		switchDelay = 5000,
		sideNavi = 'off', // 'on' or 'off'
		sideHide = 'hide', // 'hide' or 'show'
		naviOpc = 0.5;

		setElm.each(function(){
			var targetObj = $(this),
			findUl = targetObj.find('ul'),
			findLi = targetObj.find('li'),
			findLiFirst = targetObj.find('li:first');

			findLi.css({display:'block',opacity:'0',zIndex:'99'});
			findLiFirst.css({zIndex:'100'}).stop().animate({opacity:'1'},fadeSpeed);

			function timer(){
				setTimer = setInterval(function(){
					slideNext();
				},switchDelay);
			}
			timer();

			function slideNext(){
				findUl.find('li:first-child').not(':animated').animate({opacity:'0'},fadeSpeed).next('li').css({zIndex:'100'}).animate({opacity:'1'},fadeSpeed).end().appendTo(findUl).css({zIndex:'99'});
			}
			function slidePrev(){
				findUl.find('li:first-child').not(':animated').css({zIndex:'99'}).animate({opacity:'0'},fadeSpeed).siblings('li:last-child').css({zIndex:'100'}).animate({opacity:'1'},fadeSpeed).prependTo(findUl);
			}
			targetObj.css({width:setMaxWidth,display:'block'});

			// メイン画像をベースにエリアの幅と高さを設定
			var setLiImg = findLi.find('img'),
			baseWidth = setLiImg.width(),
			baseHeight = setLiImg.height();

			// レスポンシブ動作メイン
			function imgSize(){
				var windowWidth = parseInt($(window).width());
				if(windowWidth >= setMaxWidth) {
					targetObj.css({width:setMaxWidth,height:baseHeight});
					findUl.css({width:baseWidth,height:baseHeight});
					findLi.css({width:baseWidth,height:baseHeight});
				} else if(windowWidth < setMaxWidth) {
					if(windowWidth >= setMinWidth) {
						targetObj.css({width:'100%'});
						findUl.css({width:'100%'});
						findLi.css({width:'100%'});
					} else if(windowWidth < setMinWidth) {
						targetObj.css({width:setMinWidth});
						findUl.css({width:setMinWidth});
						findLi.css({width:setMinWidth});
					}
					var reHeight = setLiImg.height();
					targetObj.css({height:reHeight});
					findUl.css({height:reHeight});
					findLi.css({height:reHeight});
				}
			}
			$(window).resize(function(){imgSize();}).resize();

			// サイドナビボタン（有り無し）
			var agent = navigator.userAgent;
			if(sideNavi == 'on'){
				targetObj.append('<a href="javascript:void(0);" class="btnPrev"></a><a href="javascript:void(0);" class="btnNext"></a>');
				var btnPrev = targetObj.find('.btnPrev'),btnNext = targetObj.find('.btnNext'),btnPrevNext = targetObj.find('.btnPrev,.btnNext');

				if(agent.search(/iPhone/) != -1 || agent.search(/iPad/) != -1 || agent.search(/iPod/) != -1 || agent.search(/Android/) != -1){
					btnPrevNext.css({opacity:naviOpc});
				} else {
					btnPrevNext.css({opacity:naviOpc}).hover(function(){
						$(this).stop().animate({opacity:naviOpc+0.2},200);
					},function(){
						$(this).stop().animate({opacity:naviOpc},200);
					});
				}

				if(sideHide == 'hide'){
					if(agent.search(/iPhone/) != -1 || agent.search(/iPad/) != -1 || agent.search(/iPod/) != -1 || agent.search(/Android/) != -1){
						btnPrevNext.css({visibility:'visible'});
					} else {
						btnPrevNext.css({visibility:'hidden'});
						targetObj.hover(function(){
							btnPrevNext.css({visibility:'visible'});
						},function(){
							btnPrevNext.css({visibility:'hidden'});
						});
					}
				}

				btnPrev.click(function(){switchPrev();});
				btnNext.click(function(){switchNext();});
			}

			// ボタン移動動作
			function switchNext(){
				findLi.not(':animated').parents('ul').each(function(){
					clearInterval(setTimer);
					slideNext();
					timer();
				});
			}
			function switchPrev(){
				findLi.not(':animated').parents('ul').each(function(){
					clearInterval(setTimer);
					slidePrev();
					timer();
				});
			}

		});
	});
});



$(function(){
	// 設定
	var $width =1366; // 横幅
	var $height =600; // 高さ
	var $interval = 3000; // 切り替わりの間隔（ミリ秒）
	var $fade_speed = 2000; // フェード処理の早さ（ミリ秒）
	$("#slide ul li").css({"position":"relative","overflow":"hidden","width":$width,"height":$height});
	$("#slide ul li").hide().css({"position":"absolute","top":0,"left":0});
	$("#slide ul li:first").addClass("active").show();
	setInterval(function(){
	var $active = $("#slide ul li.active");
	var $next = $active.next("li").length?$active.next("li"):$("#slide ul li:first");
	$active.fadeOut($fade_speed).removeClass("active");
	$next.fadeIn($fade_speed).addClass("active");
	},$interval);
	});

//common
var $width;
var $height;
$(window).on("load resize",function() {
    $width = $(window).width();
    $height = $(window).height();
});

//main_img
var main_img_w = 1366; //フルスクリーンで表示させたい画像の幅
var main_img_h = 600; //フルスクリーンで表示させたい画像の高さ
$(window).on("load resize",function() {
    if ($width/main_img_w >= $height/main_img_h) {
        $(".main_img h1 img").css({
            "width": $width + "px",
            "height": "auto",
            "top": $height/2 + "px",
            "left": $width/2 + "px",
            "margin-top": -($width/main_img_w*main_img_h)/2 + "px",
            "margin-left": -$width/2 + "px"
        });
    } else {
        $(".main_img h1 img").css({
            "width": "auto",
            "height": $height + "px",
            "top": $height/2 + "px",
            "left": $width/2 + "px",
            "margin-top": -$height/2 + "px",
            "margin-left": -($height/main_img_h*main_img_w)/2 + "px"
        });
    }
});