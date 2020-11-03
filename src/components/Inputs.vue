<template>
  <div class="task-list">
    <h3>Tasks</h3>
    <template v-for="(field, index) in tasks">
      <div class="task" :key="index">
        <input
          type="text"
          placeholder="Task Name"
          v-model="field.content"
          class="task__input"
        />
        <div class="task__button-groups">
          <button
            type="button"
            @click="deleteField(index)"
            class="task__button task__button--remove"
          >
            -
          </button>
          <button
            type="button"
            @click="addField(index)"
            v-show="tasks.length - 1 === index"
            class="task__button task__button--add"
          >
            +
          </button>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
      tasks: [],
    };
  },
  props: {
    fields: Array,
    disabled: Boolean,
  },
  watch: {
    tasks: {
      deep: true,
      handler: function(val) {
        this.$emit('handleTaskData', { val });
      },
    },
  },
  methods: {
    addField: function(index) {
      this.tasks.splice(index + 1, 0, { content: '', id: ++this.index });
    },
    deleteField: function(index) {
      if (this.tasks.length > 1) {
        this.tasks.splice(index, 1);
      }
    },
  },
  created() {
    this.tasks =
      this.fields.length > 0
        ? [...this.fields]
        : [{ content: '', id: this.index }];
  },
};
</script>

<style lang="scss" scoped>
.task-list {
  width: 100%;
  .task {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    &__input {
      width: 70%;
      max-width: 250px;
      height: 40px;
    }
    &__button-groups {
      width: 30%;
    }
    &__button {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border-color: transparent;
      color: #ffffff;
      &--add {
        background-color: #007bff;
        margin-left: 10px;
      }
      &--remove {
        background-color: #dc3545;
      }
    }
  }
}
</style>
