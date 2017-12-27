<template>
        <div class="options_bar">
            <button id='btn' @click="creeModule()">Create!!</button>
            <div class="optimal">
            </div>
        </div>
</template>

<script>
export default {
  name: 'optionsBar',
  components: {},
  methods: {
    creeModule () {
      this.menubruh = !(this.menubruh)
    }
  },
  data: function () {
    return {
      menubruh: false,
      optimal: ''
    }
  }
}
</script>
