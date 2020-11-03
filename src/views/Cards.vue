<template>
  <div>
    <button class="action-button" @click="createCard">create</button>
    <div class="card-list">
      <div v-for="card in cards" :key="card.id" class="card">
        <div class="card-actions">
          <button
            class="card-actions__button card-actions__button--primary"
            @click="handleUpdate(card)"
          >
            Update
          </button>
          <button
            class="card-actions__button card-actions__button--danger"
            @click="handleDelete(card.id)"
          >
            Delete
          </button>
        </div>
        <div class="card-header">
          <p class="card-header__title">{{ card.title }}</p>
          <span
            class="card-header__badge"
            :class="
              card.score > 60
                ? 'card-header__badge--excellent'
                : card.score > 30
                ? 'card-header__badge--good'
                : 'card-header__badge--normal'
            "
          >
            {{ card.score }}
          </span>
        </div>

        <div class="task-list" v-for="task in card.tasks" :key="task.id">
          <p class="task-list__item">{{ task.content }}</p>
        </div>
        <SliderComponent :score="card.score" :isEdit="isEdit" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import SliderComponent from '@/components/Slider';

export default {
  name: 'Cards',
  components: {
    SliderComponent,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      isEdit: true,
    };
  },
  computed: {
    ...mapGetters('cards', ['cards']),
  },
  methods: {
    ...mapActions('cards', ['deleteCard']),

    createCard() {
      this.$router.push('/create');
    },

    handleUpdate(card) {
      this.$router.push({ name: 'update', params: { id: card.id } });
    },

    handleDelete(id) {
      this.deleteCard(id);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
.action-button {
  width: 100%;
  max-width: 150px;
  height: 50px;
  border-radius: 7px;
  background-color: #007bff;
  color: #ffffff;
  border-color: transparent;
  text-transform: uppercase;
}
.card-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .card {
    border: 1px solid #3535353d;
    border-radius: 5px;
    box-shadow: 0px 5px 8px 0px rgba(43, 41, 42, 0.76);
    margin: 30px;
    padding: 30px;
    max-width: 200px;
    width: 100%;
    &-actions {
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-transform: uppercase;
      &__button {
        padding: 5px 10px;
        color: #ffffff;
        font-size: 12px;
        border-color: transparent;
        border-radius: 5px;
        text-transform: uppercase;
        &--primary {
          background-color: #007bff;
        }
        &--danger {
          background-color: red;
        }
      }
    }
    &-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      &__title {
        font-size: 14px;
        font-weight: bold;
        white-space: nowrap;
        max-width: 150px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      &__badge {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        height: 30px;
        color: #ffffff;
        font-size: 12px;
        &--excellent {
          background-color: green;
          border-radius: 15px;
        }
        &--good {
          background-color: #007bff;
          border-radius: 10px;
        }
        &--normal {
          background-color: red;
        }
      }
    }
  }
  .task-list {
    &__item {
      font-size: 12px;
    }
  }
}
</style>
