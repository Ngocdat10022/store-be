export interface User {
  firstName:string
  lastName:string
  birthday:string
  phoneNumber:string
  address:string
  email:string
  gender:string
  password:string
  avartar:string
  username:string
}


export interface UserRegister {
  firstName:string;
  lastName:string
  email?: string;
  password: string;
}

export interface UserLogin {
  email?: string;
  password: string;
}

