import {
  EncryptPassword,
  verifyPassword,
} from "../../utils/PasswordManager.js";
import { allModels } from "../../models/index.js";

export const register = async (req, res) => {
  const creds = req.body;

  const exists = await allModels.UserModels.UserCreds.findOne({
    username: creds.username,
  });
  if (exists)
    return res.status(400).json({
      message: `User already exists with username: ${creds.username}`,
    });
  const hashedPassword = EncryptPassword(creds.password);

  const newUser = await allModels.UserModels.UserCreds.create({
    ...creds,
    password: hashedPassword,
    passwords: [{ password: hashedPassword }],
  });
  res.status(201).json({
    message: "User registered successfully",
    userId: newUser._id,
    userName: newUser.username,
    Name: newUser.name,
  });
};

export const login = async (req, res) => {
  const creds = req.body;

  const exists = await allModels.UserModels.UserCreds.findOne({
    username: creds.username,
  });
  if (!exists)
    return res.status(400).json({
      message: `User not exists with username: ${creds.username}`,
    });
  if (!verifyPassword(creds.password, exists.password)) {
    return res.status(400).json({
      message: `Password Incorrect!`,
    });
  }
  res.status(201).json({
    message: "User Loggedin successfully",
    userId: exists._id,
    userName: exists.username,
    Name: exists.name,
  });
};

export const getUsers = async (req, res) => {
  const users = await allModels.UserModels.UserCreds.find();
  res.status(200).json({
    message: "All Users",
    users,
  });
};

//Password Change
export const passwordChange = async (req, res) => {
  const { username, oldpassword, newpassword, cnfpassword } = req.body;
  const exists = await allModels.UserModels.UserCreds.findOne({
    username: username,
  });

  if (!exists)
    return res.status(404).json({
      message: `User not exists with username: ${username}`,
    });

  if (!verifyPassword(oldpassword, exists.password))
    return res.status(403).json({ message: "Inccorect Old password" });

  if (oldpassword === newpassword)
    return res
      .status(403)
      .json({ message: "Old and New Password Should not be same" });

  if (newpassword !== cnfpassword)
    return res.status(403).json({ message: "New Password mismatch" });

  const pwdUsed = exists.passwords.some((pwd) =>
    verifyPassword(newpassword, pwd.password),
  );
  if (pwdUsed)
    return res
      .status(400)
      .json({ message: "You cannot reuse previous passwords" });

  if (exists.passwords.length > 7) exists.passwords.shift();

  const newHashPwd = EncryptPassword(newpassword);
  exists.passwords.push({ password: newHashPwd });
  exists.password = newHashPwd;
  await exists.save();
  return res
    .status(200)
    .json({ message: `User password changed successfully` });
};
