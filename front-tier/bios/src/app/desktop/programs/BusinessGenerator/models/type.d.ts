interface Company {
    name: string;
    description: string;
    logo: string;
    website: string;
    industry: string;
    founded: number;
    headquarters: string;
    revenue: string;
    employees: number;
    products: Product[];
    services: Service[];
    customers: Customer[];
    partners: string[];
    mission: string;
    vision: string;
    values: string[];
    culture: string;
    history: string;
    leadership: string;
    contact: string;
    socialMedia: string[];
}

interface Customer {
    name: string;
    description: string;
}

interface Product {
    name: string;
    description: string;
}

interface Service {
    name: string;
    description: string;
}