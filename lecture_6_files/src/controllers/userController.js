const { updateAvatar } = require('../services/userService');

const updateUserAvatarController = async (req, res) => {
  const id = req.user._id;
  
  const avatar = req.user.avatarURL;
  console.log({ avatar })
  
  console.log({FILE: req.file})

  const avatarURL = await updateAvatar(id, req.file, avatar);
  res.json({ avatarURL });
};

module.exports = {
  updateUserAvatarController,
};