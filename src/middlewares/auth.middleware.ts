
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const verifyToken = (req:Request, res:Response, next:NextFunction) => {
  const authHeader = req?.header("Authorization");

  const token = authHeader || authHeader.split(" ")[1];

  if (!token) return res.status(409).json("Token not found");
  const auth:any = jwt.verify(token, "jwtkey");

  req.userId = auth?.id;
  req.username = auth?.username;
  next();
};
