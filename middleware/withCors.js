// middleware/withCors.js
import cors, { runMiddleware } from "./cors";

const withCors = (handler) => async (req, res) => {
  await runMiddleware(req, res, cors);
  return handler(req, res);
};

export default withCors;
