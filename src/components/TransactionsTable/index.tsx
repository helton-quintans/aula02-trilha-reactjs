import { useEffect } from "react";
import { Container } from "./styles";

export function TransactionsTable(){
    useEffect(() => {
        fetch('http://localhost:3000/api/transactions')
            .then(response => response.json())
            .then(data => console.log(data))
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
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit">R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>11/03/2022</td>
                    </tr>

                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">-R$2.000</td>
                        <td>Moradia</td>
                        <td>10/03/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
        
    )
}