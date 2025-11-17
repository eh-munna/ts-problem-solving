# ts-problem-solving

## What is the use of enums in TypeScript? Provide an example of a numeric and string enum

**Enums কেন দরকার? (Use of Enums)**

Enums এমন মানগুলো (values) একত্রিত করে যেগুলো **নির্দিষ্ট ও সীমিত**।

Enums ব্যবহার করলে আমাদের বারবার একই মান লিখতে হয় না। এটি আমাদের **একটা নির্দিষ্ট সেট** দেয়, যা কোডে ভুলের সম্ভাবনা কমায়।
উদাহরণ: `"admin"`, `"user"`, `"guest"` বা `1`, `2`, `3`। আমরা এগুলো আলাদা আলাদা লিখে না, বরং একটি গ্রুপে রাখি।

**Enums এর ব্যবহার:**

- Roles
- Status
- Modes
- Fixed categories
- API responses বা request parameters-এ expected fixed values

Enums কোডকে **readable**, **clear**, এবং **type-safe** রাখে।

---

### **1. Numeric Enum Example**

```ts
enum Status {
  SUCCESS = 1,
  ERROR = 2,
  LOADING = 3,
}

const state: Status = Status.SUCCESS;

console.log(state); // Output: 1
```

**Numeric enum-এর default behavior:**
যদি কোন মান না দেওয়া হয়, TypeScript auto-increment করে:

```ts
enum Role {
  ADMIN, // 0
  USER, // 1
  GUEST, // 2
}
```

---

### **2. String Enum Example**

```ts
enum Direction {
  UP = 'UP',
  DOWN = 'DOWN',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}

const move: Direction = Direction.LEFT;

console.log(move); // Output: "LEFT"
```

String enums বেশি predictable, কারণ তাদের value নিজে সেট করা থাকে।

---

### **সংক্ষেপে**

- **Enum = fixed values-এর group**
- ভুল value use করতে দেয় না
- Typo কমায়
- IDE auto-suggestion দেয়
- Numeric enum = number-based
- String enum = string-based

## What is the use of the keyof keyword in TypeScript? Provide an example.

**keyof এর ব্যবহার:** টাইপস্ক্রিপ্টে আমরা `keyof` keyword ব্যবহার করি যাতে এর মাধ্যমে কোনো object type-এর সবগুলো key নিয়ে একটি union type তৈরি করতে পারি। এটি আমাদের ঐ object এর মধ্যে কোন কোন Property আছে তা বের করতে সাহায্য করে এবং আমরা সেগুলোকে union type হিসেবে ব্যবহার করতে পারি।

**keyof ব্যবহারের সুবিধা:**

- Object-এর keys গুলোর উপর type-safe নিয়ে কাজ করা যায়
- ভুল key ব্যবহার করা থেকে রক্ষা করে
- Generic function বা utility type বানাতে সাহায্য করে

---

### **উদাহরণ**

```ts
interface User {
  name: string;
  age: number;
  email: string;
}

// keyof দিয়ে object এর সব key পাওয়া যায়
type UserKeys = keyof User;
// UserKeys = "name" | "age" | "email"

function getValues(obj: User, key: keyof User) {
  return obj[key];
}

const user: User = {
  name: 'John Doe',
  age: 30,
  email: 'john.doe@example.com',
};

const userName = getValues(user, 'name');
// const wrong = getValues(user, "address"); // ❌ Error: "address" is not valid key
```

---

### **সংক্ষেপে**

- `keyof` = object-এর সব property name-এর union type তৈরি করে
- Type-safe ভাবে key access করতে সাহায্য করে
- ভুল property ব্যবহারের সম্ভাবনা কমায়
