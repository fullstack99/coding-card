<template>
  <div class="slider-container">
    <input
      type="range"
      class="slider-container__input"
      min="1"
      max="100"
      :value="score"
      :disabled="isEdit"
      readonly="1"
    />
    <output
      class="slider-container__output"
      :class="
        score > 60
          ? 'slider-container__output--excellent'
          : score > 30
          ? 'slider-container__output--good'
          : 'slider-container__output--normal'
      "
      :style="{ left: score + '%' }"
    >
      {{ score }}
    </output>
  </div>
</template>
<script>
export default {
  name: 'Slider',
  props: {
    score: Number,
    isEdit: Boolean,
  },
};
</script>
<style lang="scss" scoped>
.slider-container {
  position: relative;
  margin: 0 auto 30px;
  &__input {
    width: 100%;
  }
  &__output {
    color: white;
    position: absolute;
    border-radius: 4px;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    font-size: 12px;
    &--excellent {
      background-color: green;
    }
    &--good {
      background-color: #007bff;
    }
    &--normal {
      background-color: red;
    }
  }
}
</style>
