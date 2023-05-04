import { Container } from "./styles";
import { useTransactions } from "../../hooks/useTransactions";
import { Formatter } from "../../handles/formatter";

export function TransactionTable() {
  const { transactions } = useTransactions();

  return (
    <Container>
      <table>
        <thead>
          <th>Titulo</th>
          <th>Valor</th>
          <th>Categoria</th>
          <th>Data</th>
        </thead>

        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {Formatter.currency(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>{Formatter.date(transaction.createdAt)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
