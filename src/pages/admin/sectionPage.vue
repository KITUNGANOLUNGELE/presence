<template>
  <div class="flex flex-center">
    <dashComponent
      name="Ajouter une section"
      icon="school"
      @click="section = !section"
    />
    <q-dialog v-model="section" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="book" color="primary" text-color="white" />
          <span class="q-ml-sm">Ajouter une section</span>
        </q-card-section>
        <q-card-section>
          <sectionForm />
        </q-card-section>
        <q-card-actions align="center">
          <q-btn flat label="Fermer" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <dashComponent name="Gestion" icon="settings" @click="settings" />
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import sectionForm from "../Form/sectionForm.vue";
import dashComponent from "../../components/dashComponent.vue";
export default {
  components: { sectionForm, dashComponent },
  setup() {
    const section = ref(false);
    const router = useRouter();
    const settings = () => {
      router.push("/section_settings");
    };
    return { section, settings };
  },
};
</script>

<style lang="scss" scoped></style>
