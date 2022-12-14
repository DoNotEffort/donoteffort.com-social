<template>
  <div>
    <check-offline />
    <Nuxt />
  </div>
</template>
<script>
export default {
  head() {
    return this.$nuxtI18nHead !== null
      ? this.$nuxtI18nHead({ addSeoAttributes: true })
      : {}
  },
}
</script>