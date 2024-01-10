import jwt from 'jsonwebtoken';
import * as bcrypt from "bcrypt";

export const comparePasswords = (passWord, hash) =>{
    return bcrypt.compare(passWord, hash);
}

export const hashPassword = (hash) => {
    return bcrypt.hash(hash, 5);
}

export const createJWT = (user) => {
    const token = jwt.sign({
        id: user.id, 
        userName: user.userName
    },
    process.env.JWT_SECRET);

    return token;
}

export const protect = (req, res, next) => {
    const bearer = req.headers.authorization;
  
    if (!bearer) {
      res.status(401);
      res.send("Not authorized");
      return;
    }

const [, token] = bearer.split(" ");
  if (!token) {
    console.log("here");
    res.status(401);
    res.send("Not authorized");
    return;
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload;
    console.log(payload);
    next();
    return;
  } catch (e) {
    console.error(e);
    res.status(401);
    res.send("Not authorized");
    return;
  }
    
}