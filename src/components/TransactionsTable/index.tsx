import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface Transaction {
    id: number;
    title: string;
    type: 'deposit' | 'withdraw';
    amount: number;
    category: string;
    createdAt: string;
}

export function TransactionsTable(){

    const [transactions, setTransactions] = useState<Transaction[]>([])
    useEffect(() => {
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions))
    }, [])
    
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Value</th>
                        <th>Category</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.map(transaction => {
                        return(
                            <tr key={transaction.id}>
                                <td>{transaction.title}</td>
                                <td className={transaction.type}>{transaction.amount}</td>
                                <td>{transaction.category}</td>
                                <td>{transaction.createdAt}2</td>
                            </tr>
                        )                   
                    })}
                </tbody>
            </table>
        </Container>
        
    )
}