<script lang="ts" setup>
import { Page } from '@vben/common-ui';

import { useVbenVxeGrid } from '#/adapter/vxe-table';

const [Grid] = useVbenVxeGrid({});
</script>

<template>
  <Page auto-content-height>
    <Grid table-title="医疗机构列表" />
  </Page>
</template>
