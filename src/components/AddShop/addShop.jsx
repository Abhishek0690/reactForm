import { type } from "@testing-library/user-event/dist/type";
import { useForm } from "react-hook-form";
function AddShop() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    console.log(data);
  };

  return (
    <div className="add-shop">
      <h1>New Shop</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <input placeholder="Name" {...register("name", { required: "Name is required" })} />
        <span className="error">{errors.name && errors.name.message}</span>
        <textarea
          placeholder="Description"
          {...register("description", { required: "Description is required" })} 
        />
        <span className="error">{errors.description && errors.description.message} </span> <br />
        <button className="btn-submit" type="submit">Submit</button>
        <button className="btn-cancel" type="button">
          Cancel
        </button>
      </form>
    </div>
  );
}

export default AddShop;
