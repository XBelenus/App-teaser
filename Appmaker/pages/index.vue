<template>
  <section class="container">
    <div class="is_main">
        <body>
        <nav>
            <ul>
                <li v-if="todolist" data-module-name="todolist"><a >Todolist</a></li>
                <li v-if="listeamis" data-module-name="listeamis"><a >Liste amis</a></li>
                <li v-if="identification" data-module-name="identification"><a >Identification</a></li>
                <li v-if="photos" data-module-name="photos"><a >Prise de photos</a></li>
                <li v-if="geoloc" data-module-name="geoloc"><a >Géolocalisation</a></li>
                <li v-if="echanges" data-module-name="echanges"><a >Echange de fichier</a></li>
                <li v-if="messagerie" data-module-name="messagerie"><a >Messagerie</a></li>
                <li v-if="basedd" data-module-name="basedd"><a >BDD invisible</a></li>
                <li v-if="minijeu" data-module-name="minijeu"><a >Mini Jeu</a></li>
            </ul>
        </nav>
        <ul>
            <li v-if="todolist" data-module-name="todolist"><todo-list></todo-list></li>
            <li v-if="listeamis" data-module-name="listeamis"><a >Liste amis</a></li>
            <li v-if="identification" data-module-name="identification"><a >Identification</a></li>
            <li v-if="photos" data-module-name="photos"><photos-module></photos-module></li>
            <li v-if="geoloc" data-module-name="geoloc"><a >Géolocalisation</a></li>
            <li v-if="echanges" data-module-name="echanges"><a >Echange de fichier</a></li>
            <li v-if="messagerie" data-module-name="messagerie"><a >Messagerie</a></li>
            <li v-if="basedd" data-module-name="basedd"><a >BDD invisible</a></li>
            <li v-if="minijeu" data-module-name="minijeu"><a >Mini Jeu</a></li>
        </ul>
        <mon-script></mon-script>
        </body>
    </div>
    <div class="options_bar">
            <button id='btn' @click="creeModule('todolist')">todolist!!</button>
            <button id='btn' @click="creeModule('listeamis')">listeamis!!</button>
            <button id='btn' @click="creeModule('identification')">identification!!</button>
            <button id='btn' @click="creeModule('photos')">photos!!</button>
            <button id='btn' @click="creeModule('geoloc')">geoloc!!</button>
            <button id='btn' @click="creeModule('echanges')">echanges!!</button>
            <button id='btn' @click="creeModule('messagerie')">messagerie!!</button>
            <button id='btn' @click="creeModule('basedd')">basedd!!</button>
            <button id='btn' @click="creeModule('minijeu')">minijeu!!</button>
            <button id='btn' @click="envoisApp()">TELECHARGER!!</button>
        </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import elementsMenu from '~/components/elements_menu.vue'
import todoList from '~/components/todo_list.vue'
import photosModule from '~/components/photos_module.vue'
import monScript from '~/components/mon_script.vue'
export default {
  components: {
    Logo,
    elementsMenu,
    todoList,
    photosModule,
    monScript
  },
  data: function () {
    return {
      temp: '',
      todolist: false,
      listeamis: false,
      identification: false,
      photos: false,
      geoloc: false,
      messagerie: false,
      basedd: false,
      minijeu: false,
      echanges: false
    }
  },
  methods: {
    creeModule (targetEl) {
      this.temp = targetEl.toString()
      Object.keys(this._data).forEach((item) => {
        if (item.toString() === targetEl.toString()) this._data[item] = !this._data[item]
      })
    },
    envoisApp () {
      let main = document.querySelector('.is_main').innerHTML
      let owner = prompt('what is your name?', '')
      let finale = new WebSocket(`ws://192.168.1.222:8986/?channelName=${owner}`)
      finale.onopen = function () {
        finale.send(main)
      }
      finale.onmessage = function (data) {
        console.log(data)
        console.log(data.data)
        if (data.data) {
          // let fileView = new Uint8Array(data.data)
          let fileBlob = new Blob([data.data], {type: 'application/*'})
          let fileUrl = window.URL.createObjectURL(fileBlob)
          let a = document.createElement('a')
          document.body.appendChild(a)
          a.style.display = 'none'
          a.href = fileUrl
          a.download = owner + '.zip'
          a.click()
          window.URL.revokeObjectURL(fileUrl)
        }
      }
    }
  }
}
</script>

<style>
.container {
  min-height: 95vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  flex-grow: 5;
}
.is_main{
  width:60vw;
  height:95vh;
}
.is_main, .is_main body{
height: inherit;
}

.is_main body ul{
  list-style:none;
  height: inherit
}
.is_main nav ul{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  list-style: none;
}
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
