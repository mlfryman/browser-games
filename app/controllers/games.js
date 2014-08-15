'use strict';

exports.index = function(req, res){
  res.render('home/index');
};

exports.colors = function(req, res){
  res.render('games/colors');
};

exports.pacman = function(req, res){
  res.render('games/pacman');
};

exports.painter = function(req, res){
  res.render('games/painter');
};
