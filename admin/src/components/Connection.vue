<template>
  <b-card header-tag="header" footer-tag="footer">
    <template #header>
      <h6 class="mb-0">Koneksi WA</h6>
    </template>
    <b-card-text v-if="connection.status">
      <p>
        Status:
        <span :class="connected ? 'text-success' : 'text-danger'">
          {{ status }}
        </span>
      </p>
      <p v-if="connection.reason && !connected">
        Keterangan:
        {{ connection.reason }}
      </p>
      <Qr v-if="qrString && !connected" :qr-string="qrString" />
    </b-card-text>
    <b-button
      :disabled="loading || connection.isReconnecting"
      v-if="!qrString && !connected && connection.status"
      href="#"
      variant="primary"
      @click="load"
    >
      {{ !loading && !connection.isReconnecting ? "Hubungkan" : "Sedang menghubungkan..." }}
    </b-button>
  </b-card>
</template>

<script>
import Qr from "./Qr.vue";
import { WA_STATUS } from "../constants/wa.js";

export default {
  props: ["connection"],
  components: { Qr },
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    load() {
      this.$axios.post("connect").then(() => {
        this.loading = true;
      });
    },
  },
  computed: {
    connected() {
      return this.connection.status == WA_STATUS.CONNECTED;
    },
    status() {
      return this.connected ? "Terhubung" : "Terputus";
    },
    qrString() {
      return this.connection.qrString;
    },
  },
  watch: {
    connection(value) {
      this.loading = value.loading;
    },
  },
};
</script>