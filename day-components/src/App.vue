<template>
  <div>
  </div>
</template>

<script lang="ts" setup>
import Dialog from '@/components/dialog/index'
import { onMounted } from 'vue';

onMounted(() => {
  Dialog('Welcome', '我的第一个组件')
})
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
</style>
