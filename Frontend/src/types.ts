export interface apartment {
    _id: string;
    name: string;
    size: number;
    images: string[];
    price: number;
    location: string;
    bedrooms: number;
    bathrooms: number;
}

export interface apartmentsReq{
    
    total : number,
    page : number,
    limit : number,
    totalPages: number,
    data: apartment[]
      
}