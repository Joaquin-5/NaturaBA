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

export const getProducts = async (category) => {
  let url = BASE_URL;
  if (category) {
    url = `${BASE_URL}?category=${category}`;
  }

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Error al listar productos");
  }

  const results = await res.json();
  return results;
};

export const getProductsById = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`);
  if (!res.ok) {
    throw new Error("Error al obtener el producto");
  }
  return await res.json();
};
