import * as Mongoose from 'mongoose';

function dbConnect() {
  Mongoose.connect(process.env.MONGO_URL);
}

function dbRegisterModels() {
  // TODO
}

export { dbConnect, dbRegisterModels }