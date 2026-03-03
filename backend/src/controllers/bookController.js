import Book from "../models/bookModel.js";
export async function getAllBooks(_, res) {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    res.status(200).json(books);
  } catch (error) {
    console.error("Error in getAllBooks controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
export async function getBookById(req, res) {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.status(200).json(book);
  } catch (error) {
    console.error("Error in getBookById controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
export async function createBook(req, res) {
  try {
    const {
      book_title,
      author,
      publishYear,
      publisher,
      category,
      total_copies,
      available_copies,
      price,
      purchased_on,
    } = req.body;
    if (
      !book_title ||
      !author ||
      !publishYear ||
      !publisher ||
      !category ||
      !total_copies ||
      !available_copies ||
      !price ||
      !purchased_on
    ) {
      return res.status(404).json({ message: "All fields are required" });
    }
    const book = new Book({
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
    const savedBook = await book.save();
    res.status(201).json({ savedBook });
  } catch (error) {
    console.error("Error in createBook controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
export async function updateBook(req, res) {
  try {
    const {
      book_title,
      author,
      publishYear,
      publisher,
      category,
      total_copies,
      available_copies,
      price,
      purchased_on,
    } = req.body;

    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      {
        book_title,
        author,
        publishYear,
        publisher,
        category,
        total_copies,
        available_copies,
        price,
        purchased_on,
      },
      { new: true },
    );

    if (!updatedBook)
      return res.status(404).json({ message: "Book not found" });
    res.status(200).json(updatedBook);
  } catch (error) {
    console.error("Error in updateBook controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
export async function deleteBook(req, res) {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    if (!deletedBook)
      return res.status(404).json({ message: "Book not found" });
    res.status(200).json({ message: "Book deleted successfully " });
  } catch (error) {
    console.error("Error in deleteBook controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
