import React, { useEffect, useState } from "react";
import api from "../lib/axios";
import toast from "react-hot-toast";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";

const ReportPage = () => {
  const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await api.get("/books");
        setBooks(res.data);
      } catch (error) {
        toast.error("Failed to load report data");
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  // Extract unique categories
  const categories = [
    "All",
    ...new Set(books.map((book) => book.category)),
  ];

  // Filter books by category
  const filteredBooks =
    selectedCategory === "All"
      ? books
      : books.filter((book) => book.category === selectedCategory);

  // Calculate totals
  const totalCopies = filteredBooks.reduce(
    (sum, book) => sum + book.total_copies,
    0
  );

  const availableCopies = filteredBooks.reduce(
    (sum, book) => sum + book.available_copies,
    0
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Library Report</h1>

        <Link to="/" className="btn btn-outline">
          <ArrowLeft className="size-5" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Category Filter */}
      <div className="mb-6">
        <select
          className="select select-bordered"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>Book Title</th>
                <th>Category</th>
                <th>Total Copies</th>
                <th>Available Copies</th>
              </tr>
            </thead>

            <tbody>
              {filteredBooks.map((book) => (
                <tr key={book._id}>
                  <td>{book.book_title}</td>
                  <td>{book.category}</td>
                  <td>{book.total_copies}</td>
                  <td>{book.available_copies}</td>
                </tr>
              ))}
            </tbody>

            <tfoot>
              <tr className="font-bold">
                <td colSpan="2">Total</td>
                <td>{totalCopies}</td>
                <td>{availableCopies}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      )}
    </div>
  );
};

export default ReportPage;