import { MongoClient } from 'mongodb';
import * as dotenv from "dotenv";
dotenv.config();
const { dbName, dbUri } = process.env;

const url: string = dbUri || 'mongodb://localhost:27017';

const client = new MongoClient(url)
class connection{
  
  constructor(){}

  async insetOne() {
  }

}

export default connection