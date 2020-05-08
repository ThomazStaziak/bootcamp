import Sequelize from 'sequelize';

import User from '../app/models/User';
import File from '../app/models/File';

import databaseConfig from '../config/database';

const models = [User, File];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    const newModels = models.map((model) => model.init(this.connection));
    console.log(newModels);
    // newModels.map(
    //   (model) => model.associate && model.associate(this.connection.models)
    // );
  }
}

export default new Database();
