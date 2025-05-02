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
import { computed, onMounted } from 'vue'
import { useMenuStore } from '@/stores/menu'

const menuStore = useMenuStore()
const navigation = computed(() => menuStore.menuOptions)

onMounted(() => {
  menuStore.fetchMenu()
})
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
