<template>
  <ods-main-header
    header-logo-text="my product name"
    :show-user-menu="true"
    logo-url="/logo-acciona.png"
  >
    <template #mainLogo>
      <h3 class="mt-0">Main logo</h3>
    </template>
    <template #clientLogo>
      <div>
        <img src="/logo-acciona.png" alt="logo" class="img-logo" />
      </div>
    </template>
    <template #breadcrumbs>
      <BreadCrumbs />
    </template>
    <template #userAvatar>
      <img src="/avatar.svg" width="24" alt="Avatar" />
    </template>
    <template #user>
      <UserMenu />
    </template>
  </ods-main-header>
</template>
<script setup lang="ts">
import BreadCrumbs from './BreadCrumbs.vue'
import UserMenu from './UserMenu.vue'
</script>
<style scope>
.img-logo {
  width: 100px;
  max-height: 64px;
}
</style>
