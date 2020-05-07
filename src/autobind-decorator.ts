namespace App {
  // Autobind decorator
  export function autobind(
    target: any,
    methodName: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
      configurable: true,
      get() {
        const boundFunc = originalMethod.bind(this);
        return boundFunc;
      }
    };
    return adjDescriptor;
  }
}
