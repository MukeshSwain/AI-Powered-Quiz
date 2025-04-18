
import { generateToken } from "../config/generateToken.js";
import User from "../models/User.js";

export const register = async (req, res) => { 
  
  
    const { name, email, password } = req.body;
    try {
        if (!name || !email || !password) { 
            return res.status(400).json({ message: "Please fill all the fields" ,success: false});
        }
        const existingUser = await User.findOne({ email });
        if (existingUser) { 
            return res.status(400).json({ message: "User already exists",success : false});
        }
        const user = await User.create({
            name,
            email,
            password
        })
        res.status(201).json({ user ,success: true});
    } catch (error) {
        console.log("Internal Server Error", error.message);
        res.status(500).json({ error: error.message });
        
    }
}

export const login = async (req, res) => { 
  
  
  const { email, password } = req.body;
  
  
    
    
    try {
        if (!email || !password) {
          return res.status(400).json({ message: "Please fill all the fields",success: false });
        }
        let user = await User.findOne({ email }).select("+password");
        if (!user) {
          return res
            .status(400)
            .json({ message: "User does not exist", success: false });
        }
        
    
        
        const isMatch = await user.comparePassword(password);
        const token = generateToken(user._id, res);
        if (!isMatch) {
          return res
            .status(400)
            .json({ message: "Invalid credentials", success: false });
        }
      
      user = await User.findById(user._id).select("-password");
        res.status(200).json({message: "Login successful", user, success: true});
    } catch (error) {
        console.log("Internal Server Error", error.message);
        res.status(500).json({ message: error.message ,success: false});
    }
}

export const logout = async (req, res) => {
  
  
  res.cookie("quizToken", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // only secure in prod
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax", // lax in dev
    expires: new Date(0),
  });

  res.status(200).json({ message: "Logout successful" ,success: true});
};

