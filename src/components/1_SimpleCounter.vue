<template>
  <button type="button" @click="onClick">{{ `Reactive state: ${counter.counter}` }}</button>
</template>

<script lang="ts">
import { reactive, onMounted, isRef } from "@vue/composition-api";

export default {
  props: {
    initialCount: {
      type: [Number, Object],
      required: true
    }
  },
  setup(props: any) {
    let counter: { counter: number } = reactive({
      counter: 0
    });

    onMounted(() => {
      // counter.counter = props.initialCount;
      // counter.counter = props.initialCount.value;
      // counter.counter = isRef(props.initialCount)
      //   ? props.initialCount.value
      //   : props.initialCount;
    });

    function onClick() {
      counter.counter += 1;
    }

    return {
      counter,
      onClick
    };
  }
};
</script>
