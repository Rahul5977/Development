import jwt from "jsonwebtoken";
export const isLoggedIn = async (req, res, next) => {
  //token leke ao cookie se
  //token me se data nikal do
  try {
    console.log(req.cookies);
    const token = req.cookies.test || "";
    console.log("Token found :", token ? "YES" : "NO");
    if (!token) {
      console.log("No token");
      return res.status(401).json({
        success: false,
        message: "un-Authorized!! ",
      });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("decoded data :", decoded);
    req.user = decoded;
    next();
  } catch (error) {
    console.log("Auth middleware failure!");
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });

    
  }
  next();
};
