<template>
  <div>
    <form v-on:submit.prevent="handleCreateCard" class="card-form">
      <input
        type="text"
        placeholder="Card Name"
        v-model="formData.card"
        class="card-form__input"
        required
      />
      <input
        type="number"
        min="0"
        max="100"
        v-model="formData.score"
        class="card-form__input"
      />
      <Inputs :fields="formData.tasks" @handleTaskData="addTaskData" />
      <button type="button" class="card-form__button" @click="$router.go(-1)">
        Back
      </button>
      <button type="submit" class="card-form__button">
        Create Card
      </button>
    </form>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
import Inputs from '@/components/Inputs';

export default {
  name: 'CreateCard',
  components: {
    Inputs,
  },
  data() {
    return {
      formData: {
        card: '',
        score: 0,
        tasks: [],
      },
    };
  },
  methods: {
    ...mapActions('cards', ['createCard']),

    handleCreateCard() {
      this.createCard({
        title: this.formData.card,
        score: parseInt(this.formData.score),
        tasks: this.formData.tasks,
      });
    },
    addTaskData(e) {
      this.formData.tasks = e.val;
    },
  },
};
</script>
<style lang="scss" scoped>
.card-form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &__input {
    width: 100%;
    max-width: 300px;
    height: 40px;
    margin: 10px;
    border-radius: 5px;
    border: 1px solid #3d3d3d;
    padding-left: 10px;
  }
  &__button {
    width: 100%;
    max-width: 200px;
    height: 50px;
    border-radius: 7px;
    border-color: transparent;
    background-color: #007bff;
    color: #ffffff;
    text-transform: uppercase;
    margin-top: 30px;
  }
}
</style>
