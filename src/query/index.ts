// query category
export  const getAllUser = `SELECT * FROM category`

// query product

export const getAllProduct = `SELECT PP.id, PP.name,PP.slug, PP.initial_price,PP.discounted_price,PP.discount_percentage, P.imageUrl FROM parents_product as PP INNER JOIN products AS P ON PP.id = P.parentProductsId `

// query user
export const getUserEmail = `SELECT * from user WHERE email=? `
//insert user 
export const insertUser ="INSERT INTO user(`first_name`,`last_name`,`email`,`password`) VALUES(?)"