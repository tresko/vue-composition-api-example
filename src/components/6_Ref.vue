<template>
  <div>
    <button type="button" @click="onClick">{{ `Reactive Button: ${counter.counter}` }}</button>
    <button type="button" @click="handleRefButtonClick">{{ `Ref Button: ${refCount}` }}</button>
  </div>
</template>

<script lang="ts">
import { computed, ref } from "@vue/composition-api";
import useCounter from "@/hooks/useCounter";

export default {
  setup() {
    const { counter, onClick } = useCounter();
    let refCount = ref(0);

    function handleRefButtonClick() {
      refCount.value += 1;
    }

    return {
      counter,
      refCount,
      handleRefButtonClick,
      onClick
    };
  }
};
</script>
