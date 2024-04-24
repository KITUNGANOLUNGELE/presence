<template>
  <div>
    <p><q-icon :name="icon" color="blue-7" class="ico" /></p>
    <p v-if="number > 0">{{ number }}</p>
    <p>
      {{
        parseInt(number) > 1 && number != null && name[name.length - 1] != "s"
          ? name + "s"
          : name
      }}
    </p>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "dashComponent",
  props: {
    number: {
      type: Number,
      default: 0,
    },
    name: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
  },
});
</script>

<style lang="css" scoped>
div {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  height: 20vh;
  margin-top: 5%;
  margin-bottom: 3%;
  border: 3px solid skyblue;
  border-radius: 7px;
  font-family: montserrat;
  font-size: 120%;
  margin-left: 5%;
  font-weight: bold;
  box-shadow: 6px 6px 6px skyblue;
}
div:hover {
  animation: anim 0.5s;
  background: skyblue;
  color: white;
  font-weight: bold;
  font-size: 150%;
}
@media only screen and (max-width: 800px) {
  div {
    margin: auto;
    width: 80%;
    margin-top: 1%;
  }
}
@keyframes anim {
  from {
    background: white;
    color: black;
  }
  to {
    background: skyblue;
    color: white;
    transform: translate(1%, 1%);
  }
}
</style>
