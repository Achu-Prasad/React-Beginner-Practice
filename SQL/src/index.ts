import { Client } from "pg";

const client = new Client({
  connectionString:
    "postgresql://achuachu61973:3nVQAJGjISl0@ep-solitary-mud-50253104.ap-southeast-1.aws.neon.tech/Learning?sslmode=require",
});

async function createUsersTable() {
  await client.connect();
  const result = await client.query(` 
    CREATE TABLE users(
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(50) NOT NULL,
        password VARCHAR(50) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
    `);
 console.log(result)
}
createUsersTable();
