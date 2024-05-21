<template>
  <div class="flex flex-center">
    <dashComponent
      name="Ajouter une promotion"
      icon="book"
      @click="section = !section"
    />
    <q-dialog v-model="section" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="book" color="primary" text-color="white" />
          <span class="q-ml-sm">ajouter une Promotion</span>
        </q-card-section>
        <q-card-section>
          <promForm />
        </q-card-section>
        <q-card-actions align="center">
          <q-btn flat label="Fermer" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ref } from "vue";
import promForm from "../Form/promForm.vue";
import { useOption } from "../../stores/option";
import dashComponent from "../../components/dashComponent.vue";
import axios from "axios";
export default {
  components: { promForm, dashComponent },
  beforeCreate() {
    const optionStore = useOption();
    axios
      .get("https://gestpresence.000webhostapp.com/chris/option/all/")
      .then((res) => {
        optionStore.setState(res.data.response);
      });
  },
  updated() {},
  setup() {
    const section = ref(false);
    return { section };
  },
};
</script>

<style lang="scss" scoped></style>
