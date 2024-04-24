<template>
  <q-item
    clickable
    exact
    tag="router-link"
    :to="{ name: link }"
    style="
      margin-bottom: calc(100% / 6);
      font-weight: bold;
      font-family: montserrat;
      font-size: 120%;
    "
  >
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" color="blue-7" />
      <q-badge v-if="bage > 0" color="red" text-color="white" :label="bage" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label v-if="caption" caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "EssentialLink",
  props: {
    title: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
      default: "",
    },

    link: {
      type: String,
      default: "#",
    },
    icon: {
      type: String,
      default: "",
    },
    bage: {
      type: Number,
      default: 0,
    },
  },
});
</script>
<style lang="css" scoped></style>
