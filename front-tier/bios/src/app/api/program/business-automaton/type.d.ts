interface Business {
  name: string;
  type: string;
  uuid: string;
  createdAt: string;
  owner: {
    _id: string;
    name: string;
    avatar: string;
  };
  info: {
    description: string;
    logo: string;
    website: string;
    industry: string;
    founded: number;
    headquarters: string;
    mission: string;
    vision: string;
    values: string[];
  };
  partners?: Partner[];
  employees?: Employee[];
  resources?: Resources[];
  revenue?: string;
  products?: Product[];
  services?: Service[];
  customers?: Customer[];
  channels?: string[];
  capital: Number;
}

interface Partner {
  uuid: string;
  name: string;
  description?: string;
}

interface Employee {
  uuid: string;
  name: string;
  title: string;
  description?: string;
}

interface Customer {
  uuid: string;
  name: string;
  description?: string;
  segment: string;
}

interface Product {
  name: string;
  cost: number;
  price: number;
}

interface Service {
  name: string;
  description: string;
  price: number;
}
