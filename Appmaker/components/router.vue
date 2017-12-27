<template>
    <div class="router">
        <div>
            <router-link to="/">OK</router-link>
        </div>
    </div>
</template>

<script>
    export default{
      name: 'router'
    }
</script>
<style>
    .router a{
        background-color: green;
    }
    .router{
        display: flex;
        padding: 8px;
    }
</style>