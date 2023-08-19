import { NextFunction, Request, Response } from 'express';
import db from '@/config/db';
import { createtUser, deleteUser, getAllUser, getUserById, getUserEmail, updateUser } from '@/query';
import { User } from '@/interfaces/users.interface';
import bcrypt from "bcryptjs";
export class UserController {

  public getUsers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      db.query(getAllUser,async(err:Error, data:any)=>{
        if(err) res.status(409).json(err)
        if(data) res.status(200).json(data)
      })
    } catch (error) {
      next(error)
    }
  };

  public getUserById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const id = req.params.id
      db.query(getUserById,[id],async(err:Error, data:any)=>{
        if(err) res.status(409).json(err)
        if(data) res.status(200).json(data)
      })
    } catch (error) {
      next(error);
    }
  };

  public createUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userData: User = req.body;
      db.query(getUserEmail,[userData.email.trim()], async (err: Error, data: any)=>{
        if (err) return res.status(409).json(err);
        if(data.length){
          res.status(409).json("user or email already exits");
        } else{
          const salt = await bcrypt.genSalt(10);
          const hashedPassword = await bcrypt.hash(userData.password, salt);
          const birthday = new Date(userData.birthday)
          const value = [userData.firstName, userData.lastName,birthday, userData.phoneNumber, userData.address, userData.gender, hashedPassword, userData.avartar, userData.username, userData.email];
          db.query(createtUser, [value], (err:Error, data:any) => {
            if (err) return res.status(409).json(err);
            res.status(200).json("create user successfully");
          });
        }
      })
    } catch (error) {
      next(error);
    }
  };

  public updateUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = req.params.id
      const userData:User = req.body
      const {firstName,lastName, phoneNumber, address, gender, password, avartar, username, email} = userData
      const birthday = new Date(userData.birthday)
      const values = [firstName,lastName, birthday, phoneNumber, address, gender, password, avartar, username, email]
      db.query(getAllUser, async(err:Error, data:any)=>{
        const newData = data
        .filter((item:any) => item.id != userId)
        .filter(
          (item:any) => item?.email.trim() === email.trim()
        );
        if (newData.length)
        return res
          .status(409)
          .json( { message: "email already exits",err });
            if (newData.length === 0) {
                db.query(updateUser,[...values,userId], async(err:Error, data:any)=>{
                if(err) res.status(409).json({message: "Update failed",err})
                return res.status(200).json({message:"Update user successfully"})
          })
            }
      })
    } catch (error) {
      next(error)
    }
  };

  public deleteUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const idUser = req.params.id || req.userId
      db.query(deleteUser,[idUser],async(err:Error,data:any)=>{
        if (err)
        return res
          .status(409)
          .json({ err: err, message: "Delete failed" });
      return res.status(200).json("delete user successfully");
      })
    } catch (error) {
      next(error);
    }
  };
}
