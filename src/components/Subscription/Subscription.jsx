import React, { useState, useEffect } from "react";
import { Table, TextInput, Button, Select } from "flowbite-react";
import { format, subDays, startOfMonth, endOfMonth, isWithinInterval } from "date-fns";

const Subscription = () => {
  const [data] = useState([
    { id: "#d1es3", date: new Date(), type: "Startup", amount: 500 },
    { id: "#a2g4h", date: subDays(new Date(), 1), type: "Enterprise", amount: 200 },
    { id: "#f9i2j", date: subDays(new Date(), 2), type: "Startup", amount: 150 },
    { id: "#k3l6m", date: subDays(new Date(), 5), type: "Enterprise", amount: 1000 },
    { id: "#o9p7q", date: subDays(new Date(), 7), type: "Startup", amount: 750 },
    { id: "#u2x8v", date: subDays(new Date(), 10), type: "Enterprise", amount: 320 },
    { id: "#y4z1b", date: subDays(new Date(), 15), type: "Startup", amount: 540 },
    { id: "#p8m2n", date: subDays(new Date(), 20), type: "Enterprise", amount: 810 },
    { id: "#s9w3c", date: subDays(new Date(), 25), type: "Startup", amount: 130 },
    { id: "#t1v5d", date: subDays(new Date(), 30), type: "Enterprise", amount: 640 },
    { id: "#e3i6f", date: subDays(new Date(), 35), type: "Startup", amount: 920 },
    { id: "#u4p2q", date: subDays(new Date(), 40), type: "Enterprise", amount: 1100 },
    { id: "#m9r7t", date: subDays(new Date(), 45), type: "Startup", amount: 210 },
    { id: "#k1o8v", date: subDays(new Date(), 50), type: "Enterprise", amount: 630 },
    { id: "#b3p9z", date: subDays(new Date(), 60), type: "Startup", amount: 490 },
    { id: "#d6w2q", date: subDays(new Date(), 65), type: "Enterprise", amount: 840 },
    { id: "#p1e4k", date: subDays(new Date(), 70), type: "Startup", amount: 720 },
    { id: "#x8v5b", date: subDays(new Date(), 75), type: "Enterprise", amount: 530 },
    { id: "#t2q6v", date: subDays(new Date(), 80), type: "Startup", amount: 760 },
    { id: "#o9b7z", date: subDays(new Date(), 90), type: "Enterprise", amount: 390 }
  ]);

  const [filteredData, setFilteredData] = useState(data);
  const [searchQuery, setSearchQuery] = useState("");
  const [dateRange, setDateRange] = useState({ startDate: "", endDate: "" });
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  // Filters based on date
  const filterByDate = (filter) => {
    let startDate, endDate;
    const today = new Date();
    
    switch (filter) {
      case "today":
        startDate = today;
        endDate = today;
        break;
      case "yesterday":
        startDate = subDays(today, 1);
        endDate = subDays(today, 1);
        break;
      case "thisMonth":
        startDate = startOfMonth(today);
        endDate = endOfMonth(today);
        break;
      case "lastMonth":
        startDate = startOfMonth(subDays(today, 30));
        endDate = endOfMonth(subDays(today, 30));
        break;
      default:
        startDate = new Date(dateRange.startDate);
        endDate = new Date(dateRange.endDate);
    }

    setFilteredData(
      data.filter((row) =>
        isWithinInterval(row.date, { start: startDate, end: endDate })
      )
    );
  };

  // Search filter
  useEffect(() => {
    const filtered = data.filter(
      (row) =>
        row.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        row.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
        row.amount.toString().includes(searchQuery)
    );
    setFilteredData(filtered);
  }, [searchQuery, data]);

  // Pagination logic
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-2 md:mb-0 w-full">
          <TextInput
            id="search"
            type="text"
            placeholder="Search by ID, type, amount..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full md:w-1/2"
          />
          <Select
            id="filter"
            onChange={(e) => filterByDate(e.target.value)}
            className="w-full md:w-1/2"
          >
            <option value="all">All</option>
            <option value="today">Today</option>
            <option value="yesterday">Yesterday</option>
            <option value="thisMonth">This Month</option>
            <option value="lastMonth">Last Month</option>
          </Select>
        </div>

        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mt-2 md:mt-0 w-full">
          <TextInput
            id="startDate"
            type="date"
            value={dateRange.startDate}
            onChange={(e) =>
              setDateRange({ ...dateRange, startDate: e.target.value })
            }
            className="w-full md:w-1/3"
          />
          <span className="self-center">to</span>
          <TextInput
            id="endDate"
            type="date"
            value={dateRange.endDate}
            onChange={(e) =>
              setDateRange({ ...dateRange, endDate: e.target.value })
            }
            className="w-full md:w-1/3"
          />
          <Button onClick={() => filterByDate("custom")} className="w-full md:w-auto">
            Apply
          </Button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <Table hoverable={true}>
          <Table.Head>
            <Table.HeadCell>ID</Table.HeadCell>
            <Table.HeadCell>Date</Table.HeadCell>
            <Table.HeadCell>Type</Table.HeadCell>
            <Table.HeadCell>Amount</Table.HeadCell>
          </Table.Head>
          <Table.Body>
            {currentRows.map((row) => (
              <Table.Row key={row.id}>
                <Table.Cell>{row.id}</Table.Cell>
                <Table.Cell>{format(row.date, "yyyy-MM-dd")}</Table.Cell>
                <Table.Cell>{row.type}</Table.Cell>
                <Table.Cell>৳{row.amount}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between mt-4">
        <Button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <Button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Subscription;
