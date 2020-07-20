import User from '../models/User';
import File from '../models/File';

class ManagerController {
  async index(req, res) {
    const managers = await User.findAll({
      where: { manager: true },
      attributes: ['id', 'name', 'email', 'avatar_id'],
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['name', 'path', 'url'],
        },
      ],
    });

    return res.json(managers);
  }
}

export default new ManagerController();
