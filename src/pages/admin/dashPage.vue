<template>
  <q-page class="flex" padding>
    <transition> </transition>
    <dashComponent
      :number="etudiantStore.etudiant.length"
      name="etudiant"
      icon="man"
    />
    <dashComponent
      :number="enseignantStore.enseignant.length"
      name="enseignant"
      icon="man"
    />
    <dashComponent
      :number="survStore.surveillant.length"
      name="surveillant"
      icon="face"
    />
    <dashComponent :number="coursStore.cours.length" name="Cours" icon="book" />
  </q-page>
</template>

<script>
import dashComponent from "../../components/dashComponent.vue";
import { ref } from "vue";
import { useEtudiant } from "../../stores/etudiant";
import { useEnseignant } from "../../stores/enseignant";
import { useCours } from "../../stores/cours";
import { useSurveillant } from "../../stores/surveillant";
import { useQuasar } from "quasar";
import axios from "axios";
export default {
  beforeCreate() {
    const etudiantStore = useEtudiant();
    const enseignantStore = useEnseignant();
    const survStore = useSurveillant();
    const coursStore = useCours();
    const $q = useQuasar();
    //get etudiant
    axios.get("http://localhost/chris/etudiant/all/").then((res) => {
      if (res.data.message) {
        $q.notify({
          message: res.data.message + "dans la table etudiant",
          icon: "man",
          iconColor: "white",
          iconSize: 200,
        });
      } else {
        etudiantStore.checkstate(res.data.response);
      }
    });
    //get enseignant
    axios.get("http://localhost/chris/enseignant/all/").then((res) => {
      if (res.data.message) {
        $q.notify({
          message: res.data.message + " dans la table enseignant",
          icon: "man",
          iconColor: "white",
          iconSize: 200,
        });
      } else {
        enseignantStore.setState(res.data.response);
      }
    });
    //get cours
    axios.get("http://localhost/chris/cours/all/").then((res) => {
      if (res.data.message) {
        $q.notify({
          message: res.data.message + " dans la table cours",
          icon: "book",
          iconColor: "white",
          iconSize: 200,
        });
      } else {
        coursStore.setState(res.data.response);
      }
    });
    //get surveillant
    axios.get("http://localhost/chris/surveillant/all/").then((res) => {
      if (res.data.message) {
        $q.notify({
          message: res.data.message + " dans la table surveillant",
          icon: "book",
          iconColor: "white",
          iconSize: 200,
        });
      } else {
        survStore.setState(res.data.response);
      }
    });
  },
  created() {},
  components: { dashComponent },
  setup() {
    const etudiantStore = useEtudiant();
    const enseignantStore = useEnseignant();
    const coursStore = useCours();
    const survStore = useSurveillant();
    return {
      etudiantStore,
      enseignantStore,
      coursStore,
      survStore,
    };
  },
};
</script>

<style lang="scss" scoped></style>
