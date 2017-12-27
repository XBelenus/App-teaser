<template>
        <div class="todo_list">
            <label for="addElement">What to do?</label>
                <textarea name="addElement" id="addElement" cols="30" rows="10"></textarea>
            <button @click="addElFunc()">ajouter</button>
            <ul>
                <li v-for="elem in elementsList">{{ elem }}</li>
            </ul>
        </div>
</template>

<script>
    export default {
      name: 'todoList',
      data: function () {
        return {
          elementsList: []
        }
      },
      methods: {
        addElFunc () {
          let text = document.querySelector('#addElement').value
          if (text !== 'null' || text !== 'undefined') {
            console.log(text)
            this.elementsList.push(text)
            console.log(this.elementsList)
          }
        }
      }
    }
</script>

<style>
    .todo_list{
        display: flex;
        flex-direction: column-reverse;
        width:57vw;
        height: inherit;
        position:absolute;
        bottom:0;
    }
</style>