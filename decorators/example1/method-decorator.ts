export function enumerable(value: boolean) {
  return (_target: any, _propertyKey: any, propertyDescriptor: PropertyDescriptor) => {
    propertyDescriptor.enumerable = value;
  };
}
