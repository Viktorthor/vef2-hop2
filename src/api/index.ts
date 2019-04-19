import { IProduct } from './types';
import { async } from 'q';
import 'isomorphic-fetch';

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

async function getProductsDetails(id: number) {
  const url = new URL (`/products/${id}`, baseurl);
  const response = await fetch(url.href);

  if (!response.ok) {
    return null;
  }

  const result = await response.json();
  console.log('RESPONSEDETAILS', result);
  return result;
}

// Fall sem sækir vörur úr sama flokki
async function getProductFromCategory(id: number ) {
  const product = await getProductsDetails(id);
  const category = product.category_id;
  const url = new URL(`products?category=${category}`, baseurl);
  const response = await fetch(url.href);

  if (!response.ok) {
    return null;
  }

  const result = await response.json();

  return result.items;
}

// Sækir Flokka
async function getCategories() {
  const url = new URL(`/categories`, baseurl);
  const response = await fetch(url.href);

  if (!response.ok) {
    return null;
  }

  const result = await response.json();

  return result;
}

// Fall fyrir nýskráningu
  async function registerUser(username: any, password: any, email: any) {
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

  async function loginUser(username: any, password: any) {
    const options = {
      body: JSON.stringify({
        username,
        password
      }),
      headers: {
        'content-type': 'application/json',
      },
      method: 'POST',
    };

    const url = new URL('/users/login', baseurl);

    const response = await fetch(url.href, options);
    const result = await response.json();
    console.log("index", result);

    if(result) {
      const { token } = result;
      localStorage.setItem('token', token);
      localStorage.setItem('username', username);
    }

    return {
      success: response.ok,
      result
    }
  }

// Fall til að bæta við körfu
  async function postCart(id : number, amount: number) {
    const options = {
      body: JSON.stringify({
        product:id,
        quantity:amount,
      }),
      headers: {
         'Authorization': 'Bearer ' + localStorage.getItem('token'),
         'Content-Type': 'application/json',
      },
      method: 'POST',
    };

    const url = new URL('/cart', baseurl);

    const response = await fetch(url.href, options);
    const result = await response.json();

    return {
      success: response.ok,
      result
    }
  }

  export async function updateCart(id: number, quantity: number) {
    console.log('Blessaður!', id, quantity);
    
    const options = {
      body: JSON.stringify({
        quantity
      }),
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'content-type': 'application/json',
      },
      method: 'PATCH',
    };
  
    const url = new URL(`cart/line/${id}`, baseurl);
  
    const response = await fetch(url.href, options);
    const result = await response.json();
  
    return {
      success: response.ok,
      result
    }
  }
  
  export async function removeFromCart(id: number) {
    const options = {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'content-type': 'application/json',
      },
      method: 'DELETE',
    };
  
    const url = new URL(`cart/line/${id}`, baseurl);
    const response = await fetch(url.href, options);
  
    return response.ok;
  }

  export async function placeOrder(name: string, address: string) {
    const options = {
      body: JSON.stringify({
        name,
        address
      }),
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'content-type': 'application/json',
      },
      method: 'POST',
    };
    
    const url = new URL('/orders', baseurl);
  
    const response = await fetch(url.href, options);
    const result = await response.json();
    
    return {
      success: response.ok,
      result
    }
  }

  async function getCategory(id: number, limit: number) {
    const url = new URL(`products?category=${id}`, baseurl);
    const response = await fetch(url.href);
    if(!response.ok) {
      return null;
    }

    const result = await response.json();

    return result.items;
  }

  async function getCart() {
    const options = {
      headers: {
         'Authorization': 'Bearer ' + localStorage.getItem('token'),
         'Content-Type': 'application/json',
      },
      method: 'GET',
    };

    const url = new URL('/cart', baseurl);
    const response = await fetch(url.href, options);

    if (!response.ok) {
      return null;
    }

    const result = await response.json();

    return result;
  }

  async function getCategoryDetails(id: number) {
    const url = new URL(`categories/${id}`, baseurl);
    const response = await fetch(url.href);

    if (!response.ok) {
      return null;
    }

    const result = await response.json();

    return result;
  }

  async function searchInCategory(searchString: string, id: number) {

  }

  export async function getOrders() {
    const options = {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'content-type': 'application/json',
      },
      method: 'GET',
    };
    
    const url = new URL(`orders`, baseurl);
    const response = await fetch(url.href, options);
    
    if (!response.ok) {
      return null;
    }
  
    const result = await response.json();
    
    return result;
  }
  


  // Fall sem sækir vöru eftir id-i
  async function getProduct(id: number | string) : Promise<IProduct> {
    const product : IProduct = {
      category_title: {
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

  async function logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  }


export {
  getProduct,
  getProducts,
  getCategories,
  getCategory,
  getProductsDetails,
  getProductFromCategory,
  registerUser,
  loginUser,
  getCart,
  getCategoryDetails,
  searchInCategory,
  logOut,
  postCart,
};
