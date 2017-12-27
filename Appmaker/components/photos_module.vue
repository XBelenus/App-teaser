<template>
        <div class="photos_module">
            <form enctype="multipart/form-data" accept="image/*" @submit="handleFile()">
                <input type="file" multiple name="fileuploader" id="fileuploader">
                <button>envois</button>
            </form>
        </div>
</template>

<script>
    export default {
      name: 'photosModule',
      methods: {
        handleFile: function (e) {
          // e.preventDefault()
          let images = document.querySelector('#fileuploader').files
          for (var i = 0; i < images.length; i++) {
            let blob = new Blob([images[i]], {type: 'image/*'})
            this.wsc.wsc.send(blob, {text: 'text'})
          }
        }
      },
      mounted: function () {
      },
      data: function () {
        return {
          wsc: {
            wsc: new WebSocket('ws://127.0.0.1:8887'),
            onopen: function () {
              console.log('WSC Connecté')
            },
            onmessage: function (data) {
              let incblob = new Blob(data, { type: 'image/*' })
              let img = document.createElement('img')
              let url = window.URL.createObjectURL(incblob)
              img.src = url
              document.body.appendChild(img)
            }
          }
        }
      }
    }
</script>

<style>
    .photos_module{

    }
</style>