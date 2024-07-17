export function generateMealOptions(data) {
  const options = data?.map((item) => {
    const label = item.item_name;
    const value = item.id.toString();

    return {
      id: item.id,
      name: item.item_name,
      label: label,
      value: value,
    };
  });

  return options || [];
}
