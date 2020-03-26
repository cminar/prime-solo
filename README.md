# Buildy

This App is designed to help someone with a need to organize computer builds.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
Node.js
```
Postgresql
```
Nodemon
```

### Installing

A step by step series of examples that tell you how to get a development env running


```
npm install
```

npm run server

```
npm run client
```

#### SQL Database Setup

```sql
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

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

CREATE TABLE "products" (
	"id" SERIAL PRIMARY KEY,
	"type" VARCHAR (80),
	"name" VARCHAR (80),
	"price" DECIMAL,
	"description" VARCHAR (255),
	"image" BYTEA
);
SELECT * FROM "builds" WHERE "user_id" = 2;

CREATE TABLE "inspiration" (
	"image" VARCHAR
);
```

## Deployment

Buildy is deployed to [Heroku](https://prime-solo.herokuapp.com/#/home)-URL

## Built With

* [NodeJS](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Postgresql](https://maven.apache.org/) - Database
* [Semantic UI](https://rometools.github.io/rome/) - Used to style
* [Heroku](https://rometools.github.io/rome/) - Used to Deploy



## Authors

* **Colin Minar** - *Development and deployment* - (https://github.com/cminar)

## Acknowledgments

* Casie, Dev and all the instructors at Prime Digital Academy
* Cohort Chien