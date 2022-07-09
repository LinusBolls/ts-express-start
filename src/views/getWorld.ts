import type { RequestHandler } from "express";

const getWorld: RequestHandler = (req, res) => {
  res.json({ hello: "world" });
};
export default getWorld;
