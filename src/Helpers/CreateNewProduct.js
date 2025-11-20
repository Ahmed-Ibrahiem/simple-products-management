export const Handel_quick_add_product_data = (quick_form) => {
  const myData = {
    ...quick_form,
    id: Math.floor(Math.random() * 1000),
    sku: quick_form.category.slice(0, 3),
    image: "/images/placeholder_image.jpg",
    stock: 0,
  };
  return myData;
};

export const get_random_data_for_product = () => {
  const all_categories = ["Office", "Decor", "Appliances", "Electronics", "Furniture"];
  const random_number = Math.floor(Math.random() * 1000);
  const my_data = {
    id: random_number,
    name: `Product Random ${random_number}`,
    price: random_number,
    category: all_categories[Math.floor(Math.random() * all_categories.length)],
    sku: `SKU - ${random_number}`,
    stock: (random_number / 10).toFixed(0),
    image: "/images/placeholder_image.jpg",
  };

  return my_data;
};
