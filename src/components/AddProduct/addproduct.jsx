import { useForm } from "react-hook-form";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    console.table(data);
  };

  return (
    <div className="container">
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <input
          type="text"
          placeholder="Name"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && <p className="error">{errors.name.message}</p>}
        <input
          type="text"
          placeholder="Description"
          {...register("description", { required: "Description is required" })}
        />
        {errors.description && <p className="error">{errors.description.message}</p>}
        <input
          type="text"
          placeholder="Category"
          {...register("category", { required: "Category is required" })}
        />
        {errors.category && <p className="error">{errors.category.message}</p>}
        <input
          type="number"
          min={1}
          placeholder="Quantity"
          {...register("quantity", { required: "Quantity is required" })}
        />
        {errors.quantity && <p className="error">{errors.quantity.message}</p>}
        <input
          type="number"
          min={1}
          placeholder="Price"
          {...register("price", { required: "Price is required" })}
        />
        {errors.price && <p className="error">{errors.price.message}</p>}
        <div className="btn-s">
          <button className="btn-submit" type="submit">Submit</button>
          <button className="btn-cancel" type="button">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
