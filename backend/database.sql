SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS user;
CREATE TABLE user (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  lastname VARCHAR(80) NOT NULL,
  firstname VARCHAR(80) NOT NULL,
  mail_address VARCHAR(80) UNIQUE NOT NULL,
  password VARCHAR(100) NOT NULL,
  hashed_password VARCHAR(100) NOT NULL,
  age INT NOT NULL,
  orientation VARCHAR(40),
  orders INT NOT NULL DEFAULT 0,
  city VARCHAR(45) NOT NULL,
  role VARCHAR(10) NOT NULL DEFAULT 'user'
);

DROP TABLE IF EXISTS bikes;
CREATE TABLE bikes (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  model VARCHAR(60) NOT NULL,
  year INT NOT NULL,
  kilometers INT NOT NULL,
  bridle BOOLEAN NOT NULL,
  photo VARCHAR(255) NOT NULL,
  color VARCHAR(30) NOT NULL,
  brand_id INT NOT NULL,
  segment_id INT NOT NULL,
  CONSTRAINT brand_bike FOREIGN KEY (brand_id) REFERENCES brand(id),
  CONSTRAINT typeof_bike FOREIGN KEY (segment_id) REFERENCES segment(id)
);

DROP TABLE IF EXISTS brand;
CREATE TABLE brand (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL
);

DROP TABLE IF EXISTS segment;
CREATE TABLE segment (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL
);



INSERT INTO user (lastname, firstname, mail_address, password, hashed_password, age, orientation, orders, city, role)
VALUES
  ('Doe', 'John', 'john.doe@example.com', 'password123', 'hashedpassword123', 30, 'roadster', 0, 'New York', 'user'),
  ('Smith', 'Jane', 'jane.smith@example.com', 'password456', 'hashedpassword456', 25, 'sportive', 0, 'London', 'user'),
  ('Marco', 'Berger', 'admin@wildbikes.com', 'admin123', 'adminwb123', 25, 'sportive', 0, 'Lyon', 'admin');

INSERT INTO bikes (model, year, kilometers, bridle, photo, color, brand_id, segment_id)
VALUES
  ('Bandit 650', 2008, 34000, true, 'https://cache.motorsdb.com/resize/1600x1067/archives/2008/03/16/Suzuki_GSF_650_Bandit_2005_2006-30643.jpg?mtime=1205671704', 'blue', 3, 1);


INSERT INTO brand (name)
VALUES
  ('Yamaha'),('Honda'),('Suzuki'),('Kawasaki'),('Ducati'),('BMW'),('Triumph'),('Harley Davidson'),('Indian');

INSERT INTO segment (name)
VALUES
  ('roadster'),('sportive'),('trail'),('custom'),('scrambler');


SET FOREIGN_KEY_CHECKS = 1;