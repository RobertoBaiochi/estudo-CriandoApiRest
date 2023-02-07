import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Roberto',
      sobrenome: 'Baiochi',
      email: 'roberto@email.com',
      idade: 35,
      peso: 135,
      altura: 1.6,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
