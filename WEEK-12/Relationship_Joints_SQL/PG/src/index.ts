import { Client } from "pg";

const client = new Client({
  connectionString: "postgresql://postgres:vishnu@localhost/postgres",
});

async function createUsersTable() {
  await client.connect();
  const result = await client.query(`
            CREATE TABLE test_user (
                id SERIAL PRIMARY KEY,
                username VARCHAR(50) UNIQUE NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            );
        `);
  console.log(result);
}

/////////////////////////////////////////////////////////////////////////////////////////
/*InsertData*/
/////////////////////////////////////////////////////////////////////////////////////////

interface Data {
  username: string;
  email: string;
  password: string;
}

const InsertData = async (data: Data) => {
  try {
    await client.connect();

    const result = await client.query(
      `INSERT INTO test_user(username, email, password) VALUES ($1, $2, $3)`,
      [data.username, data.email, data.password],
    );

    console.log("Inserted successfully:", result.rowCount);
  } catch (err) {
    console.error("Error inserting data:", err);
  } finally {
    await client.end();
  }
};

/////////////////////////////////////////////////////////////////////////////////////////
/*ReadData*/
/////////////////////////////////////////////////////////////////////////////////////////

const ReadData = async (username: string) => {
  try {
    await client.connect();

    const result = await client.query(
      `SELECT * FROM test_user WHERE username = $1`,
      [username],
    );

    console.log("User found:", result.rows);
  } catch (err) {
    console.error("Error reading data:", err);
  } finally {
    await client.end();
  }
};

/////////////////////////////////////////////////////////////////////////////////////////
/*UpdateData*/
/////////////////////////////////////////////////////////////////////////////////////////

const UpdateData = async (username: string, newData: Partial<Data>) => {
  try {
    await client.connect();

    const result = await client.query(
      `UPDATE test_user SET email = $1, password = $2 WHERE username = $3`,
      [newData.email, newData.password, username],
    );

    console.log("Updated rows:", result.rowCount);
  } catch (err) {
    console.error("Error updating data:", err);
  } finally {
    await client.end();
  }
};

/////////////////////////////////////////////////////////////////////////////////////////
/*DeleteData*/
/////////////////////////////////////////////////////////////////////////////////////////

const DeleteData = async (username: string) => {
  try {
    await client.connect();

    const result = await client.query(
      `DELETE FROM test_user WHERE username = $1`,
      [username],
    );

    console.log("Deleted rows:", result.rowCount);
  } catch (err) {
    console.error("Error deleting data:", err);
  } finally {
    await client.end();
  }
};

// createUsersTable();

//   InsertData({
//     username: "Arsha vardhan",
//     email: "mandalaarshavardhan07@gmail.com",
//     password: "arsha@2005",
//   });

// ReadData("Arsha vardhan");

// UpdateData("Arsha vardhan", {
//   email: "updatedemail@gmail.com",
//   password: "newpassword123",
// });

// DeleteData("Arsha vardhan");
