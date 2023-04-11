import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
    let [people,setPeople] = useState([]);
    const [load, setLoad] = useState(true);
    const [person, setPerson] = useState({id: 0, email: '', name: ''}); //to clone a new person or copy a person

    const getData = async () => {
        let data = await fetch('http://localhost:8080/api/users')
        .then(res => res.json())
        await (setPeople(data))
        await (setLoad(false))
    }

    const postToRepo = async (person) => {
        await fetch('http://localhost:8080/api/users',{
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body:JSON.stringify(person)
            //to convert JS-object to JSON - JSON.stringify
        }).then(console.log('user added successfully !'))
        getData();
    }

    const removeFromRepo = async (id) => {
        await fetch(`http://localhost:8080/api/users/${id}`,{
            method: "DELETE"
        }).then(console.log('user has been deleted.'));
        getData();
    }

    const handleAddUser = (e)=>{
        e.preventDefault();  //prevented to obey further
        postToRepo(person);
    }

    const removeUser = (id)=> {
        removeFromRepo(id);
        // setPeople(people.filter(person=>person.id !== id))
    }

    useEffect(()=>{
        getData()
    },[load])

    return <>
        <section className="users-section">
            {load && <h1>Loading...</h1>}
                {people.map((person)=>{
                    return(
                        <div key={person.id} className='item'>
                            <h3>{person.name}</h3>

                            <Link to={`/users/${person.id}`}>
                                <h4>view profile</h4>
                            </Link>

                            <button onClick={()=>removeUser(person.id)}>
                                removeUser
                            </button>
                        </div>
                    )
                })} 
        </section>   
            
            {/* add User */}
        <section className="section">
            <form className="form" onSubmit={handleAddUser}>
                <label>id: </label>
                <input value={person.id} placeholder="id" onChange={(e) => setPerson({...person, id: e.target.value})}/>
                
                <label>name: </label>
                <input value={person.name} type="text" required placeholder="name" onChange={(e) => setPerson({...person, name: e.target.value})}/>
                
                <label htmlFor="eml">email: </label>
                <input value={person.email} id="eml" type="email" required placeholder="email" onChange={(e) => setPerson({...person, email: e.target.value})} />

                <button className="btn" type="submit">
                    Add user
                </button>
            </form>
        </section>

    </>
}

export default Users;
