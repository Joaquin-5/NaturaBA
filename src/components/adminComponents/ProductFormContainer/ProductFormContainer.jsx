import { useState } from "react";
import { createProduct } from "../../../services/products";
import { uploadToImgbb } from "../../../services/uploadImage";
import { validateProducts } from "../../../utils/validateProducts";
import "./ProductFormContainer.css";
import { ProductFormUI } from "../ProductFormUI/ProductFormUI";

export const ProductFormContainer = () => {
  const [loading, setLoading] = useState();
  const [errors, setErrors] = useState("");
  const [file, setFile] = useState(null);
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setLoading(true);

    const newErrors = validateProducts({ ...product, file });
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    try {
      const imageUrl = await uploadToImgbb(file);
      const productData = {
        ...product,
        price: product.price,
        imageUrl,
      };

      await createProduct(productData);
      alert("Producto creado con éxito");
      setProduct({
        name: "",
        price: "",
        category: "",
        description: "",
      });
      setFile(null);
    } catch (error) {
      setErrors({ general: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProductFormUI
      product={product}
      errors={errors}
      onChange={handleChange}
      onFileChange={setFile}
      loading={loading}
      onSubmit={handleSubmit}
    />
  );
};
