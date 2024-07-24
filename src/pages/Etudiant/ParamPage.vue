<template>
  <div class="flex flex-center q-mt-lg">
    <q-form @submit.prevent="enregistrer" class="q-gutter-md">
      <p class="text-h6">Modification de mot de passe pour {{ email }}</p>
      <q-input v-model="mdp" type="password" label="Mot de passe" />
      <q-input v-model="vmdp" type="password" label="Confirmer mot de passe" />
      <div style="width: fit-content; height: fit-content; margin: auto">
        <q-btn
          class="q-mt-lg"
          color="primary"
          label="Enregistrer"
          icon="edit"
          dense
          @click="enregistrer"
        />
      </div>
    </q-form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useQuasar } from "quasar";
import { useEtudiant } from "../../stores/etudiant";
import { useRouter } from "vue-router";
export default {
  setup() {
    const email = localStorage.getItem("user");
    const mdp = ref("");
    const vmdp = ref("");
    const $q = useQuasar();
    const et = useEtudiant();
    const router = useRouter();
    //Enregistrer
    const enregistrer = () => {
      if (
        mdp.value.length > 0 &&
        vmdp.value.length > 0 &&
        mdp.value == vmdp.value
      ) {
        if (confirm("Vous allez etre deconnecter apres l'operation")) {
          et.editPass({
            id: localStorage.getItem("userId"),
            pass: mdp.value,
          });
          mdp.value = "";
          vmdp.value = "";
          localStorage.clear();
          router.replace("/");
        }
      } else {
        $q.notify({
          icon: "error",
          message:
            "Remplissez le mot de passe et la confirmation par la même valeur égale",
          color: "black",
          textColor: "amber-1",
        });
      }
    };
    return { email, mdp, vmdp, enregistrer };
  },
};
</script>

<style lang="scss" scoped></style>
