import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password_hash: Sequelize.STRING,
        admin: Sequelize.BOOLEAN,
        manager: Sequelize.BOOLEAN,
        starting_date: Sequelize.DATE,
        sector: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

export default User;
