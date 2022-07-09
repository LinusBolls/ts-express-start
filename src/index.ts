import express from "express";

import env from "./env";
import getWorld from "./views/getWorld";

const app = express();

app.get("/api/world", getWorld);

app.listen(env.PORT, () => {
  console.log(`server listening on http://localhost:${env.PORT}`);
});
