# BreweryBrawl

## Untappd.com Brewery API app

This is a web application using the Untappd API and connecting various Google APIs.
The current iteration of Master is available to demo here: https://brewery-brawl.herokuapp.com/

## Stack

#### Frameworks & Modules

-   express
-   ejs
-   node-sass
-   webpack
-   babel

#### Testing & Style Enforcement

-   cucumber io
-   selenium-webdriver
-   prettier

#### APIs

-   Untappd
-   Google Maps

## Setup Instructions

Make sure to copy the `.env-example` file to a new file `.env`
The default port is set to `PORT=3333` but you can use whatever port you want.
Ask Brendan Rielly for the Untappd client id and client secret to connect to the API

Run set up: `npm install`

Run webpack bundler: `npm run build`

Run webpack watcher: `npm run watch`

Run the server: `npm start`

Available at: http://localhost:3333/

## Code Style

Styling is handled with Prettier. Find the integration with your IDE here: https://prettier.io/docs/en/editors.html
