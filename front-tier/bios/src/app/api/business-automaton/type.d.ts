interface Company {
    name: string;
    type: string;
    uuid: string;
    createdAt: string;
    owner:{
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
    }
    partners?: Partner[];
    employees?: Employee[];
    resources?: Resources[];
    revenue?: string;
    products?: Product[];
    services?: Service[];
    customers?: Customer[];
    socialMedia?: string[];
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
}

interface Product {
    name: string;
    description?: string;
}

interface Service {
    name: string;
    description?: string;
}