export const products = [
  {
    id: 1,
    category: "Electronics",
    details: {
      brand: "Samsung",
      models: [
        { modelId: 101, name: "Galaxy S22", price: 75000 },
        { modelId: 102, name: "Galaxy A55", price: 35000 },
      ],
    },
  },
  {
    id: 2,
    category: "Clothing",
    details: {
      brand: "Nike",
      models: [
        { modelId: 201, name: "Air Max", price: 12000 },
        { modelId: 202, name: "Jordan Retro", price: 15000 },
        { modelId: 203, name: "Blazer Mid", price: 9000 },
      ],
    },
  },
  {
    id: 3,
    category: "Books",
    details: {
      brand: "Penguin",
      models: [
        {
          modelId: 301,
          name: "Atomic Habits",
          extra: { author: "James Clear", pages: 330 },
        },
        {
          modelId: 302,
          name: "Deep Work",
          extra: { author: "Cal Newport", pages: 296 },
        },
      ],
    },
  },
];
