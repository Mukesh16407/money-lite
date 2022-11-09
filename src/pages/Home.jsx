import React, { useState } from 'react'
import { Header } from '../components/Header'
import { Box, Card, Button, Modal, Group, Divider } from "@mantine/core";

export const Home = () => {

  const [view, setView] = useState("table");
  const [filters, setFilters] = useState({
    type: "",
    frequency: "7",
    dateRange: [],
  });
  return (
    <Box mx={50}>
          <Header />
    </Box>
  )
}
