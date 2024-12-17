CREATE DATABASE cafereservation ; 
USE cafereservation;

CREATE TABLE CATEGORY (
    id INT AUTO_INCREMENT PRIMARY KEY ,
    title VARCHAR(55)NULL  ,
    description VARCHAR(255) NULL  ,
    image LONGTEXT NULL  ,
);