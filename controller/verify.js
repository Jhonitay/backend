const jwt = require("jsonwebtoken");

//verify token from cookies
const verifyToken = (req, res, next) => {
  const { token } = req.cookies;

  //console.log("Cookies: ", req.cookies);

  //Tokennya ga ada
  if (!token) {
    const error = new Error("Token not found");
    error.code = 401;
    error.status = "Unauthorized";

    const response = {
      code: error.code,
      status: error.status,
      message: error.message,
    };

    return res.status(response.code).json(response);
  }

  //Kalo tokennya sinkron
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    //console.log("ini request", req);
    console.log("userId: ", decoded.payload.userId);
    req.userId = decoded.payload.userId;
    next();
  } catch (error) {
    //Kalo tokennya ga sinkron
    error.code = 401;
    error.status = "Unauthorized";

    const response = {
      code: error.code,
      status: error.status,
      message: error.message,
    };

    return res.status(response.code).json(response);
  }
};

module.exports = { verifyToken };