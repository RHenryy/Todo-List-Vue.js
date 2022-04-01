<template>
  <div>
    <router-view />
    <div class="titre"> 
  
  <h1>To Do List</h1>
  <h2>Add your tasks down below</h2>
    </div>


  <div class="box">
    <ul>
      
      <li :class="{done:tasks[index].done}" v-for="(item, index) in tasks" :key="index"><input v-model="this.tasks[index].done" type="checkbox" :value="item.name">{{ item.name }} <buttonEdit @edit="edit(index)" :message="message" :tasks="tasks" :editedTask="editedTask" :index="index" /><div><button-delete :tasks="tasks" :index="index" /></div></li>
      
    </ul>
    <input type="text" id="text" placeholder="Enter tasks here" @keyup.enter="$refs.addList.addToList()" v-model="message" autofocus ref="input">
    <div class="flex"><button-add :tasks="tasks" :message="message" :editedTask="editedTask" @update="reset()" ref="addList"/>
    <delete-target :tasks="tasks" :message="message" :editedTask="editedTask" @deleteTarget="notCompleted()" />
    <button class="clear" type="button" @click.prevent="deleteAll()">Clear List</button>
    <!-- <button class="clear" type="button" @click.prevent="completed()">Show completed</button>
    <button class="clear" type="button" @click.prevent="showAll()">Show all</button> -->
    </div>
    
    
<!-- <button class="edit" type="button" @click="editTask(index)">EDIT</button> -->
  </div>
  <div class="center">
  
<router-link to="/">Check out our TODO!</router-link><br/><br/>
<router-link to="/about">Check out our FORM</router-link>
 </div>
</div>
</template>

<script>

import buttonAdd from "./components/buttonAdd/button-add.vue"
import buttonDelete from "./components/buttonDelete/button-delete.vue"
import buttonEdit from "./components/buttonEdit/button-edit.vue"
import deleteTarget from "./components/deleteTarget/delete-target.vue"



export default {
  name: 'App',
  data() {
    return {
  message:'',
  editedTask: null,
  index:'',
  

  

  tasks:[],
  }},
  components: {
    buttonAdd, buttonDelete, buttonEdit, deleteTarget,
    
  },
  methods: {
    
    edit(index)
    { 
      this.$refs.input.focus();
      this.message = this.tasks[index].name;
      this.editedTask = index;
      
    },
   reset()
   {
    this.message=''
    this.editedTask = null
      
   },
   deleteAll()
   {
     this.tasks=[]
   },
   
   notCompleted() {

    return this.tasks = this.tasks.filter(task => !task.done);
  },
  completed(){
  return this.tasks.filter(task => task.done);
    
  },
  
  showAll(){
  return this.tasks;
   
  },
  // filteredTasks()
  // {
  //   if (filter === 'inprogress')
  //   {
  //     return this.tasks.filter(task=>!task.done)
  //   }
  //   else if (filter === "completed")
  //   {
  //     return this.tasks.filter(task=>task.done)
  //   }
  // }



  
  
 

  },
  
  

  
}

</script>


