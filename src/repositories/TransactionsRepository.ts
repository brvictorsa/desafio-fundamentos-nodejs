import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface CreateTransactionDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    const income = this.getSumBalanceOfType('income');
    const outcome = this.getSumBalanceOfType('outcome');

    const balance: Balance = {
      income,
      outcome,
      total: income - outcome,
    };

    return balance;
  }

  private getSumBalanceOfType(type: string): number {
    return this.transactions.length > 0
      ? this.transactions
          .filter(t => t.type === type)
          .map(t => t.value)
          .reduce(
            (incomeSum, incomeCurrentValue) => incomeSum + incomeCurrentValue,
            0,
          )
      : 0;
  }

  public create({ title, value, type }: CreateTransactionDTO): Transaction {
    const transaction = new Transaction({
      title,
      value,
      type,
    });

    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
