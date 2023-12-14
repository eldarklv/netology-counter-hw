const express = require("express");
const redis = require("redis");

const router = express.Router();
const redis_url = process.env.REDIS_URL || "localhost";
const client = redis.createClient({ url: redis_url });

(async () => {
  await client.connect();
})();

router.post("/:bookId/incr", async (req, res) => {
  const bookId = req.params.bookId;

  try {
    const count = await client.incr(bookId);
    res.json({ success: true, count: count });
  } catch (error) {
    res.json({ success: false, error: error });
  }
});

router.get("/:bookId", async (req, res) => {
  const bookId = req.params.bookId;

  try {
    const count = await client.get(bookId);
    res.json({ count: count });
  } catch (error) {
    res.json({ error: error });
  }
});

module.exports = router;
