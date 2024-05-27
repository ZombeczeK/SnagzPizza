  // pizza.model.ts
  
  export interface Pizza {
    id: number;
    ingredients: string[]; // Id składników pobieranych z bazy danych
    deliveryAddress: string;
  }