<template>
  <HeaderContent />
  <div class="ods-flex">
    <ods-main-navigation id="main-navigation" :navigation="navigation" />
    <ods-main>
      <ods-scrollbar :wrapClass="null">
        <router-view></router-view>
      </ods-scrollbar>
    </ods-main>
  </div>
</template>

<script lang="ts" setup>
import HeaderContent from './components/header/HeaderContent.vue'
import { useNavManager } from '@/composables/useNavManager'

const { navigation } = useNavManager()
</script>
<style>
.ods-main {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  overflow: auto;
  background-color: var(--color-bg-tertiary);
}
</style>
