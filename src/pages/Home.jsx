import React, { useState } from 'react'
import { Header } from '../components/Header'
import { Box, Card, Button, Modal, Group, Divider } from "@mantine/core";
import { Filters } from '../components/Filters';

export const Home = () => {

  const [view, setView] = useState("table");
  const [filters, setFilters] = useState({
    type: "",
    frequency: "7",
    dateRange: [],
  });
  const [transactions, setTransactions] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formMode, setFormMode] = useState("add");
  const [selectedTransaction, setSelectedTransaction] = useState({});

  return (
    <Box mx={50}>
          <Header />
          <div className="container">
          <Card>
          <div className="flex justify-between items-end">
          <div>
              <Filters
                filters={filters}
                setFilters={setFilters}
                
              />
            </div>
          </div>
          </Card>
          </div>
    </Box>
  )
}
