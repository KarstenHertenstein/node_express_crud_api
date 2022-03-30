import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  email: {
    type: String
  },
  password: {
    type: String
  },
  userid: {
    type: Number
  }
});

const User = mongoose.model('User', schema);

export default User;
