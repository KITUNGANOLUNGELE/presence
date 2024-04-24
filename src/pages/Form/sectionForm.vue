<template>
  <div>
    <q-form @submit.prevent="onSubmit" class="q-gutter-md">
      <q-input v-model="nom_section" type="text" label="Nom de la section">
        <template v-slot:prepend>
          <q-icon name="school" />
        </template>
      </q-input>
      <div class="flex flex-center">
        <q-btn label="Submit" type="submit" color="primary" icon="check" />
      </div>
    </q-form>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useSection } from "../../stores/section";
import { useQuasar } from "quasar";
export default defineComponent({
  name: "sectionForm",
  beforeCreate() {
    const sectionStore = useSection();
    sectionStore.getSection;
  },
  setup() {
    const sectionStore = useSection();
    const nom_section = ref("");
    const $q = useQuasar();
    function onSubmit() {
      const e = sectionStore.saveSection({ nom_section: nom_section.value });
      e.then((e) => {
        if (e.positive) {
          $q.notify({
            message: e.positive,
            icon: "check",
            iconColor: "white",
            textColor: "white",
            color: "green",
          });
        } else {
          $q.notify({
            message: e.negative,
            icon: "error",
            iconColor: "red",
            textColor: "white",
            color: "red-1",
          });
        }
      });
      nom_section.value = "";
      sectionStore.getSection.then((res) => {
        sectionStore.section = res.response;
      });
    }
    return { onSubmit, nom_section };
  },
});
</script>

<style lang="scss" scoped></style>
