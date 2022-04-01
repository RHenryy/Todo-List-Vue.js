<template>
    <div>  
    <div>
   <ul v-for="items of array" :key="items.id">
       <li v-for="item in items" :key="item.id">{{item}}</li>
   </ul>
   </div>
   <div>
   <table style="padding:1rem;">
    <tr>
       <th>fName</th>
       <th>phone</th>
       <th>placeofB</th>
    </tr>
    <tr v-for="items of array" :key="items.id"> 
        <td style="padding:1rem;" v-for="item in items" :key="item.id">{{item}}</td>
    </tr>
    </table>
    </div>
    </div>
</template>


<script src="./arrayComponent.js"></script>