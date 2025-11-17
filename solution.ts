const formatValue = (
  value: string | number | boolean
): string | number | boolean => {
  if (typeof value === 'string') {
    return value.toUpperCase();
  } else if (typeof value === 'number') {
    return value * 10;
  }
  return !value;
};

// ---------------------------- //

const getLength = <T>(value: string | T[]): number => {
  if (typeof value === 'string') {
    return value.length;
  }
  if (Array.isArray(value)) {
    return value.length;
  }
  throw new Error('Invalid input');
};

// ---------------------------- //

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

// ---------------------------- //

interface IBook {
  title: string;
  rating: number;
}

const filterByRating = (items: IBook[]): IBook[] => {
  for (const item of items) {
    if (item.rating < 0 || item.rating > 5) {
      throw new Error(`Invalid rating: ${item.rating}. Must be between 0 and 5.`);
    }
  }

  return items.filter(item => item.rating >= 4);
};


// ---------------------------- //

interface IUser {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

const filterActiveUsers = (users: IUser[]): IUser[] => {
  return users.filter((user) => user.isActive);
};

// ---------------------------- //

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book) => {
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${
      book.publishedYear
    }, Available: ${book.isAvailable ? 'Yes' : 'No'}`
  );
};

// ---------------------------- //

const getUniqueValues = <T extends string | number>(
  arr: T[],
  arr2: T[]
): T[] => {
  const result: T[] = [];
  const merged = [...arr, ...arr2];
  for (let i = 0; i < merged.length; i++) {
    const item = merged[i];
    let isDuplicate = false;
    for (let j = 0; j < result.length; j++) {
      if (item === result[j]) {
        isDuplicate = true;
        break;
      }
    }

    if (!isDuplicate) {
      result.push(item);
    }
  }
  return result;
};

// ---------------------------- //

interface IProduct {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

const calculateTotalPrice = (products: IProduct[]): number => {
  if (products.length === 0) return 0;

  return products.reduce((total, product) => {
    const price = product.price * product.quantity;
    const finalPrice = product.discount
      ? price - (price * product.discount) / 100
      : price;
    return total + finalPrice;
  }, 0);
};

const products = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

console.log(calculateTotalPrice(products));
