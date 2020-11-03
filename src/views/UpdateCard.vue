<template>
  <div>
    <form v-on:submit.prevent="handleUpdateCard" class="card-form">
      <input
        type="text"
        placeholder="Card Name"
        v-model="card.title"
        class="card-form__input"
      />
      <input
        type="number"
        min="0"
        max="100"
        v-model="card.score"
        class="card-form__input"
      />
      <Inputs :fields="card.tasks" @handleTaskData="updateTaskData" />
      <button type="button" class="card-form__button" @click="$router.go(-1)">
        Back
      </button>
      <button class="card-form__button">
        Update Card
      </button>
    </form>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import Inputs from '@/components/Inputs';

export default {
  name: 'UpdateCard',
  components: {
    Inputs,
  },
  data() {
    return {
      card: {
        title: '',
        score: 0,
        tasks: [],
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

    updateTaskData(e) {
      this.card.tasks = e.val;
    },

    handleUpdateCard() {
      this.updateCard({
        id: this.card.id,
        title: this.card.title,
        score: this.card.score,
        tasks: this.card.tasks,
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
    margin-top: 30px;
  }
}
</style>
