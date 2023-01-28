const { User } = require("../models");

const userData = [
  {
    username: "Kingsman",
    password: "297117SET",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;

const router = require("express").Router();
