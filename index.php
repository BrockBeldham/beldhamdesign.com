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
    <!-- Modules -->
    <link href="/static/css/states/state.css" rel="stylesheet" />
</head>
<body class="portfolio">
    <div class="wrapper">

        <?php include 'includes/header.php'; ?>

        <?php include 'includes/home.php'; ?>

        <?php include 'includes/about.php'; ?>

        <?php include 'includes/work.php'; ?>

        <?php include 'includes/contact.php'; ?>

    </div>

    <div class="pop clear-fix">
        <div class="pop-bg"></div>
        <div class="pop-close" data-pop-close>
            <a href="#" class="icon-link"><i class="fa fa-times"></i></a>
        </div>
        <div class="pop-content"></div>
    </div>
    
    <div class="nav-mobi">
        <?php include 'includes/nav.php'; ?>
    </div>

    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script type="text/javascript" src="/static/components/underscore/underscore.js"></script>
    <script type="text/javascript" src="/static/components/backbone/backbone.js"></script>
    <script type="text/javascript" src="/static/components/velocity/velocity.js"></script>
    <script type="text/javascript" src="/static/components/modernizr/modernizr.custom.js"></script>
    <script type="text/javascript" src="/static/js/initialize.js"></script>
</body>
</html>