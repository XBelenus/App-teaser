<template>
        <div class="rtc_module">
            <span class="status"></span>
            <div class="peer_selector">
                <input type="text" id="distant_id"> <button id="data_connect">call</button>
            </div>
            <div class="video">
                
                <input type="submit" id="disconnect_btn" value="hangup">
            </div>
    </div>
</template>

<script>
export default {
  name: 'rtcModule'
}
</script>
