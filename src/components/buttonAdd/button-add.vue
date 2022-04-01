<template>
    <div v-if="editedTask===null">
        
        <button type="button" v-on:click="addToList()">Add to todo list</button>
    </div>
    <div v-else>
       <button type="button" v-on:click="addToList()">Update task</button> 
    </div>
</template>

<script src="./button-add.js"></script>