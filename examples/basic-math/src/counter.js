let value = 0;

export const counter = {
  get value() {
    return value;
  },
  increment() {
    value++;
  },
  decrement() {
    value--;
  },
  reset() {
    value = 0;
  },
};
