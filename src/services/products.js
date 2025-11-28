const BASE_URL = "https://691146457686c0e9c20ce7fa.mockapi.io/products";

export const createProduct = async (products) => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(products),
  });

  if (!response.ok) {
    throw new Error("No se pudo crear el producto");
  }

  const result = await response.json();
  return result;
};
