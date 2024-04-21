import UpdateProductForm from "@/components/UpdateProductForm";
import { HiMiniArrowSmallLeft } from "react-icons/hi2";
import { Link, useLoaderData } from "react-router-dom";

export default function UpdateProduct() {
  const data = useLoaderData();
  const product = data?.data;
  return (
    <div className="min-h-[calc(100vh-120px)] flex justify-center items-center pb-20 pt-10">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <Link to="/" className="py-4 flex items-center space-x-1">
          <HiMiniArrowSmallLeft className="w-8 h-8" />
          <p>Go Back</p>
        </Link>
        <div className="bg-[#F4F3F0] p-10">
          <div className="text-center">
            <h1 className="text-4xl text-primary font-rancho">
              Update Existing Coffee Details
            </h1>
            <p className="mt-2">
              It is a long established fact that a reader will be distraceted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here.
            </p>
          </div>
          <div className="mt-10">
            <UpdateProductForm product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}
