# restaurants-app

This project provides a single-page web app built with Create React App along with a REST API provided by an Express server that relies on a PostgreSQL database.

## Set up the development environment

### Set up a database

From within the `psql` console, add the `uuid-ossp` module to the database you want to connect to:

```sql
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
```

Adapt the following configuration to the database and paste it into a `.env` file:

```
DATABASE_URL=postgres://restaurants_app_user:password@localhost/restaurants_app
```

### Set up the project development environment

Install dependencies: `yarn`.

Populate the database: `yarn populate-db`.

Launch the back-end dev server: `yarn start:watch`.

In another terminal, launch the front-end dev server: `cd client && yarn start`.

## Deploy to Heroku

This project is ready for deployment on Heroku (if the Heroku CLI is not yet installed on your computer, you may want to check out [Heroku's documentation](https://devcenter.heroku.com/articles/heroku-cli)).

Create a Heroku app:

```
heroku create <choose-a-name-for-your-app>
```

In Heroku's web interface, select your app and provision a PostgreSQL database with the Postgres add-on. You will then find the database URL in your app's 'Config Vars' under the 'Settings' tab.

Connect to the database using the `psql` console and the database URL, and add the `uuid-ossp` extension like you did in your development environment.

Deploy the project: `git push heroku master`.

Populate the database: `heroku run yarn populate-db`.
