<template>
  <div>
    <button type="button" @click="onClick">{{ `Button: ${counter.counter}` }}</button>
    {{ counterComputed }}
  </div>
</template>

<script lang="ts">
import { computed } from "@vue/composition-api";
import useCounter from "@/hooks/useCounter";

export default {
  setup() {
    const { counter, onClick } = useCounter();
    let counterComputed = computed(() => counter.counter + 1);

    return {
      counter,
      counterComputed,
      onClick
    };
  }
};
</script>
