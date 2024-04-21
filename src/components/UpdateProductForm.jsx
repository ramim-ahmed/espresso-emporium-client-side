/* eslint-disable react/prop-types */
import { addNewProduct } from "@/lib/query";
import { Button, Input } from "antd";
import { useState } from "react";
import toast from "react-hot-toast";
import { TiDeleteOutline } from "react-icons/ti";

export default function UpdateProductForm({ product }) {
  const {
    _id,
    name,
    category,
    chef,
    taste,
    supplier,
    price,
    ingrediants,
    photo,
  } = product || {};
  const [productName, setProductName] = useState(name);
  const [chefName, setChefName] = useState(chef);
  const [supplierName, setSupplierName] = useState(supplier);
  const [categoryName, setCategoryName] = useState(category);
  const [tasteName, setTasteName] = useState(taste);
  const [priceValue, setPriceValue] = useState(price);
  const [photoUrl, setPhotoUrl] = useState(photo);
  const [item, setItem] = useState("");
  const [usesIngrediants, setUsesIngrediants] = useState([...ingrediants]);

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
  const ingrediantsItem = usesIngrediants.map((item, index) => (
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
      ingrediants: usesIngrediants,
    };
    const result = await addNewProduct(_id, data);
    if (result?.data.modifiedCount > 0) {
      toast.success("Product successfully updated!!! 👍");
    } else {
      toast.error("Product updated failed!!");
    }
  };

  return (
    <form
      onSubmit={handleUpdateProduct}
      className="mt-4 grid grid-cols-2 gap-8"
    >
      <div>
        <label>Name</label>
        <Input
          onChange={(e) => setProductName(e.target.value)}
          defaultValue={name}
          type="text"
          size="large"
        />
      </div>
      <div>
        <label>Chef</label>
        <Input
          onChange={(e) => setChefName(e.target.value)}
          defaultValue={chef}
          type="text"
          size="large"
        />
      </div>
      <div>
        <label>Supplier</label>
        <Input
          onChange={(e) => setSupplierName(e.target.value)}
          defaultValue={supplier}
          type="text"
          size="large"
        />
      </div>
      <div>
        <label>Taste</label>
        <Input
          defaultValue={taste}
          onChange={(e) => setTasteName(e.target.value)}
          type="text"
          size="large"
          placeholder="Taste"
        />
      </div>
      <div>
        <label>Category</label>
        <Input
          onChange={(e) => setCategoryName(e.target.value)}
          defaultValue={category}
          type="text"
          size="large"
        />
      </div>
      <div>
        <label>Price</label>
        <Input
          onChange={(e) => setPriceValue(e.target.value)}
          defaultValue={price}
          type="number"
          size="large"
        />
      </div>
      <div>
        <div className="flex items-center space-x-4">
          <label>Ingrediants</label>
          <div className="flex items-center">
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
        <label>Photo</label>
        <Input
          onChange={(e) => setPhotoUrl(e.target.value)}
          defaultValue={photo}
          type="text"
          size="large"
        />
      </div>
      <div className="col-span-2">
        <Button className="w-full" htmlType="submit">
          Update Coffe Details
        </Button>
      </div>
    </form>
  );
}
