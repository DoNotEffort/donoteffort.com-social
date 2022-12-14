<template>
  <div class="error-404">
    <h1>{{$t("errorPage.404.title")}}</h1>
    <p>{{$t("errorPage.404.description")}}</p>
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