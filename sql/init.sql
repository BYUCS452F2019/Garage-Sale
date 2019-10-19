-- User(UserID, Password, Name, Email, Phone)
-- Items(ItemID, Price, Name, Description, DateAdded, UserID, AreaCode, Sold, SellerIDBlob)
--  Foreign Key: UserID references User
--  Foreign Key: SellerIDBlob references User
-- SoldItems(ItemID, DateSold, SellerID, BuyerID)
--  Foreign Key: ItemID references Items
--  Foreign Key: SellerID references User
--  Foreign Key: BuyerID references User

-- Specify database to use
\c users;

-- Create tables
CREATE TABLE IF NOT EXISTS users (
 user_id VARCHAR (256) PRIMARY KEY NOT NULL,
 password VARCHAR (256) NOT NULL,
 name VARCHAR (256) NOT NULL,
 email VARCHAR (256) NOT NULL,
 phone_num VARCHAR (256) NOT NULL,
 id_photo BYTEA NOT NULL,
 validated BOOLEAN NOT NULL
);

CREATE TABLE IF NOT EXISTS items (
  item_id VARCHAR (256) PRIMARY KEY NOT NULL,
  price VARCHAR (256) NOT NULL,
  item_name VARCHAR (256) NOT NULL,
  item_descr VARCHAR (256) NOT NULL,
  date_added VARCHAR (256) NOT NULL,
  user_id VARCHAR (256) NOT NULL,
  area_code VARCHAR (256) NOT NULL,
  sold VARCHAR (256) NOT NULL,
  seller_ids VARCHAR (256) NOT NULL
);

CREATE TABLE IF NOT EXISTS sold_items (
 item_id VARCHAR (256) PRIMARY KEY NOT NULL,
 date_sold VARCHAR (256) NOT NULL,
 seller_id VARCHAR (256) NOT NULL,
 buyer_id VARCHAR (256) NOT NULL
);

-- Create indexes
CREATE INDEX user_id ON users (user_id);
CREATE INDEX item_user_id ON items (user_id);
CREATE INDEX item_id ON items (item_id);
CREATE INDEX sold_item_id ON sold_items (item_id);

-- ALTER TABLE users
-- ADD IF NOT EXISTS phone_num VARCHAR (256) NOT NULL,
-- ADD IF NOT EXISTS id_photo BYTEA NOT NULL,
-- ADD IF NOT EXISTS validated BOOLEAN NOT NULL