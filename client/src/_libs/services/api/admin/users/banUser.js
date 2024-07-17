export const banUser = async (userId, payload) => {
  const token = localStorage.getItem("token");
  const response = await fetch(
    `${import.meta.env.VITE_PUBLIC_BASE_URL}/users/${userId}/ban`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    }
  );
  const data = await response.json();
  return data;
};
