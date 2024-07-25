<template>
  <div padding>
    <div
      v-if="et.etudiant.length == 0"
      style="margin: auto; width: fit-content"
    >
      <b style="color: red">Aucun étudiant disponible pour cette promotion</b>
    </div>
    <q-card
      class="my-card"
      v-for="item in et.etudiant"
      :key="item.id"
      style="
        margin-top: 10px;
        width: 50%;
        margin-left: auto;
        margin-right: auto;
      "
    >
      <q-card-section
        style="
          display: flex;
          align-items: center;
          justify-content: space-around;
        "
      >
        <div style="float: left">
          <b
            >{{ item.nom_etudiant }} {{ item.postnom_etudiant }}
            {{ item.prenom_etudiant }}</b
          >
        </div>
        <div style="float: right">
          <!-- <q-btn
            color="primary"
            icon="edit"
            @click="
              updateP({
                id: item.id,
                design: item.nom_promotion,
                id_option: item.id_option,
              })
            "
            flat
          /> -->
          <q-btn color="negative" icon="delete" @click="deleteEt(item)" flat />
          <q-dialog v-model="open">
            <q-card>
              <q-card class="my-card">
                <q-card-section>
                  <q-input v-model="design" type="text" label="Label" />
                  <q-btn
                    style="
                      margin-top: 10px;
                      margin-left: auto;
                      margin-right: auto;
                    "
                    color="primary"
                    icon="check"
                    label="update"
                    @click="update"
                  />
                </q-card-section>
              </q-card>
            </q-card>
          </q-dialog>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import EtudiantForm from "../Form/EtudiantForm.vue";
import EnseignantForm from "../Form/EnseignantForm.vue";
import survForm from "../Form/survForm.vue";
import dashComponent from "../../components/dashComponent.vue";
import { usePromotion } from "../../stores/promotion";
import { useEtudiant } from "../../stores/etudiant";
import { ref } from "vue";
import axios from "axios";
import { useQuasar } from "quasar";
export default {
  beforeCreate() {
    //get promotion
    // axios.get("https://gestpresence.000webhostapp.com/chris/promotion/all/").then((res) => {
    //   if (res.data.message) {
    //     prom.setState([]);
    //   } else {
    //     prom.setState(res.data.response);
    //   }
    // });
  },
  created() {},
  setup() {
    const q = useQuasar();
    const show = () => {
      q.loading.show({
        html: true,
        message: '<p style="color=yellow;"> loading ...</p>',
        spinnerColor: "amber-10",
      });
    };
    const et = useEtudiant();
    const deleteEt = (s) => {
      show();
      et.delete(s).then((res) => {
        console.log(res.data);
        q.loading.hide();
        et.etudiant = et.etudiant.filter((e) => e.id != s.id);
      });
    };
    return { et, deleteEt };
  },
};
</script>

<style lang="scss" scoped></style>
