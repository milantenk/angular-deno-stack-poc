# Deno - Angular Stack Proof of Concept
This is a proof of concept for using Angular and Deno. It can be used for playing around with this stack.

The folders contain followings:
* A Deno server in the `server` folder
* An Angular application in `client-app` folder
* A Dto in `common` folder

The PoC covers following functionalities:
* The Deno server serves the Angular app
* The Angular app calls an endpoint of the Deno server

## Getting started
Prerequisites
* Node.js LTS is installed
* Deno is installed

To get started do following steps in terminal:
* `cd client-app`
* `npm install`
* `npm run build --prod`
* `cd ..`
* `cd server`
* `deno run --allow-net --allow-read .\server.ts`