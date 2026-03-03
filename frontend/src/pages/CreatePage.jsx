import api from "../lib/axios";
import { ArrowLeftIcon } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";

const CreatePage = () => {
  const [book_title, setBookTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [publisher, setPublisher] = useState("");
  const [category, setCategory] = useState("");
  const [total_copies, setTotalCopies] = useState("");
  const [available_copies, setAvailableCopies] = useState("");
  const [price, setPrice] = useState("");
  const [purchased_on, setPurchasedOn] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post("/books", {
        book_title,
        author,
        publishYear,
        publisher,
        category,
        total_copies,
        available_copies,
        price,
        purchased_on,
      });
      toast.success("Book created successfully!");
      navigate("/");
    } catch (error) {
      console.log("Error creating book", error);
      toast.error("Failed to create book.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Link to={"/"} className="btn btn-ghost mb-6">
            <ArrowLeftIcon className="size-5" />
            Back to Books{" "}
          </Link>
          <div className="card bg-base-100">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-4"> Create New Book </h2>
              <form onSubmit={handleSubmit}>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text"> Title </span>
                  </label>
                  <input
                    text="text"
                    placeholder="Book Title"
                    className="input input-bordered"
                    value={book_title}
                    onChange={(e) => setBookTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text"> Author </span>
                  </label>
                  <input
                    text="text"
                    placeholder="Book Author"
                    className="input input-bordered"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                  />
                </div>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text"> Year of Publishing </span>
                  </label>
                  <input
                    text="number"
                    placeholder="e.g. 2025"
                    className="input input-bordered"
                    value={publishYear}
                    onChange={(e) => setPublishYear(e.target.value)}
                    required
                  />
                </div>

                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text"> Publisher </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Publisher"
                    className="input input-bordered"
                    value={publisher}
                    onChange={(e) => setPublisher(e.target.value)}
                    required
                  />
                </div>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text"> Category </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Category"
                    className="input input-bordered"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                  />
                </div>

                <div className="form-control mb-6">
                  <label className="label">
                    <span className="label-text">Total Copies</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Total Copies"
                    className="input input-bordered"
                    value={total_copies}
                    onChange={(e) => setTotalCopies(e.target.value)}
                    required
                  />
                </div>

                <div className="form-control mb-6">
                  <label className="label">
                    <span className="label-text">Available Copies</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Available Copies"
                    className="input input-bordered"
                    value={available_copies}
                    onChange={(e) => setAvailableCopies(e.target.value)}
                    required
                  />
                </div>

                <div className="form-control mb-6">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Price"
                    className="input input-bordered"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                  />
                </div>

                <div className="form-control mb-6">
                  <label className="label">
                    <span className="label-text">Purchased On</span>
                  </label>
                  <input
                    type="Date"
                    placeholder="Purchased On"
                    className="input input-bordered"
                    value={purchased_on || ""}
                    onChange={(e) => setPurchasedOn(e.target.value)}
                    required
                  />
                </div>

                <div className="card-actions justify-end">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={loading}
                  >
                    {loading ? "Creating ..." : "Create Book"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
