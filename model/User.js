const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstname: {
    type: String,
    trim: true,
    //required: true
  },
  lastname: {
    type: String,
    trim: true,
    // required: true
  },
  username: {
    type: String,
    trim: true,
    unique: true,
    required: true,
  },
  passwordHash: {
    type: String,
    trim: true,
    required: true,
    validate: [
      function (input) {
        return input.length >= 6;
      },
    ],
  },
  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/],
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  userCreated: {
    type: Date,
    default: Date.now,
  },
  doctors: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Doctor',
    },
  ],
  clinics: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Clinic',
    },
  ],
  healthLogs: [
    {
      type: Schema.Types.ObjectId,
      ref: 'HealthLog',
    },
  ],
  prescriptions: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Prescription',
    },
  ],
  attachments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Attachment',
    },
  ],
  symptoms: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Symptoms',
    },
  ],
});

UserSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

UserSchema.set('toJSON', {
  virtuals: true,
});

// UserSchema.pre('save', async function(next){
//   const user = this
//   const hash = await bcrypt.hash(this.password, 10)
//   this.password = hash
//   next()
// })

// UserSchema.methods.isValidPassword = async function(password){
//   const user = this
//   const compare = await bcrypt.compare(password, user.password)
//   return compare
// }

const User = mongoose.model('User', UserSchema);
module.exports = User;
