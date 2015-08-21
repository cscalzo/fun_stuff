<?php header("Content-type: text/css");

$white = '#0f0';
$dkgray = '#333';
$dkgreen = '#008400';
$font_size = '24';

 ?>

body {
 background:<?=$white?>;
 color:<?=$dkgray?>;
}
h1, h2, h3, h4 {
 color:<?=$dkgreen?>;
 font-size: <?=$font_size?>px;
}
p{
	font-size: <?php echo floor($font_size / 2); ?>px; 
}

