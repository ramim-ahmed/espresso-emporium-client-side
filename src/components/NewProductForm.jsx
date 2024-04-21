import { Button, Input } from "antd";
import { useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";

export default function NewProductForm() {
  const [productName, setProductName] = useState("");
  const [chefName, setChefName] = useState("");
  const [supplierName, setSupplierName] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [tasteName, setTasteName] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [item, setItem] = useState("");
  const [usesIngrediants, setUsesIngrediants] = useState([]);

  const handleAddIngrediant = () => {
    setUsesIngrediants([...usesIngrediants, item]);
    setItem("");
  };
  const handleDeleteIngrediant = (value) => {
    const remainingIngrediants = usesIngrediants.filter(
      (item) => item !== value
    );
    setUsesIngrediants(remainingIngrediants);
  };
  const ingrediantsItem = usesIngrediants?.map((item, index) => (
    <Button size="small" className="mr-2 relative" key={index}>
      {item}
      <TiDeleteOutline
        onClick={() => handleDeleteIngrediant(item)}
        className="w-4 h-4 text-red-500 absolute -top-2 -right-2"
      />
    </Button>
  ));

  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    const data = {
      name: productName,
      chef: chefName,
      supplier: supplierName,
      category: categoryName,
      taste: tasteName,
      price: Number(priceValue),
      photo: photoUrl,
      //   ingrediants: usesIngrediants,
    };
    console.log(data);
  };

  return (
    <form
      onSubmit={handleUpdateProduct}
      className="mt-4 grid grid-cols-2 gap-x-8 gap-y-4"
    >
      <div>
        <label className="font-bold">Name</label>
        <Input
          className="placeholder:text-gray-500 mt-2"
          onChange={(e) => setProductName(e.target.value)}
          type="text"
          size="large"
          placeholder="Enter coffe name"
        />
      </div>
      <div>
        <label className="font-bold">Chef</label>
        <Input
          className="placeholder:text-gray-500 mt-2"
          onChange={(e) => setChefName(e.target.value)}
          type="text"
          size="large"
          placeholder="Enter coffee chef"
        />
      </div>
      <div>
        <label className="font-bold">Supplier</label>
        <Input
          className="placeholder:text-gray-500 mt-2"
          onChange={(e) => setSupplierName(e.target.value)}
          type="text"
          size="large"
          placeholder="Enter coffee supplier"
        />
      </div>
      <div>
        <label className="font-bold">Taste</label>
        <Input
          className="placeholder:text-gray-500 mt-2"
          onChange={(e) => setTasteName(e.target.value)}
          type="text"
          size="large"
          placeholder="Enter coffee taste"
        />
      </div>
      <div>
        <label className="font-bold">Category</label>
        <Input
          className="placeholder:text-gray-500 mt-2"
          onChange={(e) => setCategoryName(e.target.value)}
          type="text"
          size="large"
          placeholder="Enter coffee category"
        />
      </div>
      <div>
        <label className="font-bold">Price</label>
        <Input
          className="placeholder:text-gray-500 mt-2"
          onChange={(e) => setPriceValue(e.target.value)}
          type="number"
          size="large"
          placeholder="Enter coffee price"
        />
      </div>
      <div>
        <div className="flex items-center space-x-4">
          <label className="font-bold">Ingrediants</label>
          <div className="flex items-center mt-2">
            <Input
              onChange={(e) => setItem(e.target.value)}
              className="rounded-r-none"
              placeholder="write an ingrediant"
            />
            <Button
              onClick={handleAddIngrediant}
              disabled={item.length > 0 ? false : true}
              className="rounded-l-none border"
            >
              Add
            </Button>
          </div>
        </div>
        <div className="mt-4">{ingrediantsItem}</div>
      </div>

      <div className="col-span-2">
        <label className="font-bold">Photo</label>
        <Input
          className="placeholder:text-gray-500 mt-2"
          onChange={(e) => setPhotoUrl(e.target.value)}
          type="text"
          size="large"
          placeholder="Enter coffee photo"
        />
      </div>
      <div className="col-span-2">
        <Button
          size="large"
          className="w-full bg-primary text-white font-medium"
          htmlType="submit"
        >
          Add New Coffee
        </Button>
      </div>
    </form>
  );
}
