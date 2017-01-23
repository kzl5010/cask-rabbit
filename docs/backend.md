# Backend

FastRabbit is built on Ruby on Rails and deploys on Heroku. The function of the
backend is to provide RESTful APIs and return JSON data when queried (using the jbuilder gem).

## Heroku

NewRelic application performance management is a Heroku add-on that monitors server performance and as a byproduct prevents the 
site from sleeping.

## Database

PostgreSQL RDBMS is the database for the website since it is hosted on Heroku.

## Dependencies

Other dependencies: 

- Cloudinary is used for image hosting and in the future uploading. 
- BCrypt for password-salting and hashing for a secure authentication system
