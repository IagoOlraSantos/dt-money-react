export class Formatter {
  static date(date: string): string {
    return new Intl.DateTimeFormat("pt-BR").format(new Date(date));
  }

  static currency(value: number): string {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  }
}
