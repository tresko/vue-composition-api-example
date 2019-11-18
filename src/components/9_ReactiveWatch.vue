<template>
  <div>
    <button type="button" @click="onClick1">{{ `Button 1: ${counter1.counter}` }}</button>
    <button type="button" @click="onClick2">{{ `Button 2: ${counter2.counter}` }}</button>
  </div>
</template>

<script lang="ts">
import { watch } from "@vue/composition-api";
import useCounter from "@/hooks/useCounter";

export default {
  setup() {
    const { counter: counter1, onClick: onClick1 } = useCounter();
    const { counter: counter2, onClick: onClick2 } = useCounter();

    watch(
      () => counter2.counter,
      (count, prevCount) => {
        if (count % 2 === 0) {
          counter2.counter += 3;
        }
      }
    );

    return {
      counter1,
      counter2,
      onClick1,
      onClick2
    };
  }
};
</script>
