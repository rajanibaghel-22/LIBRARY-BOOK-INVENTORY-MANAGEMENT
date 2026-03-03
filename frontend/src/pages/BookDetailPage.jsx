import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import api from "../lib/axios";
import toast from "react-hot-toast";
import { LoaderIcon, Trash2Icon, ArrowLeftIcon } from "lucide-react";

const BookDetailPage = () => {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await api.get(`/books/${id}`);
        setBook(res.data);
      } catch (error) {
        console.error(" Error fectching book", error);
        toast.error("Failed to fetch the book");
      } finally {
        setLoading(false);
      }
    };
    fetchBook();
  }, [id]);

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this book?")) return;
    try {
      await api.delete(`/books/${id}`);
      toast.success("Book deleted successfully");
      navigate("/");
    } catch (error) {
      console.error("Error deleting book", error);
      toast.error("Failed to delete book");
    }
  };

  const handleSave = async () => {
    
    if (
      !book.book_title.trim() ||
      !book.author.trim() ||
      !book.publishYear ||
      !book.publisher.trim() ||
      !book.category.trim() ||
      !book.total_copies ||
      !book.available_copies ||
      !book.price ||
      !book.purchased_on
    ) {
      toast.error("Please Add All Fields");
      return;
    }

    setSaving(true);

    try {
      await api.put(`/books/${id}`, {
        book_title: book.book_title,
        author: book.author,
        publishYear: Number(book.publishYear),
        publisher: book.publisher,
        category: book.category,
        total_copies: Number(book.total_copies),
        available_copies: Number(book.available_copies),
        price: Number(book.price),
        purchased_on: book.purchased_on,
      });
      toast.success("Book updated successfully");
      navigate("/");
    } catch (error) {
      console.error("Error updating book", error);
      toast.error("Failed to update book");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <LoaderIcon className="animate-spin size-10" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <Link to="/" className="btn btn-ghost">
              <ArrowLeftIcon className="h-5 w-5" /> Back to Books{" "}
            </Link>

            <button
              onClick={handleDelete}
              className="btn btn-error btn-outline"
            >
              <Trash2Icon className="h-5 w-5" /> Delete Book
            </button>
          </div>
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Book title"
                  className="input input-bordered"
                  value={book.book_title}
                  onChange={(e) =>
                    setBook({ ...book, book_title: e.target.value })
                  }
                />
              </div>

              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text"> Author </span>
                </label>
                <input
                  type="text"
                  placeholder="Book author"
                  className="input input-bordered"
                  value={book.author}
                  onChange={(e) => setBook({ ...book, author: e.target.value })}
                />
              </div>

              <div className="form-control mb-6">
                <label className="label">
                  <span className="label-text">Publish Year</span>
                </label>
                <input
                  type="number"
                  placeholder="Year"
                  className="input input-bordered"
                  value={book.publishYear}
                  onChange={(e) =>
                    setBook({ ...book, publishYear: e.target.value })
                  }
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
                  value={book.publisher}
                  onChange={(e) =>
                    setBook({ ...book, publisher: e.target.value })
                  }
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
                  value={book.category}
                  onChange={(e) =>
                    setBook({ ...book, category: e.target.value })
                  }
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
                  value={book.total_copies}
                  onChange={(e) =>
                    setBook({ ...book, total_copies: e.target.value })
                  }
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
                  value={book.available_copies}
                  onChange={(e) =>
                    setBook({ ...book, available_copies: e.target.value })
                  }
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
                  value={book.price}
                  onChange={(e) => setBook({ ...book, price: e.target.value })}
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
                  value={book.purchased_on? new Date(book.purchased_on).toISOString().split("T")[0]
                    :""
                  }
                  onChange={(e) =>
                    setBook({ ...book, purchased_on: e.target.value })
                  }
                />
              </div>

              <div className="card-actions justify-end">
                <button
                  className="btn btn-primary"
                  disabled={saving}
                  onClick={handleSave}
                >
                  {saving ? "Saving ..." : "Save Changes"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailPage;
