<?php
return [
    'settings' => [
        'displayErrorDetails' => true, // set to false in production
        'addContentLengthHeader' => false, // Allow the web server to send the content-length header

        // Renderer settings
        'renderer' => [
            'template_path' => __DIR__ . '/../templates/',
        ],

        // Monolog settings
        'logger' => [
            'name' => 'slim-app',
            'path' => isset($_ENV['docker']) ? 'php://stdout' : __DIR__ . '/../logs/app.log',
            'level' => \Monolog\Logger::DEBUG,
        ],

        //Database
        //TODO(1) Definir os valores para a conexão com o BD
        'db' => [
            'driver' => 'mysql',
            'host'   => 'localhost',
            'dbname' => 'lista_espera',
            'user'   => 'root',
            'pass'   => ''
        ],
    ],
];
