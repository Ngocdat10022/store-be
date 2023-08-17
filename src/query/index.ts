// query category
export  const getAllUser = `SELECT * FROM category`

export const getCategoryBySlug = `SELECT * FROM category WHERE  slug=?`

// query product

export const getAllProduct = `SELECT PP.id, PP.name,PP.slug, PP.initial_price,PP.discounted_price,PP.discount_percentage, P.imageUrl FROM parents_product as PP INNER JOIN products AS P ON PP.id = P.parentProductsId `

export const getProductByCat = `SELECT * FROM parents_product WHERE category_id=?`

// query user
export const getUserEmail = `SELECT * from user WHERE email=? `
//insert user 
export const insertUser ="INSERT INTO user(`first_name`,`last_name`,`email`,`password`) VALUES(?)"