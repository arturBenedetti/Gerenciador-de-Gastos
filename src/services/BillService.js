function addItem(type, value, description, category, image = '') {
  const item = {
    value: value,
    description: description,
    category: category,
    image: image || null
  };

  const items = JSON.parse(localStorage.getItem(type)) || [];

  items.push(item);

  localStorage.setItem(type, JSON.stringify(items));
}

function getItems(type) {
  const items = localStorage.getItem(type);
  return items ? JSON.parse(items) : [];
}
