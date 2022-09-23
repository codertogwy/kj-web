<template>
  <el-config-provider :locale="zhCn" :button="button" :message="message">
    <router-view/>
  </el-config-provider>
</template>

<script lang="ts" setup>
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import {reactive} from "vue";

const button = reactive({
  autoInsertSpace: true,
})

const message = reactive({
  max: 3,
})

</script>