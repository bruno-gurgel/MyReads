import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Search from "./Search";
import Shelfs from "./Shelfs";
import Book from "./Book";
import ShelfsControl from "./ShelfsControl";
import OpenSearch from "./OpenSearch";

test("renders app component", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const appElement = screen.getByText(/MyReads/i);
  expect(appElement).toBeInTheDocument();
});

test("renders search component", () => {
  const functionTest = () => true;
  render(
    <BrowserRouter>
      <Search booksArray={[]} updateShelf={functionTest} />
    </BrowserRouter>
  );
  const searchElement = screen.getByPlaceholderText(
    /Search by title or author/i
  );
  expect(searchElement).toBeInTheDocument();
});

test("renders shelfs component", () => {
  const functionTest = () => true;
  render(
    <BrowserRouter>
      <Shelfs booksArray={[]} updateShelf={functionTest} />
    </BrowserRouter>
  );
  const shelfElement = screen.getByText(/Currently Reading/i);
  expect(shelfElement).toBeInTheDocument();
});

test("renders book component", () => {
  const functionTest = () => true;
  render(
    <BrowserRouter>
      <Book
        updateShelf={functionTest}
        backgroundURL={
          "http://books.google.com/books/content?id=tsRhkvo80iUC&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        }
        bookTitle={"Harry Potter"}
        bookAuthor={"J.K. Rowling"}
        shelf={"read"}
        book={{}}
      />
    </BrowserRouter>
  );
  const bookElement = screen.getByText(/Harry Potter/i);
  expect(bookElement).toBeInTheDocument();
});

test("renders ShelfsControl component", () => {
  const functionTest = () => true;
  render(
    <BrowserRouter>
      <ShelfsControl shelf={"read"} book={{}} updateShelf={functionTest} />
    </BrowserRouter>
  );
  const ShelfsControlElement = screen.getByText(/Currently Reading/i);
  expect(ShelfsControlElement).toBeInTheDocument();
});

test("renders openSearch component", () => {
  render(
    <BrowserRouter>
      <OpenSearch />
    </BrowserRouter>
  );
  const openSearchElement = screen.getByText(/Add a book/i);
  expect(openSearchElement).toBeInTheDocument();
});
