<footer class="footer">
	<?php get_template_part('template/snslist'); ?>
		<div class="footer__box">
			<div class="footer_inner">
				<div id="footer" class="footer__main">
					<ul>
						<li>ABOUT</li>
						<li><a href="<?php
echo get_page_link( 20 );
?>">団体について</a></li>
						<li><a href="<?php
echo get_page_link( 20 );
?>">代表あいさつ</a></li>
					</ul>
					<ul>
						<li>SERVICE</li>
						<li><a href="<?php
echo get_page_link( 20 );
?>">バレエレッスン</a></li>
						<li><a href="<?php
echo get_page_link( 20 );
?>">レディースファッション買い物同行</a></li>
					<li><a href="<?php
echo get_page_link( 20 );
?>">イベント開催</a></li>
					<li><a href="<?php
echo get_page_link( 15 );
?>">イベント一覧</a></li>
					</ul>
					<ul>
						<li>BLOG</li>
						<li><a href="<?php
echo get_page_link( 20 );
?>">お知らせ</a></li>
						<li><a href="<?php
echo get_page_link( 20 );
?>">イベント告知</a></li>
						<li><a href="<?php
echo get_page_link( 20 );
?>">活動報告</a></li>
					</ul>
					<ul>
						<li>CONTACT</li>
						<li><a href="<?php
echo get_page_link( 30 );
?>">お問い合わせ</a></li>
					</ul>
					<div class="footer__sub">
						<a href="https://irodori-odori.com/contact/"><p class="footer__btn">よくある質問</p></a>
						<a href="https://irodori-odori.com/privacy-policy/"><p class="footer__btn">プライバシーポリシー</p></a>
					<img src="" alt="">
					</div>
				</div>
				<p class="white">&copy; 2021 irOdori.</p>
			</div>
		</div>
	</footer>
	<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
	<script src="<?php echo get_template_directory_uri(); ?>/main.js"></script>
	<script src="<?php echo get_template_directory_uri(); ?>/main__sp.js"></script>
	<script src="<?php echo get_template_directory_uri(); ?>/sp-menu.js"></script>
	<script src="<?php echo get_template_directory_uri(); ?>/accordion.js"></script>
	<script src="<?php echo get_template_directory_uri(); ?>/hover.js"></script>
	<?php wp_footer(); ?>
</body>
</html>