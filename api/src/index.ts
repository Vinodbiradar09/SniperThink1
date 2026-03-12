import "dotenv/config";
import { createHttpServer } from "./http.js";
import { fatal } from "./fatal.js";

const PORT = process.env.PORT;
async function bootstap() {
  const app = createHttpServer();
  app.listen(PORT, () => {
    console.log("server is running at 4010");
  });
}
bootstap().catch(fatal);
