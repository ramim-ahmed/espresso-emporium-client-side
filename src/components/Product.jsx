/* eslint-disable react/prop-types */
import { TiEye } from "react-icons/ti";
import { MdEditSquare } from "react-icons/md";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { deleteProduct } from "@/lib/query";
import toast from "react-hot-toast";

export default function Product({ product }) {
  const { _id, name, chef, price, photo } = product;
  const navigate = useNavigate();
  const handleDeleteCoffee = async () => {
    const confirm = window.confirm("Are you sure want to delete?");
    if (confirm) {
      await deleteProduct(_id);
      toast.success("Coffee has been deleted successfully!!");
      navigate("/");
    }
  };
  return (
    <div className="flex justify-between items-center bg-[#F5F4F1] md:p-10 rounded-xl p-5">
      <div className="flex items-center">
        <div>
          <img className="h-40" src={photo} alt={name} />
        </div>
        <div className="ml-8 space-y-3">
          <h3>
            <strong>Name</strong>: {name}
          </h3>
          <h3>
            <strong>Chef</strong>: {chef}
          </h3>
          <h3>
            <strong>Price</strong>: ${price}
          </h3>
        </div>
      </div>
      <div className="">
        <Link to={`/product-details/${_id}`}>
          <div className="bg-[#D2B48C] p-1 rounded-lg cursor-pointer">
            <TiEye className="w-6 h-6 text-white" />
          </div>
        </Link>
        <Link to={`/update-product/${_id}`}>
          <div className="bg-[#3C393B] p-1 rounded-lg cursor-pointer my-3">
            <MdEditSquare className="w-6 h-6 text-white" />
          </div>
        </Link>
        <button
          onClick={() => handleDeleteCoffee()}
          className="bg-red-500 p-1 hover:bg-red-800 hover:text-white duration-300 hover:duration-300 rounded-lg cursor-pointer"
        >
          <RiDeleteBin2Fill className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
}
