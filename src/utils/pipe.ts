const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

const pipeAsync = (...fns) => (x) => fns.reduce((v, f) => v.then(f), Promise.resolve(x));

export default pipe;
export { pipeAsync };
