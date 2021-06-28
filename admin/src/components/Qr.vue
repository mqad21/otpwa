<template>
  <vue-qrcode :value="qrString" />
</template>

<script>
import VueQrcode from "vue-qrcode";
export default {
  components: { VueQrcode },
  props: ["qrString"],
};
</script>