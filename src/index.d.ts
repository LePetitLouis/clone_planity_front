export interface IShop {
  id: number;
  name: string;
  description: string;
  image?: string;
  address?: string;
  phone: string;
  email: string;
  categories?: string[];
  openingHours?: IOpeningHours[];
  benefits?: IBenefits[];
  collaborators?: ICollaborator[];
  city: string;
  postalCode: string;
  lat: number;
  long: number;
  distance?: number;
}

export interface IUser {
  id: number;
  name: string;
  phone: string;
  email: string;
  role: string;
  token: string;
}

export interface IBenefits {
  title: string;
  description?: string;
  benefits: IBenefit[];
}

export interface IBenefit {
  id: number;
  title: string;
  description?: string;
  time?: string;
  price?: string;
}

export interface IOpeningHours {
  day: number;
  opening: string;
  closing: string;
}

export interface ICollaborator {
  id: number;
  name: string;
}

export interface ITypeTrader {
  types: string;
  do: boolean
}