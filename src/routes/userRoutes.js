import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deveria existir
// router.get('/', userController.index); // todos os usuários
// router.get('/:id', userController.show); // lista um usuário um perfil por exemplo

router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

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
