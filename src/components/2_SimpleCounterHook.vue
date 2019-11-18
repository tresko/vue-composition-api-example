<template>
  <button type="button" @click="onClick">{{ `Reactive state: ${counter.counter}` }}</button>
</template>

<script lang="ts">
import useCounter from "@/hooks/useCounter";

export default {
  setup() {
    const { counter, onClick } = useCounter();

    return { counter, onClick };
  }
};
</script>
