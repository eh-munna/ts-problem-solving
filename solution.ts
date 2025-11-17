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

const getLength = <T>(value: string | T[]): number => {
  if (typeof value === 'string') {
    return value.length;
  }
  if (Array.isArray(value)) {
    return value.length;
  }
  return 0;
};
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

interface IBook {
  title: string;
  rating: number;
}

const filterByRating = (items: IBook[]): IBook[] => {
  for (const item of items) {
    if (item.rating < 0 || item.rating > 5) {
      throw new Error(
        `Invalid rating: ${item.rating}. Must be between 0 and 5.`
      );
    }
  }

  return items.filter((item) => item.rating >= 4);
};

interface IUser {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

const filterActiveUsers = (users: IUser[]): IUser[] => {
  return users.filter((user) => user.isActive);
};

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

const getUniqueValues = <T extends string | number>(
  arr1: T[],
  arr2: T[]
): T[] => {
  const result: T[] = [];
  let length: number = 0;

  const manualPush = (item: T): void => {
    result[length] = item;
    length++;
  };

  const isIncludes = (item: T): boolean => {
    for (let i = 0; i < length; i++) {
      if (item === result[i]) {
        return true;
      }
    }
    return false;
  };

  for (let i = 0; i < arr1.length; i++) {
    if (!isIncludes(arr1[i])) {
      manualPush(arr1[i]);
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (!isIncludes(arr2[i])) {
      manualPush(arr2[i]);
    }
  }
  return result;
};

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
