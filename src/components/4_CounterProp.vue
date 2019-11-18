<template>
  <div>
    <button type="button" @click="onClick">{{ `Button: ${counter.counter}` }}</button>
    <SimpleCounter :initialCount="refCounter.counter" />
  </div>
</template>

<script lang="ts">
import { reactive, toRefs } from "@vue/composition-api";
import SimpleCounter from "./1_SimpleCounter.vue";

export default {
  components: {
    SimpleCounter
  },
  setup() {
    let counter: { counter: number } = reactive({
      counter: 0
    });

    function onClick() {
      counter.counter += 1;
    }

    return {
      counter,
      refCounter: toRefs(counter),
      onClick
    };
  }
};
</script>
