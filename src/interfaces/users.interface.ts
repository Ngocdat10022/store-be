export interface User {
  firtname:string;
  lastname:string
  email?: string;
  password: string;
}

export interface UserLogin {
  email?: string;
  password: string;
}
