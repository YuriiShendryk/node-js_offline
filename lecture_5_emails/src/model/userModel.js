const mongoose = require('mongoose');
const { Schema } = mongoose;

const bcrypt = require('bcrypt');

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      min: 2,
      required: true,
    },
    lastName: {
      type: String,
      min: 2,
      required: true,
    },
    email: {
      type: String,
      require: true,
      uniq: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    confirmed: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

userSchema.pre('save', async function () {
  if (this.$isNew || this.isModified) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
});

const User = mongoose.model('User', userSchema);

module.exports = {
  User,
};
