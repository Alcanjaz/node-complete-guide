const mysql = require("mysql2"); //package to work with mysql

/* There are two ways to work with our SQL database

1. Set up one connection which we can use to run queries 
and we should always close the connection once we are done with the query

This is inneficient because we need to re-execute the code to create the connection
for every new query (and there will be a lot queries!).

2.Creating a so-called "connection pool" (this is a better way!), which allow us to run
multiple queries at the same time(remember that each query needs its own connection)
and when the query it's done the connection will be handed back to the pool and it's 
avaible again for a new query and the pool can then be finished when our application shuts down.
*/

const pool = mysql.createPool({
	host: "localhost",
	user: "root",
	database: "node_complete",
	password: "root",
});

module.exports = pool.promise();
