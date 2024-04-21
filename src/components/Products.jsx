/* eslint-disable react/prop-types */
import { Button } from "antd";
import Product from "./Product";
import { IoMdAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Products({ products }) {
  return (
    <div id="products" className="max-w-6xl mx-auto px-6 py-20">
      <div className="text-center">
        <p>--- Sip & Savor ---</p>
        <h1 className="font-rancho text-5xl text-primary">
          Our Popular Products
        </h1>
        <Link to="/add-new-coffee" className="flex justify-center">
          <Button
            className="mt-4 flex items-center"
            icon={<IoMdAddCircle className="w-6 h-6" />}
          >
            Add New Coffe
          </Button>
        </Link>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-10 gap-6">
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}
