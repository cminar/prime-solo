
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

-- Creates all parts tables

CREATE TABLE "gpu" (
    "id" SERIAL PRIMARY KEY,
    "gpu_title" VARCHAR,
    "gpu_description" VARCHAR,
    "gpu_price" DECIMAL,
    "gpu_image" VARCHAR
);

CREATE TABLE "cpu" (
    "id" SERIAL PRIMARY KEY,
    "cpu_title" VARCHAR,
    "cpu_description" VARCHAR,
    "cpu_price" DECIMAL,
    "cpu_image" VARCHAR
);

CREATE TABLE "psu" (
    "id" SERIAL PRIMARY KEY,
    "psu_title" VARCHAR,
    "psu_description" VARCHAR,
    "psu_price" DECIMAL,
    "psu_image" VARCHAR
);

CREATE TABLE "mobo" (
    "id" SERIAL PRIMARY KEY,
    "mobo_title" VARCHAR,
    "mobo_description" VARCHAR,
    "mobo_price" DECIMAL,
    "mobo_image" VARCHAR
);

CREATE TABLE "ram" (
    "id" SERIAL PRIMARY KEY,
    "ram_title" VARCHAR,
    "ram_description" VARCHAR,
    "ram_price" DECIMAL,
    "ram_image" VARCHAR
);

CREATE TABLE "builds" (
	"id" SERIAL PRIMARY KEY,
	"title" VARCHAR (80),
	"image" VARCHAR,
	"cpu_id" INT REFERENCES "cpu",
	"gpu_id" INT REFERENCES "gpu",
	"psu_id" INT REFERENCES "psu",
	"ram_id" INT REFERENCES "ram",
	"mobo_id" INT REFERENCES "mobo",
	
	"description" VARCHAR (120),
	"user_id" INT REFERENCES "user",
	"build_id" SERIAL
);

-- Creates the inspiration table

CREATE TABLE "inspiration" (
	"image" VARCHAR
);