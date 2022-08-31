import axios from "axios"




class ApplicationServices{
    static async getAllApplication (){
        try{
            const response = await axios.get("http://localhost:1000/getApplication")
            console.log("response from Application:",response)
return response.data
        }catch (e) {
            console.log("Error :" , e)
        }
    }
    static async createApplication (data){
        try{
            const response = await axios.post("",data,{
                headers:{
                    "Content-Type":"appliacation/json"
                },
            });
            console.log("response of creation", response.data);
            return response.data;

        }
        catch(error){
            console.log("failed !",error)
        }
    }

    static async createMentor (data){
        try{
            const response = await axios.post("http://localhost:1000/mentor/register",data,{
                headers:{
                    "Content-Type":"appliacation/json"
                },
            });
            console.log("response of signup", response.data);
            return response.data;
           
        }catch(err){
            console.log("failed",err)


        }
    }

    static async getAllMentor (){
        
        try{

            const response = await axios.get("");
            console.log("Error" ,);

        }catch(error){
            
        }
    }
}

export default ApplicationServices;