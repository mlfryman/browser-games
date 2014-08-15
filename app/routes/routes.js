'use strict';

var morgan         = require('morgan'),
    bodyParser     = require('body-parser'),
    methodOverride = require('express-method-override'),
    home           = require('../controllers/home'),
    games          = require('../controllers/games');

module.exports = function(app, express){
  app.use(morgan('dev'));
  app.use(express.static(__dirname + '/../static'));
  app.use(bodyParser.urlencoded({extended:true}));
  app.use(methodOverride());

  app.get('/', home.index);
  app.get('/games/colors', games.colors);
  app.get('/games/pacman', games.pacman);
  app.get('/games/painter', games.painter);

  console.log('Routes Loaded');
};

