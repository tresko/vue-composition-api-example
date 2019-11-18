<template>
  <div>{{ theme }}</div>
</template>

<script lang="ts">
import { useTheme } from "@/hooks/useProvideInject";

export default {
  setup() {
    const theme = useTheme();

    return {
      theme
    };
  }
};
</script>
