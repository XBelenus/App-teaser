<template>
        <div class="messagerie_ws_module">
            <div>
        <span class="status"></span>
        <div class="peer_selector">
            <input type="text" id="distant_id"> <button id="data_connect">connect</button>
        </div>
        <div class="messagerie_text">
            <span id="disconnect_btn"><a href="#">Disconnect</a></span>
            <div>
                <ul id="messages"></ul>
            </div>
            <textarea type="text" id="text" rows=3 cols=50 placeholder="Send message"></textarea>
            <input id="send" type="submit" value="Send">
        </div>
    </div>
        </div>
</template>

<script>
export default {
  name: 'messagerieWsModule'
}
</script>
