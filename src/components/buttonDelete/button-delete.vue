<template>
    <div>
        <button class="delete" type="button" @click.prevent="deleteTask(index)">x</button>
        <!-- <i type="button" @click.prevent="deleteTask(index)" class="fa-solid fa-xmark fa-2x"></i> -->
    </div>
</template>

<script src="./button-delete.js"></script>
<style src="./button-delete.css"></style>