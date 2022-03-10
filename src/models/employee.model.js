import { Schema, model } from 'mongoose';

const empSchema = new Schema(
  {
    e_name: {
      type: String
    },
    department: {
      type: String
    },
    role: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

export default model('Employee', empSchema);