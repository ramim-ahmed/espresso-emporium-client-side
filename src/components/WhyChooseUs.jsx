import { FiCoffee } from "react-icons/fi";
import { LuFileBadge } from "react-icons/lu";
import { CiCoffeeBean } from "react-icons/ci";
import { CiCoffeeCup } from "react-icons/ci";

export default function WhyChooseUs() {
  return (
    <div className="bg-[#ECEAE3]">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 py-10">
        <div className="p-6">
          <FiCoffee className="w-12 h-12 text-primary" />
          <h3 className="text-2xl font-rancho mt-2">Awesome Aroma</h3>
          <p className="mt-2">
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        <div className="p-6">
          <LuFileBadge className="w-12 h-12 text-primary" />
          <h3 className="text-2xl font-rancho mt-2">High Quality</h3>
          <p className="mt-2">
            We served the coffee to you maintaining the best quality
          </p>
        </div>
        <div className="p-6">
          <CiCoffeeBean className="w-12 h-12 text-primary" />
          <h3 className="text-2xl font-rancho mt-2">Pure Grades</h3>
          <p className="mt-2">
            The coffee is made of the green coffee beans which you will love
          </p>
        </div>
        <div className="p-6">
          <CiCoffeeCup className="w-12 h-12 text-primary" />
          <h3 className="text-2xl font-rancho mt-2">Proper Roasting</h3>
          <p className="mt-2">
            Your coffee is brewed by first roasting the green coffee beans
          </p>
        </div>
      </div>
    </div>
  );
}
