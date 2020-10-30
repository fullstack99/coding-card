<template>
  <div class="card-list">
    <div v-for="card in cards" :key="card.id" class="card">
      <div class="card__header">
        <p class="card__title">{{ card.title }}</p>
        <span
          class="card__badge"
          :class="
            card.score > 60
              ? 'card__badge--excellent'
              : card.score > 30
              ? 'card__badge--good'
              : 'card__badge--normal'
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
</template>

<script>
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
      cards: [
        {
          title: 'test',
          id: 1,
          score: 90,
          tasks: [
            {
              id: 1,
              content: 'test1',
            },
            {
              id: 2,
              content: 'test2',
            },
            {
              id: 3,
              content: 'test3',
            },
          ],
        },
        {
          title: 'test2',
          id: 2,
          score: 30,
          tasks: [
            {
              id: 1,
              content: 'test1',
            },
            {
              id: 2,
              content: 'test2',
            },
            {
              id: 3,
              content: 'test3',
            },
          ],
        },
        {
          title: 'test3',
          id: 3,
          score: 50,
          tasks: [
            {
              id: 1,
              content: 'test1',
            },
            {
              id: 2,
              content: 'test2',
            },
            {
              id: 3,
              content: 'test3',
            },
          ],
        },
        {
          title: 'test4',
          id: 4,
          score: 70,
          tasks: [
            {
              id: 1,
              content: 'test1',
            },
            {
              id: 2,
              content: 'test2',
            },
            {
              id: 3,
              content: 'test3',
            },
          ],
        },
        {
          title: 'test5',
          id: 5,
          score: 0,
          tasks: [
            {
              id: 1,
              content: 'test1',
            },
            {
              id: 2,
              content: 'test2',
            },
            {
              id: 3,
              content: 'test3',
            },
          ],
        },
      ],
      isEdit: true,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
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
    max-width: 150px;
    width: 100%;
    &__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &__title {
      font-size: 14px;
      font-weight: bold;
    }
    &__badge {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      color: #ffffff;
      &--excellent {
        background-color: green;
        border-radius: 15px;
      }
      &--good {
        background-color: blue;
        border-radius: 10px;
      }
      &--normal {
        background-color: red;
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
