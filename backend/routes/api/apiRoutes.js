import express from "express";
export const apiRouter = express.Router();

// This is the endpoint that the frontend is calling for the popular causes.
apiRouter.get("/api/popular-causes", (_, res) => {
    // res.header("Access-Control-Allow-Origin", "*");
    res.send({
        causes: [
            {
                id: 1,
                name: "Cause 1",
            },
            {
                id: 2,
                name: "Cause 2",
            },
            {
                id: 3,
                name: "Cause 3",
            },
        ],
    });
});

apiRouter.get("/api", (_, res) => {
//   res.header("Access-Control-Allow-Origin", "*");
  res.send("API!");
});

export default apiRouter;