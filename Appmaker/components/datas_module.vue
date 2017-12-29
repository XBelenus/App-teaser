<template>
        <div class="datas_module">
            <span class="status"></span>
        <div class="peer_selector">
            <input type="text" id="distant_id"> <button id="data_connect">connect</button>
        </div>
        <div class="files_element">
            <p>send file:</p>
            <input type="file" id="sendFiles" multiple>
            <br>
            <button class="disconnect">disconnect</button>
        </div>
    </div>
</template>

<script>
    export default {
      name: 'datasModule'
    }
</script>

<style>
    .datas_module{
    }
</style>