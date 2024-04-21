import { Button } from "antd";
import { Link, useLoaderData } from "react-router-dom";
import { HiMiniArrowSmallLeft } from "react-icons/hi2";

export default function DetailsProduct() {
  const data = useLoaderData();
  const product = data?.data;
  const { name, photo, price, chef, taste, ingrediants } = product || {};
  const ingrediantsItem = ingrediants.map((item, index) => (
    <Button size="small" className="ml-2" key={index}>
      {item}
    </Button>
  ));
  return (
    <div className="min-h-[calc(100vh-120px)] flex justify-center items-center">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <Link to="/" className="py-4 flex items-center space-x-1">
          <HiMiniArrowSmallLeft className="w-8 h-8" />
          <p>Go Back</p>
        </Link>
        <div className="bg-[#F4F3F0]">
          <div className="flex justify-center  md:p-10 rounded-xl p-5">
            <div className="flex items-center">
              <div>
                <img className="h-60" src={photo} alt={name} />
              </div>
              <div className="ml-8 space-y-3">
                <h3>
                  <strong>Name</strong>: {name}
                </h3>
                <h3>
                  <strong>Chef</strong>: {chef}
                </h3>
                <h3>
                  <strong>Taste</strong>: {taste}
                </h3>
                <h3>
                  <strong>Ingrediants</strong>:{ingrediantsItem}
                </h3>
                <h3>
                  <strong>Price</strong>: ${price}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
