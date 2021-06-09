import React, { useState, useEffect } from 'react';

async function getRequest(token) {
 return fetch('https://challenge.sudokrew.com/transactions', {
   method: 'GET',
   headers: {
     'Content-Type': 'application/json',
     'Authorization': `Bearer ${token}`
   }
 })
   .then(data => data.json())
}

function useTransactions(token) {
    const [transactions, setTransactions] = useState([]);
    useEffect((async () => { 
        setTransactions( await getRequest(token))
    }), []);

    return transactions;
}

export default function GetTransactions(props) {
    const transactions = useTransactions(props.token);
    console.log(transactions)

    return (
    <div>
        <ul>
        {transactions.map(user => {
            return <li>{user.first_name}</li>
        })}
        </ul>
    </div>
    )
}
