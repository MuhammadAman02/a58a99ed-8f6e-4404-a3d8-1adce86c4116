const FRUITS = [
  'Apple', 'Banana', 'Orange', 'Grape', 'Strawberry',
  'Pineapple', 'Mango', 'Watermelon', 'Peach', 'Pear',
  'Cherry', 'Plum', 'Kiwi', 'Blueberry', 'Raspberry',
  'Blackberry', 'Coconut', 'Papaya', 'Lemon', 'Lime',
  'Avocado', 'Pomegranate', 'Fig', 'Apricot', 'Cantaloupe'
];

export async function getFruits() {
  // Return first 20 fruits from the array
  const fruits = FRUITS.slice(0, 20);
  
  return {
    fruits,
    count: fruits.length
  };
}