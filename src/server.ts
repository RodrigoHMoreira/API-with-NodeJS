import { App } from "./app";

const port = 3003;

new App().server.listen(port, () => {
  console.log(`Server listen on port ${port}`);
});
