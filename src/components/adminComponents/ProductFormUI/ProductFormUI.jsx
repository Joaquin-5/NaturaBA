export const ProductFormUI = ({
  product,
  errors,
  loading,
  onChange,
  onFileChange,
  onSubmit,
}) => {
  return (
    <section>
      <form className="product-form" onSubmit={onSubmit}>
        <h2>Agregar producto</h2>
        <div>
          <label htmlFor="productName">Nombre:</label>
          <input
            type="text"
            name="name"
            id="productName"
            value={product.name}
            onChange={onChange}
            autoComplete="off"
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="productPrice">Precio:</label>
          <input
            type="number"
            name="price"
            id="productPrice"
            value={product.price}
            onChange={onChange}
            autoComplete="off"
          />
          {errors.price && <p className="error">{errors.price}</p>}
        </div>
        <div>
          <label htmlFor="productCategory">Categoria:</label>
          <input
            type="text"
            name="category"
            id="productCategory"
            value={product.category}
            onChange={onChange}
            autoComplete="off"
          />
          {errors.category && <p className="error">{errors.category}</p>}
        </div>
        <div>
          <label htmlFor="productDescription">Descripción</label>
          <textarea
            name="description"
            id="productDescription"
            value={product.description}
            onChange={onChange}
            autoComplete="off"
          ></textarea>
          {errors.description && <p className="error">{errors.description}</p>}
        </div>
        <div>
          <label htmlFor="productImage">Imagen: </label>
          <input
            type="file"
            id="productImage"
            accept="image/*"
            onChange={(e) => onFileChange(e.target.files?.[0] ?? null)}
            autoComplete="off"
          />
          {errors.file && <p className="error">{errors.file}</p>}
        </div>
        <button className="btn" type="submit" disabled={loading}>
          {loading ? "Guardando..." : "Guardar"}
        </button>
      </form>
    </section>
  );
};
