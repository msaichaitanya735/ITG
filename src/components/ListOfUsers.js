import  React,{Fragment,useState} from 'react' 

const ListOfUsers=()=>{

    const [name,setName]=useState("")

    const onSubmitForm= async e=>{
        e.preventDefault()
        try {
            const body={name}
            const response= await fetch("http://localhost:5000/add",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(body)
            })
            console.log(response)
        } catch (err) {
            console.log(err.message)
        }
    }

    return(
        <form onSubmit={onSubmitForm}>
            <input type="text" className="form-control"value ={name} onChange={e=> setName(e.target.value)}/>
            <button className="btn btn-success">Add</button>
        </form>
    )
}
export default ListOfUsers;