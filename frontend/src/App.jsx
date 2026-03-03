import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import BookDetailPage from "./pages/BookDetailPage";
import ReportPage from "./pages/ReportPage"

const App = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/book/:id" element={<BookDetailPage />} />
          <Route path="/report" element={<ReportPage />} />
        </Routes>
      </div>
    
  )
}

export default App;
