const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_complete', 'root', 'root',{
    dialect: 'mysql', 
    host: 'localhost'
});

module.exports = sequelize;


/*Now, we will install a new package that allow us to do
better SQL operations: Sequelize.

Sequelize uses mysql2 and do all SQL operations without write any SQL syntax
*/