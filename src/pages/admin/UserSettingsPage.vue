<template>
  <div padding>
    <q-card
      class="my-card"
      v-for="item in promotions"
      :key="item.id"
      style="
        margin-top: 10px;
        width: 50%;
        margin-left: auto;
        margin-right: auto;
      "
      @click="selectP(item)"
    >
      <q-card-section
        style="
          display: flex;
          align-items: center;
          justify-content: space-around;
        "
      >
        <div style="float: left">
          <b>{{ item.nom_promotion }}</b>
        </div>
        <div style="float: right">
          <q-btn
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
          />
          <q-btn
            color="negative"
            icon="delete"
            @click="deleteP(item.id)"
            flat
          />
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
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";
export default {
  beforeCreate() {
    //get promotion
    // axios.get("http://localhost:8080/chris/promotion/all/").then((res) => {
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
    const router = useRouter();
    const promotions = ref([]);
    const prom = usePromotion();
    const open = ref(false);
    const id = ref("");
    const design = ref("");
    const idOpt = ref("");
    const et = useEtudiant();
    //get promotions
    const show = () => {
      q.loading.show({
        html: true,
        message: '<p style="color=yellow;"> loading ...</p>',
        spinnerColor: "amber-10",
      });
    };
    show();
    prom.get_all().then((res) => {
      console.log(res);
      promotions.value = res.response;
      q.loading.hide();
    });
    //delete promotions
    const deleteP = (id) => {
      show();
      prom
        .supprimer({
          id: id,
        })
        .then((res) => {
          prom.get_all().then((res) => {
            console.log(res);
            promotions.value = res.response;
            q.loading.hide();
          });
        });
    };
    //upadate promotion
    const updateP = (s) => {
      open.value = true;
      id.value = s.id;
      design.value = s.design;
      idOpt.value = s.id_option;
    };
    const update = () => {
      show();
      open.value = false;
      prom
        .update({
          id: id.value,
          nom: design.value,
          idOPtion: idOpt.value,
        })
        .then((res) => {
          prom.get_all().then((res) => {
            console.log(res);
            promotions.value = res.response;
            q.loading.hide();
          });
        });
    };
    let selectP = (s) => {
      show();
      et.getByProm(s).then((res) => {
        et.etudiant = res.data.response;
        console.log(et.etudiant);
        q.loading.hide();
        router.push("/etudiant_settings");
      });
    };

    return { promotions, deleteP, updateP, design, id, open, update, selectP };
  },
};
</script>

<style lang="scss" scoped></style>
