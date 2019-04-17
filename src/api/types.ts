export interface ICategory {
  id: number;
  title: string;
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
  image: string;
  category_title: ICategory;
  description?: string;
  created?: Date;
  updated?: Date;
}


// todo fleiri týpur

/** ATH UR PRODUCT.TSX nedst
 * <div className="more__products">
        {console.log("products núna", details.id)}
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
          ></Product>
        ))}
      </div>
 */