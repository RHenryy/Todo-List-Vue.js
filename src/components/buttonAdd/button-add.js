import "./buttonAdd.css"


export default {
    data(){
        return {
            msg:"Adds to todo list",
           
            
           
            
           
            
        }
    },
    setup(){},
    name:"buttonAdd",
    props:["tasks", "message", "editedTask"],
    
    
    
    
    methods:{
        addToList(){
            
            if (this.message.length >=5)
            {
              if (this.editedTask === null)
             {
            
             this.tasks.push({
             name: this.message, done: false 
             });
             
             
             
             }
             else {
               this.tasks[this.editedTask].name= this.message;
               alert("Entry successfully edited")
               
               
               
                
             }
             }
             else alert("Enter a valid task before adding")
             
            this.$emit('update')
            
               
        }
    }



};