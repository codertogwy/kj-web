<template>
  <el-container class="container">
    <el-aside width="auto">
      <AsideContainer/>
    </el-aside>
    <el-container>
      <el-header height="auto">
        <HeaderContainer/>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
      <el-footer>
        <FooterContainer/>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script setup>
import AsideContainer from "./AsideContainer.vue";
import HeaderContainer from "./HeaderContainer.vue";
import FooterContainer from "./FooterContainer.vue";
</script>

<style scoped>
.container {
  min-height: 100%;
}
</style>