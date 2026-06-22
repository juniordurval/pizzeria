import React from 'react';
import { MENU_DATA } from '@/data/menu';
import { Category } from '@/types';

const categories: { label: string; value: Category | 'all' }[] = [
  { label: 'All', value: 'all' },
  { label: 'Burgers', value: 'burgers' },
  { label: 'Pizzas', value: 'pizzas' },
  { label: 'Pastas', value: 'pastas' },
  { label: 'Drinks', value: 'drinks' },
  { label: 'Desserts', value: 'desserts' },
  { label: 'Sides', value: 'sides' },
];

interface CategoryFilterProps {
  onCategoryChange: (category: Category | 'all') => void;
  activeCategory: Category | 'all';
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ onCategoryChange, activeCategory }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 py-8">
      {categories.map((cat) => (
        <button
          key={cat.value}
          onClick={() => onCategoryChange(cat.value)}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
            activeCategory === cat.value
              ? 'bg-primary text-white shadow-lg'
              : 'bg-white text-gray-600 hover:bg-gray-100'
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
