/* eslint-disable react/prop-types */
import { TiEye } from "react-icons/ti";
import { MdEditSquare } from "react-icons/md";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Product({ product }) {
  const { _id, name, chef, price, photo } = product;
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
      <div className="space-y-5">
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

        <Link to={`/update-product/${_id}`}>
          <div className="bg-red-500 p-1 rounded-lg cursor-pointer">
            <RiDeleteBin2Fill className="w-6 h-6 text-white" />
          </div>
        </Link>
      </div>
    </div>
  );
}
