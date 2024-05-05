const path = require('path');
const fs = require('fs/promises');


const { finalAvatarsFolder } = require('../helpers/constants');
const { User } = require('../model/userModel');


const saveUserAvatar = async (file) => {
  const pathName = file.path;
  const newAvatar = file.originalname;
  try {
    await fs.rename(pathName, path.join(`${finalAvatarsFolder}`, newAvatar));
  } catch (error) {
    await fs.unlink(pathName);
    throw error;
  }
  return path.join(process.env.AVATARS_FOLDER, newAvatar).replace('\\', '/');
};


const updateAvatar = async (userId, file, avatar) => {
  const avatarURL = await saveUserAvatar(file, avatar);
  await User.findByIdAndUpdate(userId, { avatarURL }, { new: true });
  return avatarURL;
};


module.exports = {
  saveUserAvatar,
  updateAvatar
};