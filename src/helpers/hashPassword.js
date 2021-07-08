import bcrypt from "bcryptjs";

export function hashPassword(plainPassword) {
  return bcrypt.hashSync(plainPassword, 8);
}

export function checkPassword(plainPassword, encryptedPassword) {
  return bcrypt.compareSync(plainPassword, encryptedPassword);
}
