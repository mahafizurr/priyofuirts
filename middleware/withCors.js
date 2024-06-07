// middleware/withCors.js
import Cors from "cors";

// Initializing the cors middleware
const cors = Cors({
  methods: ["POST", "GET", "HEAD"],
  origin: "*", // Adjust the origin as needed
  optionsSuccessStatus: 200,
});

// Helper method to wait for a middleware to execute before continuing
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

const withCors = (handler) => async (req, res) => {
  await runMiddleware(req, res, cors);
  return handler(req, res);
};

export default withCors;
