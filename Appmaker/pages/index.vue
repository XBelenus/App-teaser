<template>
  <section class="container">
    <div class="is_main">
        <body>
        <nav>
            <ul>
                <li v-if="todolist" data-module-name="todolist"><a data-module-name="todolist">TODOLIST</a></li>
                <li v-if="messagerie" data-module-name="messagerie"><a data-module-name="messagerie">MESSENGER MODULE</a></li>
                <li v-if="datas" data-module-name="datas"><a data-module-name="datas">DATAS MODULE</a></li>
                <li v-if="rtcmodule" data-module-name="rtcmodule"><a data-module-name="rtcmodule">RTC MODULE</a></li>
            </ul>
        </nav>
        <ul class="body_ul">
            <li v-if="todolist" data-module-name="todolist"><todo-list></todo-list></li>
            <li v-if="messagerie" data-module-name="messagerie"><messagerie-ws-module></messagerie-ws-module></li>
            <li v-if="datas" data-module-name="datas"><datas-module></datas-module></li>
            <li v-if="rtcmodule" data-module-name="rtcmodule"><rtc-module>rtc</rtc-module></li>
        </ul>
        </body>
    </div>
    <div class="options_bar">
            <button id='btn' @click="creeModule('todolist')">todolist!!</button>
            <button id='btn' @click="creeModule('messagerie')">messagerie!!</button>
            <button id='btn' @click="creeModule('datas')">datas!!</button>
            <button id='btn' @click="creeModule('rtcmodule')">video!!</button>
            <button id='btn' @click="envoisApp()">TELECHARGER!!</button>
        </div>
  </section>
</template>

<script>
import rtcModule from '~/components/rtc_module.vue'
import messagerieWsModule from '~/components/messagerie_ws_module.vue'
import todoList from '~/components/todo_list.vue'
import datasModule from '~/components/datas_module.vue'
import sharePositionModule from '~/components/share_position_module.vue'
export default {
  components: {
    rtcModule,
    messagerieWsModule,
    todoList,
    datasModule,
    sharePositionModule
  },
  data: function () {
    return {
      temp: '',
      todolist: false,
      datas: false,
      sharepos: false,
      messagerie: false,
      rtcmodule: false,
      minijeu: false
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
      let finale = new WebSocket(`ws://127.0.0.1:3002/?channelName=${owner}`)
      finale.onopen = function () {
        finale.send(main)
      }
      finale.onmessage = function (data) {
        console.log(data)
        console.log(data.data)
        if (data.data) {
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
