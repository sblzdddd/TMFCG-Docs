<template>
  <NuxtLoadingIndicator color="#502e21" />
  <NuxtLayout />
</template>
<script lang="ts" setup>
import "@varlet/touch-emulator";
import { Themes } from "@varlet/ui";

StyleProvider(Themes.md3Light);
</script>
<style></style>
