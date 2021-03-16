module.exports = {
  createProductTable: `
    CREATE TABLE IF NOT EXISTS products (
      id UUID PRIMARY KEY,
      product_name VARCHAR NOT NULL,
      description VARCHAR NOT NULL,
      category VARCHAR NOT NULL, 
      size VARCHAR NOT NULL,
      rating VARCHAR NOT NULL,
      owner_id UUID REFERENCES users,
      created_at TIMESTAMPZ default now(),
      updated_at TIMESTAMPTZ default now()
    );
    `,

  insertProduct: `
    INSERT into products (
        id,
        product_name,
        description,
        category,
        size,
        ratings
    )values ($1, $2, $3, $4, $5, $6)
    RETURNING *;
    `,

  fetchProductById: 'SELECT * FROM products WHERE id = $1',

  fetchProducts: 'SELECT * FROM products',

  fetchSingleUserProducts: 'SELECT * FROM products WHERE owner_id = $1',

  editProductById: `
    UPDATE products
    SET
    product_name = $2,
    description = $3,
    category = $4
    size = $5,
    rating = $6
    updated_at=NOW()
    WHERE id = $1
    RETURNING *;
    `,

  deleteProductById: 'DELETE FROM products WHERE id = $1',

  updateProductRatingById: `
    UPDATE products
    SET 
    average = $2
    WHERE id = $1
    RETURNING *;
    `,
  calculateProductRating: `
    SELECT AVG(rating) as average
    FROM final_rating
    WHERE id = $1
    `,
};
