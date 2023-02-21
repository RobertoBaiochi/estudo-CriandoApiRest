"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);

var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

// Não deveria existir
// router.get('/', userController.index); // todos os usuários
// router.get('/:id', userController.show); // lista um usuário um perfil por exemplo

router.post('/', _loginRequired2.default, _UserController2.default.store);
router.put('/', _loginRequired2.default, _UserController2.default.update);
router.delete('/', _loginRequired2.default, _UserController2.default.delete);

exports. default = router;

/*
.index ~> lista todos os usuários -> GET
.store/.create ~> cria um novo usuário -> POST
.delete ~> apaga um usuário -> DELETE
.show ~> mostra um usuário -> GET
.update ~> atualiza um usuário -> PATCH ou PUT

PATCH ~> quando atualizamos apenas um valor
PUT ~> quando atualizamos um objeto inteiro

Geralmente usamos um método por controller,
caso seja necessário mais de 1 no seu controller
é melhor criar um novo controller
*/
