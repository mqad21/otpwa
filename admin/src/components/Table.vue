<template>
  <div class="container">
    <b-table
      class="table"
      sticky-header="80vh"
      striped
      hover
      :items="items"
      show-empty
    >
      <template #empty>
        <p class="text-italic text-center">Tidak ada data.</p>
      </template>
      <template #cell(created_at)="data">
        <p>{{ data.item.created_at | luxon }}</p>
      </template>
      <template #cell(verified_at)="data">
        <p>{{ data.item.verified_at | luxon }}</p>
      </template>
      <template #cell(expired_at)="data">
        <p>{{ data.item.expired_at | luxon }}</p>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  props: ["items"],
};
</script>