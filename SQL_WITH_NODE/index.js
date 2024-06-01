const { faker } = require('@faker-js/faker');
const res = require('express/lib/response');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: '123456',
  });
try{
  connection.query("SHOW TABLES", (err,result) => {
    if(err) throw err;
    console.log(result);
  })
} catch(err){
    console.log(err);
}

connection.end();
let getRandomUser = () => {
    return {
      id: faker.string.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    //   avatar: faker.image.avatar(),
    //   birthdate: faker.date.birthdate(),
    //   registeredAt: faker.date.past(),
    };
  }
