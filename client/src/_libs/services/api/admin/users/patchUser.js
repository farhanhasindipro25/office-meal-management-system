export const patchUser = async (userId, userData) => {
  const token = localStorage.getItem("token");
  const response = await fetch(
    `${import.meta.env.VITE_PUBLIC_BASE_URL}/users/${userId}/edit`,
    {
      method: "PATCH",
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
