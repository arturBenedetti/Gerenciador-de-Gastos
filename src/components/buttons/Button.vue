<template>
  <button 
    :class="buttonClass" 
    :style="buttonStyle" 
    @click="handleClick"
  >
    <slot>{{ label }}</slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    label: {
      type: String,
      default: 'Click here',
    },
    color: {
      type: String,
      default: '#00B5AD', // Cor padrão em hexadecimal (Teal)
    },
    size: {
      type: String,
      default: 'medium',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    buttonClass: {
      type: String,
      default: '',
    },
    buttonStyle: {
      type: Object,
      default: () => ({})
    },
  },
  computed: {
    buttonClass() {
      return {
        'btn': true,
        [`btn-${this.size}`]: true,
        'btn-disabled': this.disabled,
        [this.buttonClass]: this.buttonClass,
      };
    },
    buttonStyle() {
      return {
        backgroundColor: this.disabled ? '#808080' : this.color, // Se desabilitado, usa a cor grey
        ...this.buttonStyle, // Mantém as demais propriedades de estilo passadas como parâmetro
      };
    },
  },
  methods: {
    handleClick() {
      if (!this.disabled) {
        this.$emit('click');
      }
    },
  },
};
</script>

<style scoped>
.btn {
  padding: 10px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.1s ease, filter 0.1s ease; /* Suaviza a transição do hover */
}

.btn-small {
  font-size: 12px;
  padding: 5px 10px;
}

.btn-medium {
  font-size: 16px;
  padding: 10px 20px;
}

.btn-large {
  font-size: 20px;
  padding: 15px 30px;
}

.btn-disabled {
  background-color: grey;
  cursor: not-allowed;
}

.btn:hover {
  filter: brightness(70%);
}
</style>
