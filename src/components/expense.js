import React, { useEffect, useState } from "react";

const Expenses = () => {
    let [expenses,setExpenses] = useState([]);      //to contain all expense
    const [load, setLoad] = useState(true);
    
    const getData = async () => {
        let data = await fetch('http://localhost:8080/api/exp')
        .then(res => res.json())
        await (setExpenses(data))
        await (setLoad(false))
    }

    // const removeFromRepo = async (id) => {
    //     await fetch(`http://localhost:8080/api/exp/${id}`,{
    //         method: "DELETE"
    //     }).then(console.log('user has been deleted.'));
    //     getData();
    // }


    // i've changed this id to integer chek
    const handleDeleteExpense = async (someId)=>{
        await fetch(`http://localhost:8080/api/exp/${someId}`,{
            method: "DELETE",
        }).then(console.log('expense has been deleted !!'))
        getData();
    }

    useEffect(()=>{
        getData()
    },[load])

    return <>
        <table>
            <thead>
                <tr>
                    <th>Sn</th>
                    <th>Date</th>
                    <th>Decription</th>
                    <th>Category</th>
                    <th>User</th>
                </tr>
            </thead>
            <tbody>
                {expenses.map((expn)=>{
                    return(
                        <tr key={expn.id}>
                            <td><h4>{expn.id}</h4></td>
                            <td><h4>{expn.expensedate}</h4></td>
                            <td><h4>{expn.description}</h4></td>
                            <td><h4>{expn.category}</h4></td>
                            <td><h4>{expn.user.name}</h4></td>{/*see how extract the name only*/}
                            <button className="btn" onClick={(e)=>handleDeleteExpense(parseInt(expn.id))}>del</button>
                        </tr>
                    )})
                }
            </tbody>
        </table>
        
           
    </>
}

export default Expenses;
