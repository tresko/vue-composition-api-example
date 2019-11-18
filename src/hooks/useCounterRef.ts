import { ref, Ref } from "@vue/composition-api";

function useCounter() {
  let counter: Ref<number> = ref(0);

  function onClick() {
    counter.value += 1;
  }

  return {
    counter,
    onClick
  };
}

export default useCounter;
