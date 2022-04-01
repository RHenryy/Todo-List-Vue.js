export default {
    data(){
        return {
            msg:"edit content"
        }
    },
    setup(){},
    name:"buttonEdit",
    props:['tasks', 'message', 'editedTask','index'],
    methods:{
        editTask() {

            if(!confirm("Do you want to edit this task?"))
            {
              alert("Cancelling edit")
              return;
            }
            else alert("Currently editing entry")
           
            this.$emit('edit')

          }
    }
}