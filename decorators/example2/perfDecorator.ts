import { performance } from 'perf_hooks';

export function timing() {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const value = descriptor.value;

    console.log('Target: ' + JSON.stringify(target));
    console.log('Property key' + JSON.stringify(propertyKey));

    descriptor.value = async function (...args: any[]) {
      const start = performance.now();
      const out = await value.apply(this, args);
      const end = performance.now();
      console.log(end - start);
      return out;
    };
  };
}
