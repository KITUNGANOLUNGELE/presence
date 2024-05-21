<template>
  <q-header>
    <div class="div_header bg-blue-4 flex flex-center">
      <h5><b>GESTION PRESENCE</b></h5>
    </div>
  </q-header>
  <q-page class="cont row">
    <div class="col-10 col-md-10 col-sm-12 col flex flex-center">
      <div class="cont_form">
        <h4>Login</h4>
        <q-form @submit.prevent="onSubmit" class="q-gutter-md">
          <q-input
            v-model="login"
            type="mail"
            label="user name"
            color="blue-4"
          />
          <q-input
            v-model="pass"
            type="password"
            label="Pass word"
            color="blue-4"
          />
          <div class="form_tag">
            <q-btn con="check" label="login" type="submit" color="primary" />
          </div>
        </q-form>
      </div>
    </div>
  </q-page>
</template>

<script>
import { QForm, useQuasar } from "quasar";
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { useEnseignant } from "../../stores/enseignant";
import { useEtudiant } from "../../stores/etudiant";
import { useSurveillant } from "../../stores/surveillant";
import axios from "axios";
export default defineComponent({
  name: "FormConnection",
  setup() {
    const router = useRouter();
    const login = ref("");
    const pass = ref("");
    const $q = useQuasar();
    function onSubmit() {
      let f = new FormData();
      f.append("mail", login.value);
      f.append("pass", pass.value);
      $q.loading.show({
        message: "Loading",
        messageColor: "primary",
        spinnerColor: "blue-4",
      });
      axios
        .post("https://gestpresence.000webhostapp.com/chris/user/login/", f)
        .then((data) => {
          if (data.data.role == "su") {
            localStorage.setItem("user", data.data.response.mai);
            localStorage.setItem("role", data.data.role);
            router.replace("/home");
          } else if (data.data.role == "enseignant") {
            localStorage.setItem("user", data.data.response.mail);
            localStorage.setItem("userId", data.data.response.id);
            localStorage.setItem("role", data.data.role);
            router.replace("/enseignant");
          } else if (data.data.role == "etudiant") {
            localStorage.setItem("user", data.data.response.mail);
            localStorage.setItem("userId", data.data.response.id);
            localStorage.setItem("role", data.data.role);
            localStorage.setItem("id_prom", data.data.response.id_promotion);
            router.replace("/etudiant_vue");
          } else if (data.data.role == "surveillant") {
            localStorage.setItem("user", data.data.response.mail);
            localStorage.setItem("userId", data.data.response.id);
            localStorage.setItem("role", data.data.role);
            router.replace("/surveillant_vue");
          } else {
            $q.notify({
              message: data.data.message,
              color: "white",
              textColor: "red",
              icon: "error",
              iconColor: "red",
            });
          }
          $q.loading.hide();
        });
      login.value = "";
      pass.value = "";
    }
    return { onSubmit, login, pass };
  },
});
</script>

<style lang="css" scoped>
.cont {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.cont_form {
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
  justify-content: center;
  background-color: rgb(248, 246, 246);
  box-shadow: 6px 6px 6px black;
  border-radius: 6px;
}

form {
  width: 70%;
}

.form_tag {
  text-align: center;
  margin: 10px 0px;
}

.div_header {
  width: 100%;
  height: 30vh;
}

@media only screen and (max-width: 600px) {
  .cont_form {
    width: 90%;
  }
}
</style>
