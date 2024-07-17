export function generateCategoryOptions(data) {
  const options = data?.map((item) => {
    const label = item.name.replace("_", " ");
    const value = item.id.toString();

    return {
      id: item.id,
      name: item.name,
      label: label,
      value: value,
    };
  });

  return options || [];
}
