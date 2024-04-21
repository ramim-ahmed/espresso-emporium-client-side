export const fetchAllProducts = async () => {
  const res = await fetch(
    "https://espress-emporium-server-side-apis.vercel.app/api/v1/coffees"
  );
  const data = await res.json();
  return data;
};

export const fetchSingleProduct = async (id) => {
  const res = await fetch(
    `https://espress-emporium-server-side-apis.vercel.app/api/v1/coffees/${id}`
  );
  const data = await res.json();
  return data;
};

export const addNewProduct = async (id, data) => {
  const res = await fetch(
    `https://espress-emporium-server-side-apis.vercel.app/api/v1/coffees/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  const result = await res.json();
  return result;
};
