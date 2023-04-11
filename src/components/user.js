import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const User = () => {
    let [user,setUser] = useState([]);      //to mock up or copy a person as needed
    const [load, setLoad] = useState(true);
    const [expense, setExpens] = useState({id: 0, description: '',category: '',})       //to mockup or clone a single expense

    // to access url params
    const {id} = useParams();

    const getData = async () => {
        let person = await fetch(`http://localhost:8080/api/users/${parseInt(id)}`)
        .then(res => res.json())
        await (setUser(person))
        await (setLoad(false))
    }

    const postToRepo = async (expense) => {
        await fetch(`http://localhost:8080/api/users/exp/${parseInt(id)}`,{
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body:JSON.stringify(expense)
            //to convert JS-object to JSON - JSON.stringify
        }).then(console.log('new expense added for user !!'))
        getData();
    }

    const handleAddExpense = (e)=>{
        e.preventDefault();  //prevented to obey further esp for POST
        postToRepo(expense);
    }

    useEffect(()=>{
        getData()
    },[load])

    return <>
        {load && <h1>Loading...</h1>}
        {
            <div id={user.id} className='item'>
                <h2>{user.name}</h2>
                    {/* add Expense */}
                <section className="section">
                    <form className="form" onSubmit={handleAddExpense}>
                        
                        <label>expense_id: </label>
                        <input value={expense.id} placeholder="id" onChange={(e) => setExpens({...expense, id: e.target.value})}/>
                        
                        <label>description: </label>
                        <input value={expense.name} type="text" required placeholder="description" onChange={(e) => setExpens({...expense, description: e.target.value})}/>
                        
                        <label htmlFor="cat">category: </label>
                        <input value={expense.email} id="cat" type="text" required placeholder="category" onChange={(e) => setExpens({...expense, category: e.target.value})} />


                        <button className="btn" type="submit">
                            Add Expense
                        </button>
                    </form>
                </section>
            </div>
        }    
    </>
}

export default User;
