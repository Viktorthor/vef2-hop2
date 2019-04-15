import { IProduct } from './types';
import { async } from 'q';

// Sækja slóð á API úr env
const baseurl:string | undefined = process.env.REACT_APP_API_URL;

async function getProducts() {
  const url = new URL(`/products`, baseurl);
  const response = await fetch(url.href);

  if (!response.ok) {
    return null;
  }

  const result = await response.json();

  return result;
}

  export async function registerUser(username: any, password: any, email: any) {
    const options = {
      body: JSON.stringify({
        username,
        password,
        email
      }),
      headers: {
        'content-type': 'application/json',
      },
      method: 'POST',
    };

    const url = new URL('/users/register', baseurl);

    const response = await fetch(url.href, options);
    const result = await response.json();
    console.log("index", result);

    return {
      success: response.ok,
      result
    }
  }

  async function getProduct(id: number | string) : Promise<IProduct> {

    const product : IProduct = {
      category: {
        id: 10,
        title: "Flokkur",
      },
      id: 10,
      image: '',
      price: 100,
      title: "Prufuvara",
    };

    return new Promise((resolve) => resolve(product))
  }


export {
  getProduct,
  getProducts,
};
