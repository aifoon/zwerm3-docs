# KweenBException

The `KweenBException` class encapsulates error handling for the KweenB application, allowing for structured error reporting and notification across the application's architecture. This documentation will provide a detailed overview of the class's purpose, usage, and methods.

## Class Definition

```typescript
export class KweenBException extends Error {
  public error: IError;

  constructor(error: IError, throwInRenderer = false) {
    super(error.message);
    this.error = error;
    if (throwInRenderer) this.throwInRenderer();
  }

  private throwInRenderer() {
    KweenBGlobal.kweenb.throwError(this.error);
  }
}
```

## Constructor

### `constructor(error: IError, throwInRenderer = false)`

The constructor initializes a new instance of the `KweenBException` class.

**Parameters**:

- `error` (`IError`): An object that contains details about the error, which includes at least a message detailing what went wrong.
- `throwInRenderer` (`boolean`, optional): A flag indicating if the error should be thrown and handled in the renderer context. Defaults to `false`.

### Usage Example

```typescript
try {
  // Some code that may throw an error
} catch (err) {
  throw new KweenBException({ message: "An error occurred" }, true);
}
```

## Methods

### `throwInRenderer()`

This private method is responsible for notifying the renderer about the occurrence of an error. When invoked, it uses the `KweenBGlobal.kweenb.throwError` method to push the error information to the renderer for appropriate handling and user feedback.
