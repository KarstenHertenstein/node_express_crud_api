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
  },
  fullName: {
    type: String
  },
  username: {
    type: String
  },
  access_level: {
    type: Number
  }
});

const User = mongoose.model('User', schema);

export default User;
