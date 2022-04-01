export default {
    data() {
        return {
            msg:"salut pote",
            
        }
    },
    setup(){},
    name:"buttonDelete",
    props: {
        index:Number,
        tasks:Array,
    },
    methods:{

        deleteTask(index) {

        
            this.tasks.splice(index,1);
            
           } 
    }


}
