import { Database, Model, DataTypes } from "../core/deps.ts";

const port = 5432;

const options = {
  database: 'hwheels',
  host: '127.0.0.1',
  username: 'hwheels',
  password: 'zb12345_',
  port,
}
const usersDB = new Database('postgres', options);

export class Users extends Model {
  static table = 'users';
  static timestamps = true;

  static fields = {
    id: { primaryKey: true, autoIncrement: true },
    userId: DataTypes.STRING,
    password: DataTypes.STRING,
    jwt: DataTypes.STRING,
    name: DataTypes.STRING,
  };
}

usersDB.link([Users]);

// await Users.create({
//   userId: 12345,
//   password: 12345,
//   jwt: 12345,
//   name: '12345'
// })
await usersDB.sync({drop: true});

const user = await Users.get();
console.log(user);