<template>
  <div>
    <form v-on:submit.prevent="handleUpdateCard" class="card-form">
      <input type="text" v-model="card.title" class="card-form__input" />
      <input
        type="number"
        min="0"
        max="100"
        v-model="card.score"
        class="card-form__input"
      />
      <button class="card-form__button">
        Update Card
      </button>
    </form>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'UpdateCard',
  data() {
    return {
      card: {
        title: '',
        score: 0,
      },
    };
  },
  computed: {
    ...mapGetters('cards', ['cards']),
  },
  created() {
    const { id } = this.$route.params;
    this.cards.forEach((card) => {
      if (card.id === id) {
        this.card = { ...card };
        return;
      }
    });
  },
  methods: {
    ...mapActions('cards', ['updateCard']),

    handleUpdateCard() {
      this.updateCard({
        id: this.card.id,
        title: this.card.title,
        score: this.card.score,
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
    background-color: #007bff;
    border-color: transparent;
    color: #ffffff;
    text-transform: uppercase;
  }
}
</style>
