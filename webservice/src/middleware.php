<?php

use Slim\App;

return function (App $app) {
	$app->add(new Tuupola\Middleware\CorsMiddleware([
	    "origin" => ["*"],
	    "methods" => ["GET", "POST", "PUT", "PATCH", "DELETE"],
	    "headers.allow" => [],
	    "headers.expose" => [],
	    "credentials" => false,
	    "cache" => 0,
	]));
};
