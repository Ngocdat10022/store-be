// query category
export  const getAllUser = `SELECT * FROM category`

// query product

export const getAllProduct = `SELECT * FROM products`

// query user
export const getUserEmail = `SELECT * from user WHERE email=? `
//insert user 
export const insertUser ="INSERT INTO user(`first_name`,`last_name`,`email`,`password`) VALUES(?)"