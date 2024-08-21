/**
 * This function gets a list of users from a website (called an API).
 * It's like sending a message to the website saying "Hey, can you give me a list of all your users?"
 *
 * @returns {Promise} A promise is like a special box that says "I'll give you the answer later".
 * In this case, the box will have a list of user objects inside.
 */
export const getUsers = async () => {
  /**
   * Here, we're sending a message to the website to ask for the list of users.
   * We're using a special tool called "fetch" to send the message.
   *  This is a javascript builtin function to make api calls.
   * The first part ("https://jsonplaceholder.typicode.com/users") is the address of the server api.
   * The second part ({ method: "GET" }) means we're asking for something (the list of users).
   *
   * It's like sending a letter to the website saying "Dear Website, can you please send me the list of users?"
   */
  const users = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET",
  });

  /**
   * Now, we need to understand the answer the api server sent back.
   * The answer is like a special code that we need to translate into something we can use.
   *
   * We're using a special tool/method called "json()" to translate the code into something we can use.
   *
   * It's like having a special dictionary that helps us understand the answer.
   */
  const result = await users.json();

  /**
   * Finally, we're returning the answer (the list of users) to whoever called this function.
   *
   * It's like sending the list of users back to the person who asked for it.
   */
  return result;
};

export function getProducts(limit = 10) {
  const products = fetch(`https://fakestoreapi.com/products?limit=${limit}`)
    .then((result) => result.json())
    .then((res) => res);
  return products;
}

export const addProduct = async (payload) => {
  const addOne = await fetch("https://fakestoreapi.com/products", {
    method: "POST",
    body: payload,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const result = await addOne.json();
  return result;
};

export const updateProduct = async (id, payload) => {
  const updateOne = await fetch(`https://fakestoreapi.com/products/${id}`, {
    method: "PUT",
    body: payload,
  });

  const result = await updateOne.json();
  return result;
};

export const deleteProduct = async (id) => {
  const deleteOne = await fetch(`https://fakestoreapi.com/products/${id}`, {
    method: "DELETE",
  });

  const result = await deleteOne.json();
  return result;
};
