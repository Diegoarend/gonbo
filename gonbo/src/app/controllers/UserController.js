import User from '../models/User';

class UserController {
  async store(req, res) {
    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }
    const { id, name, email, admin, manager } = await User.create(req.body);
    return res.json({
      id,
      name,
      email,
      admin,
      manager,
    });
  }

  async update(req, res) {
    const { email, oldPassword } = req.body;
    const user = await User.findByPk(req.userId);

    if (email !== user.email) {
      const userExists = await User.findOne({
        where: { email },
      });

      if (userExists) {
        return res.status(400).json({ error: 'User already exists' });
      }
    }
    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Password does not match! ' });
    }

    const {
      id,
      name,
      admin,
      manager,
      starting_date,
      sector,
    } = await user.update(req.body);

    return res.json({
      id,
      email,
      name,
      admin,
      manager,
      starting_date,
      sector,
    });
  }
}

export default new UserController();
