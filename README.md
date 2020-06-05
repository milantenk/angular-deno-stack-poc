# Deno - Angular Stack Proof of Concept
This is a Proof of Concept (PoC) for using Angular and Deno. It can be used for playing around with this stack. 

Detailed descriptions about creating this project can be found here:
* [Create the PoC environment](https://dev.to/tenkmilan/deno-angular-stack-proof-of-concept-1df2)
* [Set up the development tools](https://dev.to/milantenk/deno-angular-development-environment-3ef1)

The folders of this project contain followings:
* A Deno server in the `server` folder
* An Angular application in `client-app` folder
* A Dto in `common` folder

The PoC covers following functionalities:
* The Deno server serves the Angular app
* The Angular app calls an endpoint of the Deno server
* Live reloading feature is availabe on Angular side with fetched data from Deno server
* Breakpoints can be used in the Angular code with VS Code
* Live reloading can be used for Deno with `denon`
* Breakpoints can be used in the Deno server code with VS Code

## Getting started
Prerequisites
* Node.js LTS is installed
* Deno is installed

It is recommended to open a Visual Studio Code window from the `server` folder and a separate from the `client-app` folder and develop the two codebase parallel in two VS Code windows.

### Serving the built Angular app with Deno
To serve the built Angular app do following steps:
* `cd client-app`
* `npm install`
* `npm run build --prod`
* `cd ..`
* `cd server`
* `deno run --allow-net --allow-read .\server.ts`

### Using the live reloading on Deno server
* Install `denon` on the local computer
```powershell
deno install --allow-read --allow-run --allow-write -f --unstable https://deno.land/x/denon/denon.ts
```
* Start the server with `denon` from the `server` folder
```powershell
denon run --allow-net --allow-read .\server.ts
``` 

### Using the live reloading of Angular
* Start the Angular application from the `client-app` folder using
```powershell
npm run start
``` 
* Make sure that the server is running, the Angular app fetches data from there

### Using the breakpoints in the Angular app
* Open VS Code in the `client-app` folder
* Start the application
```powershell
npm run start
``` 
* Put a breakpoint where it will be hit while the bootstrapping of the application
* Press F5 in VS Code

### Using the breakpoints in the Deno code
* Open VS Code in the `server` folder
* Start the Deno server
```powershell
denon run --allow-net --allow-read .\server.ts
``` 
* Put a breakpoint in the code
* Press F5 in VS Code
