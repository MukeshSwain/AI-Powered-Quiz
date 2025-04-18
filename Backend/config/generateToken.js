
import jwt from "jsonwebtoken";


export const generateToken = async (userId, res) => {
    const token  = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: "1d"
    })

    res.cookie("quizToken", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
        maxAge: 24 * 60 * 60 * 1000
    })

    return token;
}