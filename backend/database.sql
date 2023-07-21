SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  lastname VARCHAR(80) NOT NULL,
  firstname VARCHAR(80) NOT NULL,
  mail_address VARCHAR(80) UNIQUE NOT NULL,
  hashed_password VARCHAR(150) NOT NULL,
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
  image_url VARCHAR(255) NULL,
  color VARCHAR(30) NULL,
  brand_id INT NOT NULL,
  segment_id INT NOT NULL,
  price INT NOT NULL,
  stock BOOLEAN NOT NULL,
  CONSTRAINT brand_bike FOREIGN KEY (brand_id) REFERENCES brand(id),
  CONSTRAINT segment_bike FOREIGN KEY (segment_id) REFERENCES segment(id)
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



INSERT INTO user (lastname, firstname, mail_address, hashed_password, age, orientation, orders, city, role)
VALUES
  ('Doe', 'John', 'john.doe@example.com',  'hashedpassword123', 30, 'roadster', 0, 'New York', 'user'),
  ('Smith', 'Jane', 'jane.smith@example.com', 'hashedpassword456', 25, 'sportive', 0, 'London', 'user'),
  ('Marco', 'Berger', 'admin@wildbikes.com', '$argon2id$v=19$m=65536,t=5,p=1$d/j6W93qKyXQpakCSGhi/A$u8A52LYvxgQI4IF5ODrqHClOW8qkS+dt/mp6beug/6Y', 25, 'sportive', 0, 'Lyon', 'admin');

-- ('Yamaha'),('Honda'),('Suzuki'),('Kawasaki'),('Ducati'),('BMW'),('Triumph'),('Harley Davidson'),('Indian');
INSERT INTO bikes (model, year, kilometers, bridle, image_url, color, brand_id, segment_id, price, stock)
VALUES
  ('ER6-N', 2012, 41658, 0, 'https://images.unsplash.com/photo-1590257430942-7c609ed74caa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', 'vert', 4, 1, 4150, 1),
  ('Ninja 650', 2017, 12984, 0, 'https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', 'vert', 4, 2, 5699, 1),
  ('Bobber Custom', 2016, 44273, 0, 'https://images.unsplash.com/photo-1558981285-6f0c94958bb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', 'noir', 8, 4, 19680, 1),
  ('Scout Bobber', 2019, 25174, 0, 'https://images.unsplash.com/photo-1689257693246-6fea2884c4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80', 'bleu', 9, 4, 16890, 1),
  ('CMX 500 Rebel', 2017, 5400, 1, 'https://images.unsplash.com/photo-1553816077-aa7be0d1153b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80', 'blanc', 2, 4, 6640, 1),
  ('CBR 500R', 2015, 46089, 1, 'https://images.unsplash.com/photo-1606148556932-8ed46a981ff0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', 'rouge', 2, 2, 5900, 1),
  ('Panigale 899', 2014, 28974, 0, 'https://images.unsplash.com/photo-1547054728-fcb8828cc832?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', 'blanc', 5, 2, 13599, 1),
  ('GSX-R 1000', 2014, 39580, 1, 'https://images.unsplash.com/photo-1611873189125-324514ebd94e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', 'blanc', 3, 2, 8200, 1),
  ('Monster 721', 2012, 36580, 0, 'https://images.unsplash.com/photo-1597377298580-ba06c64d0835?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', 'rouge', 5, 1, 8799, 1),
  ('S1000 RR', 2019, 11200, 0, 'https://images.unsplash.com/photo-1635073943212-f34dfbfcc3b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', 'blanc', 6, 2, 21990, 1),
  ('Ninja 650', 2016, 23146, 0, 'https://images.unsplash.com/photo-1580341289255-5b47c98a59dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', 'rouge', 4, 2, 6100, 1),
  ('R6', 2018, 30259, 0, 'https://images.unsplash.com/photo-1640418070457-88f35a266e2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', 'blanc', 1, 2, 11450, 1),  
  ('XSR 700', 2023, 2560, 1, 'https://images.unsplash.com/photo-1471466054146-e71bcc0d2bb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', 'blanc', 1, 5, 7480, 1),
  ('CBR 1000RR', 2020, 7891, 0, 'https://images.caradisiac.com/images/9/5/3/3/179533/S8-nouveaute-2020-honda-cbr-1000-rr-r-4r-dans-v4-609281.jpg', 'rouge', 2, 2, 23890, 1),
  ('MT-07', 2021, 4980, 1, 'https://images.unsplash.com/photo-1658327915180-99dcde188425?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80', 'gris', 1, 1, 8500, 1),
  ('R6', 2021, 17950, 0, 'https://images.unsplash.com/photo-1547549082-6bc09f2049ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80', 'gris', 1, 2, 10780, 1),
  ('Supersport', 2016, 25850, 0, 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', 'rouge', 5, 2, 19140, 1),
  ('Tiger 900', 2021, 8854, 0, 'https://images.unsplash.com/photo-1589288415563-eaa105f109f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', 'gris', 7, 3, 14899, 1),
  ('Sportster', 2022, 6450, 0, 'https://images.unsplash.com/photo-1558981033-0f0309284409?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', 'noir', 8, 4, 22890, 1),
  ('Z 900', 2021, 9847, 0, 'https://images.unsplash.com/photo-1611241443322-b5524914fe20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', 'noir', 4, 1, 12390, 1),
  ('Scrambler', 2020, 13741, 0, 'https://images.unsplash.com/photo-1608461688104-304d5fe60da1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', 'orange', 5, 5, 12850, 1),
  ('Diavel', 2023, 1200, 0, 'https://moto-station.com/wp-content/uploads/2022/10/28/Ducati-Diavel-V4-MY23-homepage-hero-1600x1000.jpg.jpg', 'rouge', 5, 1, 22660, 1),  
  ('ZX-6R', 2020, 12936, 0, 'https://images.unsplash.com/photo-1580310614729-ccd69652491d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', 'verte', 4, 2, 14950, 1),  
  ('CBR 1000RR', 2021, 7891, 0, 'https://images.caradisiac.com/images/9/5/3/3/179533/S8-nouveaute-2020-honda-cbr-1000-rr-r-4r-dans-v4-609281.jpg', 'rouge', 2, 2, 23890, 1),
  ('Scout Rogue', 2019, 11258, 0, 'https://moto-station.com/wp-content/uploads/2022/02/03/2022-imc-rogue-thunder-black-smoke-lifestyle-0489.jpg', 'noir', 9, 4, 24585, 1),  
  ('GSX 8S', 2023, 2450, 1, 'https://ultimatemotorcycling.com/wp-content/uploads/2023/05/2023-suzuki-gsx-8s-review-10.webp', 'blanc', 3, 1, 9890, 1),  
  ('Bonneville', 2017, 14560, 0, 'https://images.caradisiac.com/images/5/1/5/6/195156/S0-retouches-maquillage-pour-cette-triumph-bonneville-t120-709137.jpg', 'gris', 7, 1, 10980, 1);


INSERT INTO brand (name)
VALUES
  ('Yamaha'),('Honda'),('Suzuki'),('Kawasaki'),('Ducati'),('BMW'),('Triumph'),('Harley Davidson'),('Indian');

INSERT INTO segment (name)
VALUES
  ('roadster'),('sportive'),('trail'),('custom'),('scrambler');


SET FOREIGN_KEY_CHECKS = 1;