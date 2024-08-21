// In JavaScript, a promise is a result object that is used to handle asynchronous operations.
// It represents a value that may not be available yet, but will be resolved at some point in the future.

// A promise is created when an asynchronous operation is initiated, such as an AJAX request or a timer.
//  The promise is then used to handle the outcome of that operation, whether it's successful or not.

// A promise has three states:
// Pending: Initial state, where the operation has not started yet.
// Fulfilled: The operation has completed successfully, and the promise has a value.
// Rejected: The operation has failed, and the promise has a reason for the failure.

//  Promises are useful because they allow you to write asynchronous code that's easier to read and maintain. They provide a way to handle errors and exceptions in a more elegant way than traditional callbacks.
//  They also provide a way to chain multiple asynchronous operations together, making it easier to write complex asynchronous code.
//  Here's an example of how to use a promise:

// const promise = new Promise((resolve, reject) => {
// Simulate an asynchronous operation
//   setTimeout(() => {
//     resolve("Operation completed successfully!");
//   }, 2000);
// })

// In this example, we create a promise that resolves after 2 seconds
// with the value "Operation completed successfully!".

// You can then use the promise to handle the outcome of the operation using the then() method:

// promise.then((value) => {
//   console.log(value); // Output: "Operation completed successfully!"
// });

// If the operation fails, you can use the catch() method to handle the error:
// promise.catch((error) => {
//   console.error(error); // Output: "Operation failed with error: Error: Operation failed"
// });
// In this example, we create a promise that rejects after 2 seconds
// with the error "Operation failed with error: Error: Operation failed".
// You can then use the catch() method to handle the error.
//  Here's an example of how to use promises with multiple asynchronous operations:
//const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Operation 1 completed successfully!");
//   }, 2000);
// });
//const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Operation 2 completed successfully!");
//   }, 3000);
// });

//const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Operation 3 completed successfully!");
//   }, 4000);
// });
// We can then use the then() method to chain these promises together:
// promise1.then((value) => {
//   console.log(value); // Output: "Operation 1 completed successfully!"
//   return promise2;
// }).then((value) => {
//   console.log(value); // Output: "Operation 2 completed successfully!"
//   return promise3;
// }).then((value) => {
//   console.log(value); // Output: "Operation 3 completed successfully!"
// });
// This will output the results of each operation in the order they were completed.
//  Here's an example of how to use promises with multiple asynchronous operations and error handling:
//  Here's an example of how to use promises with async await and try catch:
// async function main() {
//   try {
//     const result1 = await promise1;
//     console.log(result1); // Output: "Operation 1 completed successfully!"
//     const result2 = await promise2;
//     console.log(result2); // Output: "Operation 2 completed successfully!"
//     const result3 = await promise3;
//     console.log(result3); // Output: "Operation 3 completed successfully!"
//   } catch (error) {
//     console.error(error); // Output: "Operation failed with error: Error: Operation failed"
//   }
// }
// main();

//<-------------------------------------------------APIS Calls----------------------------------------------->
/**
 * This function retrieves a list of users from a website (called an API).
 * It sends a GET request to the API to fetch the list of users.
 *
 * @returns {Promise} A promise that resolves with an array of user objects.
 * @example
 * const users = await getUsers();
 * console.log(users); // Output: [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }, ...]
 */
export const getUsers = async () => {
  const users = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET",
  });
  const result = await users.json();
  return result;
};

/**
 * This function retrieves a list of products from a website (called an API).
 * It sends a GET request to the API to fetch the list of products.
 * You can specify the limit of products to retrieve using the `limit` parameter.
 *
 * @param {number} [limit=10] The number of products to retrieve.
 * @returns {Promise} A promise that resolves with an array of product objects.
 * @example
 * const products = await getProducts(20);
 * console.log(products); // Output: [{ id: 1, title: 'Product 1' }, { id: 2, title: 'Product 2' }, ...]
 */
export function getProducts(limit = 10) {
  const products = fetch(`https://fakestoreapi.com/products?limit=${limit}`)
    .then((result) => result.json())
    .then((res) => res);
  return products;
}

/**
 * This function adds a new product to the API.
 * It sends a POST request to the API with the product data.
 *
 * @param {object} payload The product data to be added.
 * @returns {Promise} A promise that resolves with the added product object.
 * @example
 * const productData = { title: 'New Product', price: 10.99 };
 * const addedProduct = await addProduct(productData);
 * console.log(addedProduct); // Output: { id: 1, title: 'New Product', price: 10.99 }
 */
export const addProduct = async (payload) => {
  const addOne = await fetch("https://fakestoreapi.com/products", {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const result = await addOne.json();
  return result;
};

/**
 * This function updates an existing product in the API.
 * It sends a PUT request to the API with the updated product data.
 *
 * @param {number} id The ID of the product to be updated.
 * @param {object} payload The updated product data.
 * @returns {Promise} A promise that resolves with the updated product object.
 * @example
 * const productId = 1;
 * const updatedProductData = { title: 'Updated Product', price: 9.99 };
 * const updatedProduct = await updateProduct(productId, updatedProductData);
 * console.log(updatedProduct); // Output: { id: 1, title: 'Updated Product', price: 9.99 }
 */
export const updateProduct = async (id, payload) => {
  const updateOne = await fetch(`https://fakestoreapi.com/products/${id}`, {
    method: "PUT",
    body: JSON.stringify(payload),
  });
  const result = await updateOne.json();
  return result;
};

/**
 * This function deletes a product from the API.
 * It sends a DELETE request to the API with the product ID.
 *
 * @param {number} id The ID of the product to be deleted.
 * @returns {Promise} A promise that resolves with the deleted product object.
 * @example
 * const productId = 1;
 * const deletedProduct = await deleteProduct(productId);
 * console.log(deletedProduct); // Output: { id: 1, title: 'Deleted Product' }
 */
export const deleteProduct = async (id) => {
  const deleteOne = await fetch(`https://fakestoreapi.com/products/${id}`, {
    method: "DELETE",
  });
  const result = await deleteOne.json();
  return result;
};
