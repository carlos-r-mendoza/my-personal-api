import * as mongoose from 'mongoose';
import { about } from '../schemas/about';

//var schema = new mongoose.Schema({ name: 'string', size: 'string' });
//var Tank = mongoose.model('Tank', schema);
// Tank.prototype.find()

function generate() {}

class BaseModel {
  // model;
  // constructor(modelName:string, schema:Object) {
  //   BaseModel['About'] = mongoose.model(modelName, new mongoose.Schema(schema)).prototype;
  // }
  
  static About = mongoose.model('modelName', new mongoose.Schema({}));
}

class About extends BaseModel.About {
  constructor() {
    super()
  }
} 