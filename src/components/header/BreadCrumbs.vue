<template>
  <ods-breadcrumb separator="/">
    <ods-breadcrumb-item
      v-for="(crumb, index) in breadcrumbTrail"
      :key="index"
      v-bind="crumb.to ? { to: crumb.to } : {}"
    >
      {{ crumb.label }}
    </ods-breadcrumb-item>
  </ods-breadcrumb>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useNavManager } from '@/composables/useNavManager'

const { navigation } = useNavManager()
const route = useRoute()

const breadcrumbTrail = computed(() => {
  return findBreadcrumbTrail(route.name, navigation.value) || []
})

/**
 * Función recursiva que construye el rastro de breadcrumbs a partir del objeto `navigation`.
 *
 * Dado un `targetId` (`route.name`), recorre de forma recursiva la estructura
 * de navegación para encontrar el ítem que coincide y construir el camino desde la raíz hasta él.
 *
 * @param targetId - ID del ítem a buscar, normalmente `route.name`.
 * @param data - Objeto de navegación jerárquico (puede tener múltiples niveles).
 * @param trail - Array acumulador que guarda los ítems del breadcrumb hasta el punto actual.
 * @returns Array de objetos `{ label, to }` representando el camino hasta el ítem encontrado,
 *          o `null` si no se encuentra el ítem.
 */
function findBreadcrumbTrail(targetId, data, trail = []) {
  if (!data) return null

  for (const key in data) {
    const item = data[key]
    if (!item || !item.langs) continue

    const newTrail = [
      ...trail,
      {
        label: item.langs.es || item.id,
        to: typeof item.to === 'string' ? item.to : null,
      },
    ]

    if (item.id == targetId || item.to === route.path) return newTrail

    const childTrail = findBreadcrumbTrail(targetId, item.children, newTrail)
    if (childTrail) return childTrail
  }

  return null
}
</script>
