# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
zip_code        | string    | not null
first_name      | string    | not null
last_name       | string    | not null

## tasks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null, indexed
description | text      | not null
location    | text      | not null
taskee_id   | integer   | not null, foreign key (references users), indexed
tasker_id   | integer   | not null, foreign key (references taskers), indexed

## reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
taskee_id   | integer   | not null, foreign key (references users), indexed
task_id     | integer   | not null, foreign key (references tasks), indexed
tasker_id   | integer   | not null, foreign key (references taskers), indexed
rating      | integer   | not null, indexed

## taskers
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
email       | string    | not null, indexed, unique
zip_code    | string    | not null
rating      | integer   |
