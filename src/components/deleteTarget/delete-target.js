export default {
    data() {
        return {
            msg:"salut pote",
            tasksCopy:[],
           
        }
    },
    setup(){},
    name:"deleteTarget",
    props: {tasks:Array},
    methods:{

        deleteTargeted() {

       
        this.$emit('deleteTarget')   
        

        
        
               
            
            
           } 
    }


}
