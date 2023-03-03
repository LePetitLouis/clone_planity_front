export interface IShop {
  id: number;
  name: string;
  description: string;
  image?: string;
  address?: string;
  phone: string;
  email: string;
  categories?: string[];
  opening?: IOpeningHours[];
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
  id_benefit: number;
  name: string;
  description?: string;
  duration?: string;
  price?: string;
}

export interface IOpeningHours {
  day: number;
  open: string;
  close: string;
}

export interface ICollaborator {
  id: number;
  name: string;
}

export interface ITypeTrader {
  types: string;
  do: boolean
}