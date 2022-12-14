<template>
  <div>
    <div :class="{ offline: isOffline == -1, online: isOffline == 1 }">
      <span v-if="isOffline == -1">You are offline</span>
      <span v-if="isOffline == 1">You are online</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CheckOffline',
  data() {
    return {
      isOffline: 0,
    }
  },
  computed: {
    connectionStatus() {
      return this.$nuxt.isOffline
    },
  },
  watch: {
    connectionStatus(offline) {
      console.log({ offline })
      if (offline) {
        this.isOffline = -1
      } else {
        this.isOffline = 1
        setTimeout(() => {
          this.isOffline = 0
        }, 2000)
      }
    },
  },
}
</script>
<style scoped>
.offline,
.online {
  position: absolute;
  top: 0;
  width: 100%;
  height: 5vh;
  background-color: red;
  z-index: 999999;
  display: flex;
  justify-content: center;
  align-items: center;

  /* font-family: 'Baloo Paaji 2'; */
  animation: slide-down 0.4s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translateY(-5vh);
}

.online {
  background-color: #4be00b;
}

@keyframes slide-down {
  0% {
    transform: translateY(-5vh);
  }

  100% {
    transform: translateY(0);
  }
}
</style>
