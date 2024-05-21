<template>
  <div class="flex">
    <dashComponent :name="name" :icon="icon" @click="confirm = !confirm" />
    <dashComponent name="Enseignant" :icon="icon" @click="ens = !ens" />
    <dashComponent name="surveillant" :icon="icon" @click="surv = !surv" />
    <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar :icon="icon" color="primary" text-color="white" />
          <span class="q-ml-sm">Vous allez enregistrer un etudiant</span>
        </q-card-section>
        <q-card-section>
          <EtudiantForm />
        </q-card-section>
        <q-card-actions align="center">
          <q-btn flat label="Fermer" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="ens" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar :icon="icon" color="primary" text-color="white" />
          <span class="q-ml-sm">Vous allez enregistrer un enseignant</span>
        </q-card-section>
        <q-card-section>
          <EnseignantForm />
        </q-card-section>
        <q-card-actions align="center">
          <q-btn flat label="Fermer" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="surv" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="face" color="primary" text-color="white" />
          <span class="q-ml-sm">Vous allez enregistrer un surveillant</span>
        </q-card-section>
        <q-card-section>
          <survForm />
        </q-card-section>
        <q-card-actions align="center">
          <q-btn flat label="Fermer" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import EtudiantForm from "../Form/EtudiantForm.vue";
import EnseignantForm from "../Form/EnseignantForm.vue";
import survForm from "../Form/survForm.vue";
import dashComponent from "../../components/dashComponent.vue";
import { usePromotion } from "../../stores/promotion";
import { useEnseignant } from "../../stores/enseignant";
import { ref } from "vue";
import axios from "axios";
export default {
  components: { EtudiantForm, dashComponent, EnseignantForm, survForm },
  beforeCreate() {
    //get promotion
    const prom = usePromotion();
    axios
      .get("https://gestpresence.000webhostapp.com/chris/promotion/all/")
      .then((res) => {
        if (res.data.message) {
          prom.setState([]);
        } else {
          prom.setState(res.data.response);
        }
      });
  },
  created() {},
  setup() {
    const name = ref("etudiant");
    const icon = ref("man");
    const confirm = ref(false);
    const ens = ref(false);
    const surv = ref(false);
    return { name, icon, confirm, ens, surv };
  },
};
</script>

<style lang="scss" scoped></style>
