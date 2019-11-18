<template>
  <div>
    <button type="button" @click="onClick1">{{ `Ref Button 1: ${counter1}` }}</button>
    <button type="button" @click="onClick2">{{ `Ref Button 2: ${counter2}` }}</button>
  </div>
</template>

<script lang="ts">
import { watch } from "@vue/composition-api";
import useCounter from "@/hooks/useCounterRef";

export default {
  setup() {
    const { counter: counter1, onClick: onClick1 } = useCounter();
    const { counter: counter2, onClick: onClick2 } = useCounter();

    watch(counter2, (count, prevCount) => {
      if (count % 2 === 0) {
        counter2.value += 3;
      }
    });

    return {
      counter1,
      counter2,
      onClick1,
      onClick2
    };
  }
};
</script>
