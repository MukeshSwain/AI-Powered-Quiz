import jwt from "jsonwebtoken";
export const isAuthenticated = async (req, res, next) => {
  try {
    
    const token = req.cookies.quizToken;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized", success: false });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    console.error("Auth error:", error.message);
    res.status(500).json({ message: error.message, success: false });
  }
};
