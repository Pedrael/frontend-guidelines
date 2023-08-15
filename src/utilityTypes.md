# TypeScript Utility Types

## Awaited

Awaited\<T> - type that can be used for defining a type that is returned from asynchronous function.

```ts
async function getData(): Promise<string> {
  return "hello";
}

let awaitedData: Awaited<ReturnType<typeof getData>>;
// Now awaitedData can be 'hello'
```

## Partial

Partial\<T> - makes all type T fields optional.

```ts
interface Person {
  name: string;
  age: number;
}

let partialPerson: Partial<Person>;
// Now partialPerson can be { name?: string; age?: number; }
```

## Required

Reqired\<T> - makes all type T fields required.

```ts
interface Person {
  name?: string;
  age?: number;
}

let requiredPerson: Required<Person>;
// Now requiredPerson can be { name: string; age: number; }
```

## Readonly

Readonly\<T> - makes all type T fields readonly.

```ts
interface Point {
  x: number;
  y: number;
}

let readonlyPoint: Readonly<Point>;
// Now readonlyPoint can be { readonly x: number; readonly y: number; }
```

## Record

Record\<Keys, Type> - creates a type that looks like a rekord with keys of Keys tpe and values of Type type.

```ts
type Keys = "a" | "b" | "c";
type RecordType = Record<Keys, number>;

let record: RecordType;
// Now record can be { a: number, b: number, c: number }
```

## Pick

Pick\<T, K extends keyof T> - chooses values of type T object with keys of K.

```ts
interface Person {
  name: string;
  age: number;
}

let pickedPerson: Pick<Person, "name">;
// Now pickedPerson can be { name: string; }
```

## Omit

Omit\<T, K extends keyof T> - chooses values of type T object ignoring keys of K.

```ts
interface Person {
  name: string;
  age: number;
}

let omittedPerson: Omit<Person, "age">;
// Now omittedPerson can be { name: string; }
```

## Exclude

Exclude\<UnionType, ExcludedMembers> - excludes defined types from united type.

```ts
type A = "a" | "b" | "c";
type B = Exclude<A, "a" | "b">;
// Now B is 'c'
```

## Extract

Extract\<Type, Union> - Extracts from Type type only those ones that exist in Union.

```ts
type A = "a" | "b" | "c";
type B = "a" | "b";
type C = Extract<A, B>;
// Now C is 'a' | 'b'
```

## NonNullable

NonNullable\<Type> - Extracts type from Type, omitting null and undefined.

```ts
let value: string | null | undefined;
let nonNullableValue: NonNullable<typeof value>;
// Now nonNullableValue is string
```

## Parameters

Parameters\<Type> - extracts types of the function Type arguments.

```ts
function foo(a: string, b: number) {}
type FooParameters = Parameters<typeof foo>;
// Now FooParameters is [string, number]
```

## ConstructorParameters

ConstructorParameters\<Type> - extracts types of the constructor Type arguments.

```ts
class Foo {
  constructor(a: string, b: number) {}
}
type FooConstructorParameters = ConstructorParameters<typeof Foo>;
// Now FooConstructorParameters is [string, number]
```

## ReturnType

ReturnType\<Type> - extracts type of the function Type return value.

```ts
function foo(): string {
  return "hello";
}
type FooReturnType = ReturnType<typeof foo>;
// Now FooReturnType is string
```

## InstanceType

InstanceType\<Type> - extracts type of the Type class instance.

```ts
class Foo {
  x: number;
}
type FooInstance = InstanceType<typeof Foo>;
// Now FooInstance is { x: number }
```

## ThisParameterType

ThisParameterType\<Type> - extracts this type of the Type function.

```ts
class Foo {
  x: number;
  method(this: this): void {}
}
type ThisType = ThisParameterType<Foo["method"]>;
// Now ThisType is Foo
```

## OmitThisParameter

OmitThisParameter\<Type> - defines the function without this type.

```ts
class Foo {
  x: number;
  method(this: this): void {}
}
type MethodType = OmitThisParameter<Foo["method"]>;
// Now MethodType is () => void
```

## ThisType

ThisType\<Type> - adds this type to the Type function.

```ts
class Foo {
  x: number;
  method(): void {}
}
type MethodType = ThisType<Foo["method"]>;
// Now MethodType is (this: Foo) => void
```

## Register Control

Uppercase<StringType>, Lowercase<StringType>, Capitalize<StringType>, Uncapitalize<StringType> - utility types for the strings that change register.

```ts
type Uppercased = Uppercase<"hello">; // 'HELLO'
type Lowercased = Lowercase<"Hello">; // 'hello'
type Capitalized = Capitalize<"hello">; // 'Hello'
type Uncapitalized = Uncapitalize<"Hello">; // 'hello'
```
