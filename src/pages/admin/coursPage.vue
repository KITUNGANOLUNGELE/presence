<template>
  <div class="flex">
    <dashComponent name="Cours" icon="book" @click="cours = !cours" />
    <dashComponent
      name="Enseignement"
      icon="man"
      @click="Enseignement = !Enseignement"
    />
    <dashComponent
      name="Programmer examen"
      icon="alarm"
      @click="exam = !exam"
    />
    <dashComponent
      name="Ajouter une surveillance"
      icon="local_police"
      @click="surv = !surv"
    />
    <q-dialog v-model="cours" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="book" color="primary" text-color="white" />
          <span class="q-ml-sm">Vous allez enregistrer un cours</span>
        </q-card-section>
        <q-card-section>
          <coursForm />
        </q-card-section>
        <q-card-actions align="center">
          <q-btn flat label="Fermer" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="Enseignement" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="book" color="primary" text-color="white" />
          <span class="q-ml-sm">Attribution d'un enseignement</span>
        </q-card-section>
        <q-card-section>
          <enseignForm />
        </q-card-section>
        <q-card-actions align="center">
          <q-btn flat label="Fermer" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="exam" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="book" color="primary" text-color="white" />
          <span class="q-ml-sm">Programmer un examen</span>
        </q-card-section>
        <q-card-section>
          <examForm />
        </q-card-section>
        <q-card-actions align="center">
          <q-btn flat label="Fermer" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="surv" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="book" color="primary" text-color="white" />
          <span class="q-ml-sm">Programmer un examen</span>
        </q-card-section>
        <q-card-section>
          <examSurv />
        </q-card-section>
        <q-card-actions align="center">
          <q-btn flat label="Fermer" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import enseignForm from "../Form/enseignForm.vue";
import coursForm from "../Form/coursForm.vue";
import examForm from "../Form/examForm.vue";
import examSurv from "../Form/examSurv.vue";
import dashComponent from "../../components/dashComponent.vue";
import { usePromotion } from "../../stores/promotion";
import { useEnseignant } from "../../stores/enseignant";
import { useCours } from "../../stores/cours";
import { useEnseignement } from "../../stores/enseignement";
import { useSurveillant } from "../../stores/surveillant";
import { useExamen } from "../../stores/exam";
import { ref } from "vue";
import axios from "axios";
export default {
  components: { coursForm, dashComponent, enseignForm, examForm, examSurv },
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
    //get enseignant
    const enseignant = useEnseignant();
    axios
      .get("https://gestpresence.000webhostapp.com/chris/enseignant/all/")
      .then((res) => {
        if (res.data.message) {
          enseignant.setState([]);
        } else {
          enseignant.setState(res.data.response);
        }
      });
    //get cours
    const cours = useCours();
    axios
      .get("https://gestpresence.000webhostapp.com/chris/cours/all/")
      .then((res) => {
        if (res.data.message) {
          cours.setState([]);
        } else {
          cours.setState(res.data.response);
        }
      });
    //get enseignement
    const enseignement = useEnseignement();
    axios
      .get("https://gestpresence.000webhostapp.com/chris/enseignement/all/")
      .then((res) => {
        if (res.data.message) {
          enseignement.setState([]);
        } else {
          enseignement.setState(res.data.response);
        }
      });
    //get surveillant
    const surveillant = useSurveillant();
    axios
      .get("https://gestpresence.000webhostapp.com/chris/surveillant/all/")
      .then((res) => {
        if (res.data.message) {
          surveillant.setState([]);
        } else {
          surveillant.setState(res.data.response);
        }
      });
    //get examen
    const ex = useExamen();
    axios
      .get("https://gestpresence.000webhostapp.com/chris/examen/all/")
      .then((res) => {
        if (res.data.message) {
          ex.setState([]);
        } else {
          ex.setState(res.data.response);
        }
      });
  },
  beforeUpdate() {
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
    //get enseignant
    const enseignant = useEnseignant();
    axios
      .get("https://gestpresence.000webhostapp.com/chris/enseignant/all/")
      .then((res) => {
        if (res.data.message) {
          enseignant.setState([]);
        } else {
          enseignant.setState(res.data.response);
        }
      });
    //get cours
    const cours = useCours();
    axios
      .get("https://gestpresence.000webhostapp.com/chris/cours/all/")
      .then((res) => {
        if (res.data.message) {
          cours.setState([]);
        } else {
          cours.setState(res.data.response);
        }
      });
    //get enseignement
    const enseignement = useEnseignement();
    axios
      .get("https://gestpresence.000webhostapp.com/chris/enseignement/all/")
      .then((res) => {
        if (res.data.message) {
          enseignement.setState([]);
        } else {
          enseignement.setState(res.data.response);
        }
      });
    //get surveillant
    const surveillant = useSurveillant();
    axios
      .get("https://gestpresence.000webhostapp.com/chris/surveillant/all/")
      .then((res) => {
        if (res.data.message) {
          surveillant.setState([]);
        } else {
          surveillant.setState(res.data.response);
        }
      });
    //get examen
    const ex = useExamen();
    axios
      .get("https://gestpresence.000webhostapp.com/chris/examen/all/")
      .then((res) => {
        if (res.data.message) {
          ex.setState([]);
        } else {
          ex.setState(res.data.response);
        }
      });
  },
  setup() {
    const cours = ref(false);
    const Enseignement = ref(false);
    const exam = ref(false);
    const surv = ref(false);
    return { cours, Enseignement, exam, surv };
  },
};
</script>

<style lang="scss" scoped></style>
