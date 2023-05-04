import { useContext } from "react";
import { Container } from "./styles";
import { TransactionContext } from "../../providers/TransactionProvider";

interface Formatter {
  currency(value: number): string;
  date(date: string): string;
}

export function TransactionTable() {
  const { transactions } = useContext(TransactionContext);

  const formatter: Formatter = {
    currency(value: number): string {
      return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(value);
    },
    date(date: string): string {
      return new Intl.DateTimeFormat("pt-BR").format(new Date(date));
    },
  };

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
                {formatter.currency(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>{formatter.date(transaction.createdAt)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
