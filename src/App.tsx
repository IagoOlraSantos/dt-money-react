import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/globals";

import { createServer } from "miragejs";

createServer({
  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return [
        {
          id: 1,
          title: "Desenvolvimento de website",
          amount: 12000,
          type: "deposit",
          category: "Desenvolvimento",
          createdAt: new Date(),
        },
        {
          id: 2,
          title: "Aluguel",
          amount: -400,
          type: "withdraw",
          category: "Casa",
          createdAt: new Date(),
        },
      ];
    });
  },
});

export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
  );
}
