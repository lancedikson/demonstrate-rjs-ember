<!DOCTYPE html>
<html>
<head>
	<title>SunSay</title>
	<link rel="stylesheet" href="/css/main.css">

	<link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png">
	<link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png">
	<link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png">
	<link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png">
	<link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png">
	<link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png">
	<link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png">
	<link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png">
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png">
	<link rel="icon" type="image/png" href="/favicon-192x192.png" sizes="192x192">
	<link rel="icon" type="image/png" href="/favicon-160x160.png" sizes="160x160">
	<link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96">
	<link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16">
	<link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32">
	<meta name="msapplication-TileColor" content="#ffffff">
	<meta name="msapplication-TileImage" content="/mstile-144x144.png">

	<style>
		body{
		  /*text-align: center;*/
		}
		.loader{
		  margin: 5em auto 2em auto;
		  height: 100px;
		  width: 20%;
		  text-align: center;
		  padding: 1em;
		  display: block;
		  vertical-align: bottom;
		}

		/*
		  Set the color of the icon
		*/
		svg path,
		svg rect{
		  fill: #FFFFFF;
		}
	</style>



</head>
<body class="b">
	<div class="loader" title="7">
	  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	     width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">
	    <rect x="0" y="10" width="4" height="10" fill="#333" opacity="0.2">
	      <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0s" dur="0.6s" repeatCount="indefinite" />
	      <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0s" dur="0.6s" repeatCount="indefinite" />
	      <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0s" dur="0.6s" repeatCount="indefinite" />
	    </rect>
	    <rect x="8" y="10" width="4" height="10" fill="#333"  opacity="0.2">
	      <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.15s" dur="0.6s" repeatCount="indefinite" />
	      <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite" />
	      <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite" />
	    </rect>
	    <rect x="16" y="10" width="4" height="10" fill="#333"  opacity="0.2">
	      <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
	      <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
	      <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
	    </rect>
	  </svg>
	</div>
    <script src="/packages/requirejs/require.js"></script>
    <script src="/js/public/require-config.js"></script>
    <script>
     require.config({baseUrl: '/js/public'});
     require(['main']);
    </script>
</body>
</html>
