-- Specify database to use
\c contacts;

-- Create tables
CREATE TABLE IF NOT EXISTS contacts (
 owner_email VARCHAR (256) NOT NULL,
 contact_email VARCHAR (256) NOT NULL
);

CREATE TABLE IF NOT EXISTS logins (
  email VARCHAR (256) PRIMARY KEY,
  password VARCHAR (256)
);

CREATE TABLE IF NOT EXISTS profiles (
 index SERIAL PRIMARY KEY,
 name VARCHAR (80) NOT NULL,
 email VARCHAR (256) NOT NULL,
 phone VARCHAR (10) NOT NULL
);

-- Create indexes
CREATE INDEX owner_email ON contacts (owner_email);
CREATE INDEX email ON profiles (email);
