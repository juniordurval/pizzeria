export type Category = 'burgers' | 'pizzas' | 'pastas' | 'drinks' | 'desserts' | 'sides';

export type Size = 'small' | 'medium' | 'large';

export interface ProductOption {
  name: string;
  price: number;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  category: Category;
  basePrice: number;
  image: string;
  hasSizes: boolean;
  sizes?: {
    [key in Size]: number;
  };
  options?: ProductOption[];
}

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  size?: Size;
  price: number;
  quantity: number;
  totalPrice: number;
  options?: string[];
}

export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;
  role: 'admin' | 'customer';
}

export interface Order {
  id: string;
  userId: string;
  userName: string;
  userPhone: string;
  items: CartItem[];
  totalPrice: number;
  status: 'pending' | 'preparing' | 'on_the_way' | 'delivered' | 'cancelled';
  createdAt: Date;
  notes?: string;
  deliveryAddress: string;
}
