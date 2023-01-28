const seedUsers = require("./user-seeds");

const sequelize = require("../config/connection").default;

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  process.exit(0);
};

seedAll();
