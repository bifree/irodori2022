<!DOCTYPE html>
<html lang="ja">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title><?php bloginfo( 'name' ); ?></title>
	<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
	<link rel="stylesheet" href="<?php echo get_stylesheet_uri(); ?>">
	<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/reset.css">
	<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/sp_style.css">
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
	<?php wp_head(); ?>
</head>
<body>
<header id="header">
	<div class="go-top"><i class="fas fa-chevron-up"></i></div>
	<div class="container header">
		<div class="header--logo">
			<a href="<?php echo esc_url( home_url('/') ); ?>"><img src="<?php echo get_template_directory_uri(); ?>/assets/img/logo.png" alt="logo"></a>
		</div>
		<div class="sp-menu">
			<span class="material-icons" id="open">menu</span>
		</div>
		<div class="header--menu">
			<nav>
				<ul>
					<li><a href="<?php echo esc_url( home_url('/') ); ?>">HOME</a></li>
					<li><a href="<?php echo esc_url( home_url('/about') ); ?>">ABOUT</a></li>
					<li class="sub--menu"><a href="<?php echo esc_url( home_url('/service') ); ?>">SERVICE</a>
						<ul class="submenu">
							<li><a href="https://www.street-academy.com/myclass/90108?conversion_name=direct_message&tracking_code=f3eda923d0b277d554ec1a389e12c0f7">▶︎ バレエレッスン</a></li>
							<li><a href="<?php echo esc_url( home_url('/ladies-shopping') ); ?>" class="fashion">▶︎ レディースファッション買い物同行</a></li>
							<li><a href="<?php echo esc_url( home_url('/category/event_info') ); ?>">▶︎ イベント開催</a></li>
						</ul>
					</li>
					<li class="sub--menu"><a href="">EVENT</a>
						<ul class="submenu">
							<li><a href="<?php echo esc_url( home_url('/category/news') ); ?>">▶︎ お知らせ</a></li>
							<li><a href="<?php echo esc_url( home_url('/category/event_info') ); ?>">▶︎ イベント情報</a></li>
							<li><a href="<?php echo esc_url( home_url('/category/activity') ); ?>">▶︎ 活動報告</a></li>
						</ul>
					</li>
					<a href="http://localhost:8888/irodori/contact/"><div class="contact">
					CONTACT<i class="fas fa-paper-plane"></i>
					</div></a>
				</ul>
			</nav>
		</div>
	</div>

</header>