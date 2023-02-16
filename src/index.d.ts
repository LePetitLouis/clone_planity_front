export interface IShop {
  id: number;
  name: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  image: string;
  categories: string[];
  openingHours: string[];
  city: string;
  postalCode: string;
  lat: number;
  lng: number;
}

export interface IUser {
  id: number;
  name: string;
  phone: string;
  email: string;
  role: string;
  token: string;
}