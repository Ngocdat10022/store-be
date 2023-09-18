// query category
export  const getAllCat = `SELECT * FROM category`

export const getCategoryBySlug = `SELECT * FROM category WHERE  slug=?`

// query product

export const getAllProduct = `SELECT PP.id, PP.name,PP.slug, PP.initial_price,PP.discounted_price,PP.discount_percentage, P.imageUrl FROM parents_product as PP INNER JOIN products AS P ON PP.id = P.parentProductsId `

export const getProductByCat = `SELECT PP.id, PP.name,PP.slug, PP.initial_price,PP.discounted_price,PP.discount_percentage, P.imageUrl FROM parents_product as PP INNER JOIN products AS P ON PP.id = P.parentProductsId WHERE category_id=?`

export const getDetailProduct = `SELECT P.id, P.name, P.imageUrl, P.description, P.rate, P.status, P.size, P.created_at, P.updated_at, P.deleted_at, P.ImageProduct,PP.slug, PP.initial_price, PP.discounted_price, PP.discount_percentage FROM products as P INNER JOIN parents_product as PP ON P.parentProductsId = PP.id WHERE PP.slug=?`
// query user
export const getUserEmail = `SELECT * from user WHERE email=? `

export const getAllUser = `SELECT * from user`

export const getUserById = `SELECT * from user WHERE id=?`

export const insertUser ="INSERT INTO user(`first_name`,`last_name`,`email`,`password`) VALUES(?)"

export const createtUser ="INSERT INTO user(`first_name`,`last_name`, `birthday`,`phone_number`,`address`,`gender`,`password`,`avartar`,`username`,`email`) VALUES(?)"

export const updateUser = "UPDATE user SET `first_name`=? ,`last_name`=? , `birthday`=? ,`phone_number`=? ,`address`=? ,`gender`=? ,`password`=? ,`avartar`=? ,`username`=? ,`email`=?   WHERE `id`=?"

export const deleteUser = "DELETE from user WHERE id=?"