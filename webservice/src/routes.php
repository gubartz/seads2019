<?php

use Slim\App;
use Slim\Http\Request;
use Slim\Http\Response;

return function (App $app) {
	$container = $app->getContainer();

	//TODO(2) Definir uma rota para recuperar a lista de espera
	$app->get('/tarefas', function (Request $request, Response $response, array $args) use ($container) {

		$db = $this->db;

		$sth = $db->prepare('SELECT * FROM espera');
		$sth->execute();

		$dados = $sth->fetchAll();

		return $response->withJson($dados);

	});

	//TODO(3) Definir uma rota para inserir um item na lista de esperas

	//TODO(4) Definir uma rota para remover um item da lista de esperas

};
