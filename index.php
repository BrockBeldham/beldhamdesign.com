<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

    <!--- FAVICONS START HERE -->
    <!--- FAVICONS END HERE -->

    <title>Brock Beldham | Portfolio</title>

    <meta name="description" content="Brock Beldham is an Interactive Designer and Front-End Developer from Toronto, ON" />
    <meta name="keywords" content="Brock Beldham, Front-End, Developer, Engineer, Web Design, Graphic Design, Special Effects, Animation, Portfolio" />

    <!-- Components -->
    <link href='http://fonts.googleapis.com/css?family=Lato:100,300,400,700' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">

    <? if ($ASSETS_DEV): ?>
        <!-- Base -->
        <link href="/static/css/base/reset.css" rel="stylesheet" />
        <link href="/static/css/base/base.css" rel="stylesheet" />
        <link href="/static/css/base/layout.css" rel="stylesheet" />
        <!-- Modules -->
        <link href="/static/css/modules/utilities.css" rel="stylesheet" />
        <link href="/static/css/modules/header.css" rel="stylesheet" />
        <link href="/static/css/modules/home.css" rel="stylesheet" />
        <link href="/static/css/modules/work.css" rel="stylesheet" />
        <link href="/static/css/modules/about.css" rel="stylesheet" />
        <link href="/static/css/modules/contact.css" rel="stylesheet" />
        <!-- Modules -->
        <link href="/static/css/states/state.css" rel="stylesheet" />
    <? else: ?>
        <link href="/static/dist/css/core.min.css" rel="stylesheet" />
    <? endif ?>
</head>
<body class="portfolio">
    <div class="wrapper" data-mobi-nav-close>

        <?php include 'includes/header.php'; ?>

        <?php include 'includes/home.php'; ?>

        <?php include 'includes/about.php'; ?>

        <?php include 'includes/work.php'; ?>

        <?php include 'includes/contact.php'; ?>
        
    </div>

    <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-62553443-1', 'auto');
        ga('send', 'pageview');
    </script>
    
    <? if ($ASSETS_DEV): ?>
        <script type="text/javascript" src="/static/components/jquery/dist/jquery.min.js"></script>
        <script type="text/javascript" src="/static/components/underscore/underscore-min.js"></script>
        <script type="text/javascript" src="/static/components/backbone/backbone.js"></script>
        <script type="text/javascript" src="/static/components/velocity/velocity.min.js"></script>
        <script type="text/javascript" src="/static/components/modernizr/modernizr.custom.js"></script>
        <script type="text/javascript" src="/static/js/initialize.js"></script>
        <script type="text/javascript" src="/static/js/analytics.js"></script>
    <? else: ?>
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min.js"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.2.2/velocity.min.js"></script>
        <script type="text/javascript" src="/static/dist/js/core.min.js"></script>
    <? endif?>
</body>
</html>