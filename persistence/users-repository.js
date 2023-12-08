import { Sequelize } from "sequelize";
import { User } from "../models/User.js";
import { Role } from "../models/Role.js";

export async function getUser(username = "", email = "") {
  return await User.findOne({
    where: Sequelize.or(
      { username: username },
      { email: email }
    )
  });
}

export async function createUser(username, email, passwordHash, name) {
  return await User.create({
    username: username,
    email: email,
    password: passwordHash,
    name: name,
    role_id: 1, //regular user
  })
}

export async function checkIfIsAdmin(role_id) {
  const adminId = await Role.findOne({ where: { title: 'admin' } })
  const isAdmin = role_id === adminId.dataValues.id;
  return isAdmin;
}

export async function getRole(id) {
  return await Role.findOne({ where: { id }});
}
