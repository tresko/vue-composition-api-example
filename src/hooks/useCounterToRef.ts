import { reactive, toRefs } from "@vue/composition-api";

function useCounter() {
  let counter: { counter: number } = reactive({ counter: 0 });

  function onClick() {
    counter.counter += 1;
  }

  return {
    counter: toRefs(counter),
    onClick
  };
}

export default useCounter;
