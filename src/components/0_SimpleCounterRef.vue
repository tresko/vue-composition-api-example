<template>
  <button type="button" @click="onClick">{{ `Reactive state: ${counter}` }}</button>
</template>

<script lang="ts">
import { ref, onMounted, Ref } from "@vue/composition-api";

export default {
  props: {
    initialCount: {
      type: Number,
      required: true
    }
  },
  setup(props: any) {
    let counter: Ref<number> = ref(0);

    onMounted(() => {
      counter.value = props.initialCount;
    });

    function onClick() {
      counter.value += 1;
    }

    return {
      counter,
      onClick
    };
  }
};
</script>
