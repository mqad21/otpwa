<template>
  <div>
    <Header />
    <b-container class="pt-4">
      <b-row>
        <b-col cols="4">
          <Connection :connection="connection" />
        </b-col>
        <b-col cols="8">
          <Table :items="otp" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Connection from "../components/Connection.vue";
import Table from "../components/Table.vue";
import { WA_STATUS } from "../constants/wa.js";

export default {
  components: {
    Header,
    Connection,
    Table,
  },
  data() {
    return {
      connection: {
        status: null,
        qrString: "",
      },
      otp: [],
    };
  },
  methods: {
    getConnection() {
      this.$axios("status")
        .then((response) => response.data.data)
        .then((result) => {
          this.connection = { ...result, loading: false };
        });
    },
    getOtps() {
      this.$axios("all")
        .then((response) => response.data.data)
        .then((result) => {
          this.otp = [...result];
        });
    },
  },
  beforeMount() {
    this.getConnection();
    this.getOtps();
  },
  mounted() {
    this.$socket.on("NEW_STATUS", (status) => {
      this.connection = { ...status, loading: false };
    });
    this.$socket.on("NEW_OTP", () => {
      this.getOtps();
    });
  },
  watch: {
    connection: {
      handler(value) {
        console.log(value);
        if (value.status != WA_STATUS.DISCONNECTED) {
          this.connection.loading = false;
          this.connection.qrString = "";
        }
      },
      immediate: true,
    },
  },
};
</script>