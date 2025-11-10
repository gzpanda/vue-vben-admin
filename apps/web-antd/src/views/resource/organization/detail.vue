<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const id = router.currentRoute.value.params.id;
</script>

<template>
  <div class="p-5">Healthcare-Info-{{ id }}</div>
</template>
