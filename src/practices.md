# Best practices

## React

1. Use `uuid` library for generating unique keys in generated lists (`npm i --save-dev uuid`).
2. Callback in `map` must return a value on **each** iteration.
3. Don't use `forEach`, instead use `for in` and `for of`.
4. Use ternar operator (`penis ? yes : no`) instead of `if else`.
5. `if(...)` must always have `{...}` after.
6. Use following operators if possible and convenient:

- `&&`: If **a** then **b**.

  ```jsx
  {
    showComponent && <p>This component is rendered conditionally.</p>;
  }
  ```

- `??`: If not **a** then **b**.

  ```jsx
  <p>Hello, {name ?? defaultName}!</p>
  ```

- `!!`: Convert a value to boolean.

  ```jsx
  if (!!data) {
    // Code here will run when data is not null or undefined
  }
  ```

7. Use destructurisation of an object `{field1, field2}` if you don't use an object itself.
8. Search in array in slower than search in object.

## Naming

- Types are stored in types.ts
- Globals are stored in constants.ts
- Utility functions are stored in utils.ts
