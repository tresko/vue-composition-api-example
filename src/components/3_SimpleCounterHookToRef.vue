<template>
  <button type="button" @click="onClick">Reactive state: {{ counter }}</button>
</template>

<script lang="ts">
import useCounter from "@/hooks/useCounterToRef";

export default {
  setup() {
    const {
      counter: { counter },
      onClick
    } = useCounter();

    return { counter, onClick };
  }
};
</script>
