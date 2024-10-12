import { Table } from "flowbite-react";

export function DataTable() {
  const transactions = [
    {
      id: "#ad4325",
      date: "2024-10-01",
      type: "startup",
      amount: 500
    },
    {
      id: "#bc5647",
      date: "2024-10-02",
      type: "enterprise",
      amount: 150
    },
    {
      id: "#xy8741",
      date: "2024-10-03",
      type: "startup",
      amount: 200
    },
    {
      id: "#mn1342",
      date: "2024-10-04",
      type: "enterprise",
      amount: 75
    },
    {
      id: "#zz1983",
      date: "2024-10-05",
      type: "enterprise",
      amount: 800
    },
    {
      id: "#pq3211",
      date: "2024-10-06",
      type: "startup",
      amount: 300
    },
    {
      id: "#jt6548",
      date: "2024-10-07",
      type: "startup",
      amount: 450
    },
    {
      id: "#rr4389",
      date: "2024-10-08",
      type: "enterprise",
      amount: 120
    },
    {
      id: "#wx7321",
      date: "2024-10-09",
      type: "enterprise",
      amount: 600
    },
    {
      id: "#uv8492",
      date: "2024-10-10",
      type: "enterprise",
      amount: 90
    },
    {
      id: "#lk2938",
      date: "2024-10-11",
      type: "startup",
      amount: 350
    },
    {
      id: "#vn9381",
      date: "2024-10-12",
      type: "enterprise",
      amount: 200
    },
    {
      id: "#df8374",
      date: "2024-10-13",
      type: "startup",
      amount: 400
    },
    {
      id: "#op4382",
      date: "2024-10-14",
      type: "enterprise",
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
            transactions.slice(0,5).map(transaction => (
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {transaction.id}
                </Table.Cell>
                <Table.Cell>{transaction.date}</Table.Cell>
                <Table.Cell>{transaction.type}</Table.Cell>
                <Table.Cell>৳{transaction.amount}</Table.Cell>
              </Table.Row>
            ))
          }
        </Table.Body>
      </Table>
    </div>
  );
}
