import Banner from "@/components/Banner";
import Products from "@/components/Products";
import WhyChooseUs from "@/components/WhyChooseUs";
import { useLoaderData } from "react-router-dom";
export default function Home() {
  const data = useLoaderData();
  const products = data?.data;
  return (
    <div>
      <Banner />
      <WhyChooseUs />
      <Products products={products} />
    </div>
  );
}
