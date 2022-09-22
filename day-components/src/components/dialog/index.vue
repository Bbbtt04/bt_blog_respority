<script setup lang="ts">
defineProps({
  show: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  },
  message: {
    type: String,
    default: ''
  },
  close: {
    type: Function,
    default: function e(fn: Function) {
      fn()
    }
  }
})
const emit = defineEmits(['update:show'])
const handleClick = () => {
  emit('update:show', false)
}
</script>

<template>
  <div v-if="show" class="dialog-mask flex-center">
    <div class="dialog-box">
      <div class="dialog-header">{{title}}</div>
      <div class="dialog-content">{{message}}</div>
      <div class="dialog-footer">
        <button class="button" @click="close(handleClick)">确定</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.dialog-mask {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.dialog-box {
  background-color: #fff;
  width: 300px;
  border-radius: 10px;
  overflow: hidden;

  .dialog-header {
    padding-top: 20px;
    font-weight: bold;
    text-align: center;
  }

  .dialog-content {
    padding: 5px 20px 20px 20px;
    font-size: 12px;
    text-align: center;
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  .dialog-footer {
    display: flex;
    overflow: hidden;
    user-select: none;
    border-top: 1px solid #EBEDF0;

    .button {
      color: rgb(67, 103, 186);
      text-align: center;
      width: 100%;
      line-height: 40px;
      background-color: #fff;
      border: none;
    }

    .button:active {
      background-color: #f2f3f5;
    }
  }
}
</style>
