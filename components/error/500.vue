<template>
  <div class="error-500">
    <h1>{{$t("errorPage.500.title")}}</h1>
    <p>{{$t("errorPage.500.description")}}</p>
  </div>
</template>
<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
};
</script>