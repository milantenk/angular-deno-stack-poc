import { Application, send, Router } from "https://deno.land/x/oak/mod.ts";
import { MessageDto } from "./../common/message-dto.ts";

const app = new Application();
const router = new Router();

router
  .get("/api/message", (ctx) => {
    const message: MessageDto = {message: "Hello from API!", timeStamp: new Date().toTimeString()}
    ctx.response.body = message;
  });

app.use(router.routes());
app.use(router.allowedMethods());
app.use(async (context) => {
  await send(context, context.request.url.pathname, {
    root: `${Deno.cwd()}/../client-app/dist/angular-deno-poc`,
    index: "index.html",
  });
});

console.log("Live reloading works!");

app.listen({ port: 8080 });
console.log(`Listening on localhost:${8080}`);