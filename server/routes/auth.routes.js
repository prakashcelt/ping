import express from 'express';
import { signup, login, logout, updateProfile } from '../controllers/auth.controller.js';
import { protectRoute } from '../utils/jwt.js';
import { arcjetProtection } from '../middlewares/arcjet.js';

const router = express.Router();

router.use(arcjetProtection)

router.get("/aj", arcjetProtection, (req, res) => {
  res.json({ message: "Arcjet protection is active" });
});
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.post("/update-profile", protectRoute, updateProfile);
export default router;