interface Item {
  value: number;
  description: string;
  category: string;
  image: string | null;
}

export function addItem(type: 'expenses' | 'incomes', value: number, description: string, category: string, image: string = ''): void {
  const item: Item = {
    value,
    description,
    category,
    image: image || null
  };

  const items: Item[] = JSON.parse(localStorage.getItem(type) || '[]');

  items.push(item);

  localStorage.setItem(type, JSON.stringify(items));
}

export function removeItemByIndex(type: 'expenses' | 'incomes', index: number): void {
  const items: Item[] = JSON.parse(localStorage.getItem(type) || '[]');

  if (index >= 0 && index < items.length) {
    items.splice(index, 1);

    localStorage.setItem(type, JSON.stringify(items));
  } else {
    console.error('Item not found');
  }

}

export function getItems(type: 'expenses' | 'incomes'): Item[] {
  const items = localStorage.getItem(type);
  return items ? JSON.parse(items) : [];
}

