import { Table } from "flowbite-react";

export function DataTableTwo() {
  const transactions = [
    {
      id: "#ad4325",
      date: "2024-10-01",
      gateway: "bKash",
      amount: 500
    },
    {
      id: "#bc5647",
      date: "2024-10-02",
      gateway: "Rocket",
      amount: 150
    },
    {
      id: "#xy8741",
      date: "2024-10-03",
      gateway: "bKash",
      amount: 200
    },
    {
      id: "#mn1342",
      date: "2024-10-04",
      gateway: "uCash",
      amount: 75
    },
    {
      id: "#zz1983",
      date: "2024-10-05",
      gateway: "bKash",
      amount: 800
    },
    {
      id: "#pq3211",
      date: "2024-10-06",
      gateway: "bKash",
      amount: 300
    },
    {
      id: "#jt6548",
      date: "2024-10-07",
      gateway: "bKash",
      amount: 450
    },
    {
      id: "#rr4389",
      date: "2024-10-08",
      gateway: "bKash",
      amount: 120
    },
    {
      id: "#wx7321",
      date: "2024-10-09",
      gateway: "bKash",
      amount: 600
    },
    {
      id: "#uv8492",
      date: "2024-10-10",
      gateway: "bKash",
      amount: 90
    },
    {
      id: "#lk2938",
      date: "2024-10-11",
      gateway: "uCash",
      amount: 350
    },
    {
      id: "#vn9381",
      date: "2024-10-12",
      gateway: "Bank",
      amount: 200
    },
    {
      id: "#df8374",
      date: "2024-10-13",
      gateway: "Nagad",
      amount: 400
    },
    {
      id: "#op4382",
      date: "2024-10-14",
      gateway: "bKash",
      amount: 50
    }
  ];

  console.log(transactions);

  return (
    <div className="overflow-x-auto">
      <Table>
        <Table.Head>
          <Table.HeadCell>ID</Table.HeadCell>
          <Table.HeadCell>Date</Table.HeadCell>
          <Table.HeadCell>Type</Table.HeadCell>
          <Table.HeadCell>Amount</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {/* Data fetch */}
          {
            transactions.slice(0, 5).map(transaction => (
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {transaction.id}
                </Table.Cell>
                <Table.Cell>{transaction.date}</Table.Cell>
                <Table.Cell>{transaction.gateway}</Table.Cell>
                <Table.Cell>৳{transaction.amount}</Table.Cell>
              </Table.Row>
            ))
          }
        </Table.Body>
      </Table>
    </div>
  );
}
