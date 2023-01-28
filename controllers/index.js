const router = require("express").Router();

import homeRoutes from "./home-routes";
import apiRoutes from "./api";

router.use("/", homeRoutes);
router.use("/api", apiRoutes);

router.use((req, res) => {
  res.status(404).end();
});

export default router;