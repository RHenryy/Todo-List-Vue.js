<template>
    <div>
        <ul>
            <!-- <li v-for="(items, index) in info" :key="index.id">Firstname: {{ items.fname }}<button type="button" @click.prevent="editFname(index)">EDIT</button><button type="button" @click.prevent="deleteAll(index)">DELETE</button></li>
            <li v-for="(items, index) in info" :key="index.id">Lastname: {{ items.lname }}<button type="button" @click.prevent="editLname(index)">EDIT</button><button type="button" @click.prevent="deleteAll(index)">DELETE</button></li>
            <li v-for="(items, index) in info" :key="index.id">Email: {{ items.mail }}<button type="button" @click.prevent="editMail(index)">EDIT</button><button type="button" @click.prevent="deleteAll(index)">DELETE</button></li> -->

            
            
            <li v-for="(items, index) in info" :key="items.id">Fname:{{ items.fname }} || Lname: {{ items.lname }} || Mail: {{ items.mail }} <button type="button" @click.prevent="edit(index)">EDIT</button><button type="button" @click.prevent="deleteAll(index)">DELETE</button></li>
            
            
            
        </ul>
<input type="text" placeholder="Enter Firstname here" v-model="fname" autofocus ref="fName" @keyup.enter="addFname()">
  <input type="text" placeholder="Enter Lastname here" v-model="lname" autofocus ref="lName" @keyup.enter="addFname()">
  <input type="text" placeholder="Enter mail here" v-model="mail" autofocus ref="mail" @keyup.enter="addFname()">
  <button type="button" @click.prevent="addFname()">Submit info</button>
<div class="center">
fName: {{ fname }}<br/> lName: {{ lname }} <br/>mail : {{ mail }}
</div>
    </div>
</template>

<script>

export default {

data(){
    return{
        fname:"",
        lname:"",
        mail:"",
        info: [],
        editedTask: null,
    }
},
methods:{
    addFname(){
        if (this.editedTask === null){
        this.info.push({fname:this.fname, lname:this.lname, mail:this.mail})
        console.log(this.info)
        console.log(this.info.fname)
        this.fname = ""
        this.lname =""
        this.mail =""
        console.log(this.info[0].fname)
        }
    else {
               this.info[this.editedTask].fname= this.fname;
               this.info[this.editedTask].lname= this.lname;
               this.info[this.editedTask].mail= this.mail;
               alert("Entry(ies) successfully edited")
               this.editedTask = null
               this.fname = ""
               this.lname =""
               this.mail =""
             }
    },
    editFname(index){
    this.$refs.fName.focus();
    this.fname = this.info[index].fname
    this.lname = this.info[index].lname
    this.mail = this.info[index].mail
    this.editedTask = index;
    

  

    },
    editLname(index){
        this.$refs.lName.focus();
        this.fname = this.info[index].fname
        this.lname = this.info[index].lname
        this.mail = this.info[index].mail  
        this.editedTask = index;
        
    },
    editMail(index){
        this.$refs.mail.focus();
        this.fname = this.info[index].fname
        this.lname = this.info[index].lname
        this.mail = this.info[index].mail
        this.editedTask = index;
    },
    reset() {
        this.editedTask = null
               this.fname = ""
                this.lname = ""
                this.mail = ""
    },
    deleteAll(index){

    this.info.splice(index,1)
        

    },
    edit(index) {
        if (!confirm("Voulez-vous éditer vos entrées?"))
        {   
            return;
            
        }
        else
        this.fname = this.info[index].fname
        this.lname = this.info[index].lname
        this.mail = this.info[index].mail
        this.editedTask = index;
        
    }
}
    

}


</script>