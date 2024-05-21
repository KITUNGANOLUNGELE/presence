<template>
  <div class="flex flex-center">
    <dashComponent
      name="Ajouter une option"
      icon="history_edu"
      @click="section = !section"
    />
    <q-dialog v-model="section" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="history_edu" color="primary" text-color="white" />
          <span class="q-ml-sm">ajouter une Option</span>
        </q-card-section>
        <q-card-section>
          <optionForm />
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
import optionForm from "../Form/optionForm.vue";
import dashComponent from "../../components/dashComponent.vue";
import { useSection } from "../../stores/section";
import axios from "axios";
export default {
  components: { optionForm, dashComponent },
  beforeCreate() {
    const sec = useSection();
    axios
      .get("https://gestpresence.000webhostapp.com/chris/section/all/")
      .then((res) => {
        sec.setState(res.data.response);
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
