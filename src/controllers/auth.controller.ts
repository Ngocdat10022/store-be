import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { RequestWithUser } from '@interfaces/auth.interface';
import { User, UserLogin } from '@interfaces/users.interface';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { AuthService } from '@services/auth.service';
import db from '@/config/db';
import { getUserEmail, insertUser } from '@/query';

export class AuthController {
  public auth = Container.get(AuthService);

  public signUp = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userData: User = req.body;
      
      db.query(getUserEmail,[userData.email.trim()], async (err: any, data: any)=>{
        if (err) return res.status(409).json(err);
        if(data.length){
          res.status(409).json("user or email already exits");
        } else{
          const salt = await bcrypt.genSalt(10);
          const hashedPassword = await bcrypt.hash(userData.password, salt);
          const value = [userData.firtname,userData.lastname, userData.email, hashedPassword];
          db.query(insertUser, [value], (err, data) => {
            if (err) return res.status(409).json(err);
            res.status(200).json("create user successfully");
          });
        }
      })
    } catch (error) {
      next(error);
    }
  };

  public logIn = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userData: UserLogin = req.body;
      console.log("userData",userData)
      db.query(getUserEmail, [userData.email.trim()], (err:any, data:any) => {
        if (err) return res.status(409).json(err);
        if (data.length === 0) return res.status(409).json("user not found");
        const isPassword = bcrypt.compareSync(userData.password, data[0].password);
        if (!isPassword) return res.status(409).json("Wrong password ");   
        const token = jwt.sign(
          { id: data[0].id, username: data[0].username },
          "jwtkey"
        );
        const { password, ...orther } = data[0];
        return res.status(200).json({
          findUser: { ...orther },
          accessToken: token,
        });
      });
    } catch (error) {
      next(error);
    }
  };

  public logOut = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userData: User = req.user;
      const logOutUserData: User = await this.auth.logout(userData);

      res.setHeader('Set-Cookie', ['Authorization=; Max-age=0']);
      res.status(200).json({ data: logOutUserData, message: 'logout' });
    } catch (error) {
      next(error);
    }
  };
}
