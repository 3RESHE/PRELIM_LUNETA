<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');
$routes->get('/hashira', 'Hashira::hashira');
$routes->get('/uppermoons', 'Uppermoon::uppermoon');