jQuery(window).load(function() {
	/* demo */
	
	jQuery('body').append(
	"<div class='switcher'>"+
		"<div class='switcherWrappper'>"+

			"<button class='switcherShowHide'><i class='fa fa-cog'></i></button>"+
			"<div class='switcherContents'>"+
				"<header><h5>页面风格</h5></header>"+
				"<!--  Skins Colors -->"+
				"<div class='switcherContent skinsColor'>"+
					"<span class='title'>颜色选择</span>"+
					"<ul class='demo-content demo-color'>"+
					
						"<li data-name='gnrl_color' data-value='blue' data-value-2='3498db' style='background-color: #3498db;'></li>"+
						
						"<li data-name='gnrl_color' data-value='pink' data-value-2='ff6b6b' style='background-color: #ff6b6b;'></li>"+
						
						"<li data-name='gnrl_color' data-value='green' data-value-2='16a085' style='background-color: #16a085;'></li>"+
						
						"<li data-name='gnrl_color' data-value='red' data-value-2='cd2f2e' style='background-color: #cd2f2e;'></li>"+
						
						"<li data-name='gnrl_color' data-value='purple' data-value-2='904eab' style='background-color: #904eab;'></li>"+

						"<li data-name='gnrl_color' data-value='brown' data-value-2='a57b4a' style='background-color: #a57b4a;'></li>"+

						"<li data-name='gnrl_color' data-value='cyan' data-value-2='2997ab' style='background-color: #2997ab;'></li>"+

						"<li data-name='gnrl_color' data-value='lightgreen' data-value-2='38cbcb' style='background-color: #38cbcb;'></li>"+

						"<li data-name='gnrl_color' data-value='yellow' data-value-2='f8ba01' style='background-color: #f8ba01;'></li>"+
					
					"</ul>"+
				"</div>"+
				"<!--  End Skins Colors -->"+
				
				
				"<!--  Layout -->"+
				"<div class='switcherContent tempLayout'>"+
					"<span class='title'>界面</span>"+
					"<ul class='demo-content demo-layout'>"+
					
						"<li data-name='gnrl_layout' data-value='wide'>空白</li>"+
						
						"<li data-name='gnrl_layout' data-value='boxed'>底纹</li>"+
						
						"<li data-name='gnrl_layout' data-value='boxed2'>图片</li>"+
					
					"</ul>"+
				"</div>"+
				"<!--  End Layout -->"+
				
				"<!--  Patterns -->"+
				"<div class='switcherContent patterens'>"+
					"<span class='title'>背景</span>"+
					"<ul class='demo-content demo-pattern'>"+
					
						"<li data-name='gnrl_pattern' data-value='bg1'><img alt='' src='images/patterns/bg1.png'></li>"+
						
						"<li data-name='gnrl_pattern' data-value='bg2'><img alt='' src='images/patterns/bg2.png'></li>"+
						
						"<li data-name='gnrl_pattern' data-value='bg3'><img alt='' src='images/patterns/bg3.png'></li>"+
						
						"<li data-name='gnrl_pattern' data-value='bg4'><img alt='' src='images/patterns/bg4.png'></li>"+
						
						"<li data-name='gnrl_pattern' data-value='bg5'><img alt='' src='images/patterns/bg5.png'></li>"+
						
						"<li data-name='gnrl_pattern' data-value='bg6'><img alt='' src='images/patterns/bg6.png'></li>"+
						
						"<li data-name='gnrl_pattern' data-value='bg7'><img alt='' src='images/patterns/bg7.png'></li>"+
						
						"<li data-name='gnrl_pattern' data-value='bg8'><img alt='' src='images/patterns/bg8.png'></li>"+
						
						"<li data-name='gnrl_pattern' data-value='bg9'><img alt='' src='images/patterns/bg9.png'></li>"+
						
						"<li data-name='gnrl_pattern' data-value='bg10'><img alt='' src='images/patterns/bg10.png'></li>"+
						
						"<li data-name='gnrl_pattern' data-value='bg11'><img alt='' src='images/patterns/bg11.png'></li>"+
						
						"<li data-name='gnrl_pattern' data-value='bg12'><img alt='' src='images/patterns/bg12.png'></li>"+
						
						"<li data-name='gnrl_pattern' data-value='bg13'><img alt='' src='images/patterns/bg13.png'></li>"+
						
						"<li data-name='gnrl_pattern' data-value='bg14'><img alt='' src='images/patterns/bg14.png'></li>"+
						
						"<li data-name='gnrl_pattern' data-value='bg15'><img alt='' src='images/patterns/bg15.png'></li>"+
						
						"<li data-name='gnrl_pattern' data-value='bg16'><img alt='' src='images/patterns/bg16.png'></li>"+
						
						"<li data-name='gnrl_pattern' data-value='bg17'><img alt='' src='images/patterns/bg17.png'></li>"+
						
						"<li data-name='gnrl_pattern' data-value='bg18'><img alt='' src='images/patterns/bg18.png'></li>"+
						
						"<li data-name='gnrl_pattern' data-value='bg19'><img alt='' src='images/patterns/bg19.png'></li>"+
						
						"<li data-name='gnrl_pattern' data-value='bg20'><img alt='' src='images/patterns/bg20.png'></li>"+
						
						"<li data-name='gnrl_pattern' data-value='bg21'><img alt='' src='images/patterns/bg21.png'></li>"+
						
						"<li data-name='gnrl_pattern' data-value='bg22'><img alt='' src='images/patterns/bg22.png'></li>"+
						
						"<li data-name='gnrl_pattern' data-value='bg23'><img alt='' src='images/patterns/bg23.png'></li>"+
						
						"<li data-name='gnrl_pattern' data-value='bg24'><img alt='' src='images/patterns/bg24.png'></li>"+
					
					"</ul>"+
				"</div>"+
				"<!--  End Patterns -->"+
					
			"</div>"+
		"</div>"+
	"</div>");
	
	
		

	//-- show and hide switcher --

	jQuery('.switcherShowHide').click(function() {
		if ( jQuery('.switcherShowHide').hasClass('switcherToggle') )
			{
			jQuery('.switcherShowHide').removeClass('switcherToggle');
			jQuery('.switcher').removeClass('opened');
		}else
		{   
			jQuery('.switcherShowHide').addClass('switcherToggle');
			jQuery('.switcher').addClass('opened');
		}

	});

	jQuery('.switcher').click(function(e){
		e.stopPropagation();
	});

	jQuery('html').on( 'click', function ( _ev )
	{  
		jQuery('.switcherShowHide').removeClass('switcherToggle');
		jQuery('.switcher').removeClass('opened');
	});


   //-- controlling the position of switcher --
	var jQueryswitcherWrappper = jQuery('.switcherWrappper');

	jQueryswitcherWrappper.resize(function(){

		jQuery('.switcher').css({ 'left' : - jQueryswitcherWrappper.width()});

	});

	jQueryswitcherWrappper.trigger('resize');



	var emerald_gnrl_color=false;
	
	// Pattern
	jQuery('li[data-name=gnrl_pattern]').click(function() {
		emerald_gnrl_gnrl_pattern = jQuery(this).attr("data-value");
		if(emerald_gnrl_gnrl_pattern!=false){
			pointer_pattern(emerald_gnrl_gnrl_pattern);
		}
	});
	
	// General Pattern
	function pointer_pattern(pattern_style){
		if (jQuery(".active-layout").attr("data-value") == "boxed" || jQuery(".active-layout").attr("data-value") == "boxed2") {
			jQuery("body").css("background","url(images/patterns/"+pattern_style+".png) repeat");
		}
	}
	
	// Layout
	jQuery('li[data-name=gnrl_layout]').click(function() {
		jQuery("*").removeClass("active-layout");
		jQuery(this).addClass("active-layout");
		jQuery('.owl-stage').resize();
		emerald_gnrl_layout = jQuery(this).attr("data-value");
		if(emerald_gnrl_layout!=false){
			pointer_layout(emerald_gnrl_layout);
		}
	});
	
	// General Layout
	function pointer_layout(layout_style){
		if (layout_style == "wide") {
			jQuery("body").removeClass("body-boxed").removeClass("body-boxed-2");
			jQuery(".allWrapper").removeClass("boxed").removeClass("boxed-2");
			jQuery('.owl-stage').resize();
			jQuery(window).resize();
			jQuery("body").attr("style","");
		}else if (layout_style == "boxed") {
			jQuery("body").addClass("body-boxed").removeClass("body-boxed-2");
			jQuery(".allWrapper").addClass("boxed").removeClass("boxed-2");
			jQuery('.owl-stage').resize();
			jQuery(window).resize();
			jQuery("body").attr("style","");
		}else if (layout_style == "boxed2") {
			jQuery("body").removeClass("body-boxed").addClass("body-boxed-2");
			jQuery(".allWrapper").removeClass("boxed").addClass("boxed-2");
			jQuery('.owl-stage').resize();
			jQuery(window).resize();
			jQuery("body").attr("style","");
		}
	}
	
	// Color
	jQuery('li[data-name=gnrl_color]').click(function() {
		emerald_gnrl_color = jQuery(this).attr("data-value");
		emerald_gnrl_color_2 = jQuery(this).attr("data-value-2");
		if(emerald_gnrl_color!=false){
			pointer_color(emerald_gnrl_color,emerald_gnrl_color_2);
		}
	});
	
	// General Color
	function pointer_color(color_style,color_style_2){
		if (color_style != "skins") {
			jQuery(".style-5 .ribbon").attr("src","images/ribbon-"+color_style+".png");
			jQuery('head').append('<style type="text/css">.push_options{background:#'+color_style_2+'}</style>');
		}else if (color_style == "skins") {
			jQuery(".style-5 .ribbon").attr("src","images/ribbon-pink.png");
			jQuery('head').append('<style type="text/css">.push_options{background:#'+color_style_2+'}</style>');
		}
		jQuery('head').append('<link rel="stylesheet" href="css/skins/'+color_style+'.css">');
	}
	
});