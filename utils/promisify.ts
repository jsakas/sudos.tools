
export default function promisify<T extends (...args: any[]) => any>(fn : T) {  
  return function (...args: Parameters<T>) {
    return new Promise<ReturnType<T>>((resolve, reject) => {
      try {
        const result = fn(...args);

        resolve(result);
      } catch (e) {
        reject(e);
      }
    });
  };
}
