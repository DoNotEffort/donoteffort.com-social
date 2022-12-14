<template>
  <div class="nuxt-error">
    <component :is="errorPage" :error="error" />
  </div>
</template>
<script>
import error404 from '@/components/error/404.vue'
import error500 from '@/components/error/500.vue'
export default {
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    errorPage() {
      if (this.error.statusCode === 404) {
        return error404
      }
      // catch everything else
      return error500
    },
  },
}
</script>
<style>
.nuxt-error{
	display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
}
</style>
