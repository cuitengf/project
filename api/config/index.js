module.exports = {
  port: 3000,
  dbConfig: {
    user: "root",
    password: "root",
    database: "book",
    host: "127.0.0.1"
  },
  orm: {
    name: 'test',
    modelPath: require('path').join(__dirname, '../models'),
    db: 'book',
    username: 'root',
    password: 'root',
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    pool: {
      maxConnections: 10,
      minConnections: 0,
      maxIdleTime: 30000
    }
  }
}
