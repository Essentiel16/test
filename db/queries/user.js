module.exports = {
  createUserTable: `
    CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY,
    username VARCHAR(50)  NOT NULL,
    email VARCHAR UNIQUE NOT NULL,
    password VARCHAR UNIQUE NOT NULL,
    created_at TIMESTAMPZ default now(),
    updated_at TIMESTAMPTZ default now()
  );
    `,

  insertUser: `
    INSERT into users (
        id,
        username,
        email,
        password,
    ) values ($1, $2, $3, $4)
    RETURNING id, username, email, password, is_owner, created_at;
    `,

  fetchUserById: 'SELECT * FROM users WHERE id = $1',
  fetchUserByUsername: 'SELECT * FROM users WHERE username = $1',

};
