<template>
  <div>
    <form v-on:submit.prevent="handleCreateCard" class="card-form">
      <input type="text" v-model="card" class="card-form__input" />
      <input
        type="number"
        min="0"
        max="100"
        v-model="score"
        class="card-form__input"
      />
      <button class="card-form__button">
        Create Card
      </button>
    </form>
  </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  name: 'CreateCard',
  data() {
    return {
      card: '',
      score: 0,
    };
  },
  methods: {
    ...mapActions('cards', ['createCard']),

    handleCreateCard() {
      this.createCard({
        title: this.card,
        score: parseInt(this.score),
      });
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
  }
}
</style>
