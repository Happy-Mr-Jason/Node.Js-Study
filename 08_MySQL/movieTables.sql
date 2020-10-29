SET SESSION FOREIGN_KEY_CHECKS=0;

/* Drop Tables */

DROP TABLE IF EXISTS tbl_reviews;
DROP TABLE IF EXISTS tbl_movies;




/* Create Tables */

CREATE TABLE tbl_movies
(
	mno int NOT NULL AUTO_INCREMENT,
	name varchar(100) NOT NULL,
	runtime int,
	releasedate date,
	director varchar(50),
	writer varchar(50),
	PRIMARY KEY (mno)
);


CREATE TABLE tbl_reviews
(
	rno int NOT NULL AUTO_INCREMENT,
	mno int NOT NULL,
	reviewer varchar(50),
	review varchar(300),
	PRIMARY KEY (rno)
);



/* Create Foreign Keys */

ALTER TABLE tbl_reviews
	ADD FOREIGN KEY (mno)
	REFERENCES tbl_movies (mno)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


/* Create Indexes */

CREATE INDEX idx_reviews ON tbl_reviews (mno DESC, rno ASC);