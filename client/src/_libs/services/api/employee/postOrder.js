export const postOrder = async (userData) => {
  const token = localStorage.getItem("token");
  const response = await fetch(
    `${import.meta.env.VITE_PUBLIC_BASE_URL}/orders/create-order`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(userData),
    }
  );
  const data = await response.json();
  return data;
};
