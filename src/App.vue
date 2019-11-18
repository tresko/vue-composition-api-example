<template>
  <div>
    <!-- <SimpleCounterRef :initialCount="initialCount" /> -->
    <!-- <SimpleCounter :initialCount="initialCount" /> -->
    <!-- <SimpleCounterHook /> -->
    <!-- <SimpleCounterHookToRef /> -->
    <!-- <CounterProp /> -->
    <!-- <Computed /> -->
    <!-- <Ref /> -->
    <!-- <RefHook /> -->
    <!-- <RefWatch /> -->
    <!-- <ReactiveWatch /> -->
    <Inject />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { ref } from "@vue/composition-api";
import SimpleCounterRef from "@/components/0_SimpleCounterRef.vue";
import SimpleCounter from "@/components/1_SimpleCounter.vue";
import SimpleCounterHook from "@/components/2_SimpleCounterHook.vue";
import SimpleCounterHookToRef from "@/components/3_SimpleCounterHookToRef.vue";
import CounterProp from "@/components/4_CounterProp.vue";
import Computed from "@/components/5_Computed.vue";
import Ref from "@/components/6_Ref.vue";
import RefHook from "@/components/7_RefHook.vue";
import RefWatch from "@/components/8_RefWatch.vue";
import ReactiveWatch from "@/components/9_ReactiveWatch.vue";
import Inject from "@/components/10_Inject.vue";
import { useProvideTheme } from "@/hooks/useProvideInject";

export default Vue.extend({
  name: "app",
  components: {
    // SimpleCounterRef
    // SimpleCounter
    // SimpleCounterHook
    // SimpleCounterHookToRef
    // CounterProp
    // Computed
    // Ref
    // RefHook
    // RefWatch
    // ReactiveWatch
    Inject
  },
  setup: function() {
    useProvideTheme();
    const initialCount = ref(5);

    return {
      initialCount
    };
  }
});
</script>
