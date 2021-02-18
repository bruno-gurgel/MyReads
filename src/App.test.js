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
      <Search
        booksArray={[
          {
            title: "The Android Invasion",
            authors: ["Christopher Black"],
            publisher: "Yearling",
            publishedDate: "1984-06-01",
            description:
              "In this multiple plot adventure, readers and their robot companion must stop armies of attacking androids before they conquer the galaxy.",
            industryIdentifiers: [
              {
                type: "ISBN_10",
                identifier: "0440400813",
              },
              {
                type: "ISBN_13",
                identifier: "9780440400813",
              },
            ],
            readingModes: {
              text: false,
              image: false,
            },
            pageCount: 117,
            printType: "BOOK",
            categories: ["Androids"],
            maturityRating: "NOT_MATURE",
            allowAnonLogging: false,
            contentVersion: "0.0.1.0.preview.0",
            imageLinks: {
              smallThumbnail:
                "http://books.google.com/books/content?id=tsRhkvo80iUC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
              thumbnail:
                "http://books.google.com/books/content?id=tsRhkvo80iUC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
            },
            language: "en",
            previewLink:
              "http://books.google.com/books?id=tsRhkvo80iUC&q=android&dq=android&hl=&cd=2&source=gbs_api",
            infoLink:
              "http://books.google.com/books?id=tsRhkvo80iUC&dq=android&hl=&source=gbs_api",
            canonicalVolumeLink:
              "https://books.google.com/books/about/The_Android_Invasion.html?hl=&id=tsRhkvo80iUC",
            id: "tsRhkvo80iUC",
            shelf: "currentlyReading",
          },
          {
            title: "The Hatred of Poetry",
            authors: ["Ben Lerner"],
            publisher: "FSG Originals",
            publishedDate: "2016-06-07",
            description:
              'No art has been denounced as often as poetry. It\'s even bemoaned by poets: "I, too, dislike it," wrote Marianne Moore. "Many more people agree they hate poetry," Ben Lerner writes, "than can agree what poetry is. I, too, dislike it and have largely organized my life around it and do not experience that as a contradiction because poetry and the hatred of poetry are inextricable in ways it is my purpose to explore." In this inventive and lucid essay, Lerner takes the hatred of poetry as the starting point of his defense of the art. He examines poetry\'s greatest haters (beginning with Plato\'s famous claim that an ideal city had no place for poets, who would only corrupt and mislead the young) and both its greatest and worst practitioners, providing inspired close readings of Keats, Dickinson, McGonagall, Whitman, and others. Throughout, he attempts to explain the noble failure at the heart of every truly great and truly horrible poem: the impulse to launch the experience of an individual into a timeless communal existence. In The Hatred of Poetry, Lerner has crafted an entertaining, personal, and entirely original examination of a vocation no less essential for being impossible.',
            industryIdentifiers: [
              {
                type: "ISBN_13",
                identifier: "9780374712334",
              },
              {
                type: "ISBN_10",
                identifier: "0374712336",
              },
            ],
            readingModes: {
              text: true,
              image: false,
            },
            pageCount: 96,
            printType: "BOOK",
            categories: ["Literary Criticism"],
            averageRating: 3.5,
            ratingsCount: 74,
            maturityRating: "NOT_MATURE",
            allowAnonLogging: true,
            contentVersion: "1.1.1.0.preview.2",
            panelizationSummary: {
              containsEpubBubbles: false,
              containsImageBubbles: false,
            },
            imageLinks: {
              smallThumbnail:
                "http://books.google.com/books/content?id=s3HtCgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
              thumbnail:
                "http://books.google.com/books/content?id=s3HtCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
            },
            language: "en",
            previewLink:
              "http://books.google.com/books?id=s3HtCgAAQBAJ&printsec=frontcover&dq=poetry&hl=&cd=1&source=gbs_api",
            infoLink:
              "https://play.google.com/store/books/details?id=s3HtCgAAQBAJ&source=gbs_api",
            canonicalVolumeLink:
              "https://market.android.com/details?id=book-s3HtCgAAQBAJ",
            id: "s3HtCgAAQBAJ",
            shelf: "currentlyReading",
          },
        ]}
        updateShelf={functionTest}
      />
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
      <Shelfs
        booksArray={[
          {
            title: "The Android Invasion",
            authors: ["Christopher Black"],
            publisher: "Yearling",
            publishedDate: "1984-06-01",
            description:
              "In this multiple plot adventure, readers and their robot companion must stop armies of attacking androids before they conquer the galaxy.",
            industryIdentifiers: [
              {
                type: "ISBN_10",
                identifier: "0440400813",
              },
              {
                type: "ISBN_13",
                identifier: "9780440400813",
              },
            ],
            readingModes: {
              text: false,
              image: false,
            },
            pageCount: 117,
            printType: "BOOK",
            categories: ["Androids"],
            maturityRating: "NOT_MATURE",
            allowAnonLogging: false,
            contentVersion: "0.0.1.0.preview.0",
            imageLinks: {
              smallThumbnail:
                "http://books.google.com/books/content?id=tsRhkvo80iUC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
              thumbnail:
                "http://books.google.com/books/content?id=tsRhkvo80iUC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
            },
            language: "en",
            previewLink:
              "http://books.google.com/books?id=tsRhkvo80iUC&q=android&dq=android&hl=&cd=2&source=gbs_api",
            infoLink:
              "http://books.google.com/books?id=tsRhkvo80iUC&dq=android&hl=&source=gbs_api",
            canonicalVolumeLink:
              "https://books.google.com/books/about/The_Android_Invasion.html?hl=&id=tsRhkvo80iUC",
            id: "tsRhkvo80iUC",
            shelf: "currentlyReading",
          },
          {
            title: "The Hatred of Poetry",
            authors: ["Ben Lerner"],
            publisher: "FSG Originals",
            publishedDate: "2016-06-07",
            description:
              'No art has been denounced as often as poetry. It\'s even bemoaned by poets: "I, too, dislike it," wrote Marianne Moore. "Many more people agree they hate poetry," Ben Lerner writes, "than can agree what poetry is. I, too, dislike it and have largely organized my life around it and do not experience that as a contradiction because poetry and the hatred of poetry are inextricable in ways it is my purpose to explore." In this inventive and lucid essay, Lerner takes the hatred of poetry as the starting point of his defense of the art. He examines poetry\'s greatest haters (beginning with Plato\'s famous claim that an ideal city had no place for poets, who would only corrupt and mislead the young) and both its greatest and worst practitioners, providing inspired close readings of Keats, Dickinson, McGonagall, Whitman, and others. Throughout, he attempts to explain the noble failure at the heart of every truly great and truly horrible poem: the impulse to launch the experience of an individual into a timeless communal existence. In The Hatred of Poetry, Lerner has crafted an entertaining, personal, and entirely original examination of a vocation no less essential for being impossible.',
            industryIdentifiers: [
              {
                type: "ISBN_13",
                identifier: "9780374712334",
              },
              {
                type: "ISBN_10",
                identifier: "0374712336",
              },
            ],
            readingModes: {
              text: true,
              image: false,
            },
            pageCount: 96,
            printType: "BOOK",
            categories: ["Literary Criticism"],
            averageRating: 3.5,
            ratingsCount: 74,
            maturityRating: "NOT_MATURE",
            allowAnonLogging: true,
            contentVersion: "1.1.1.0.preview.2",
            panelizationSummary: {
              containsEpubBubbles: false,
              containsImageBubbles: false,
            },
            imageLinks: {
              smallThumbnail:
                "http://books.google.com/books/content?id=s3HtCgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
              thumbnail:
                "http://books.google.com/books/content?id=s3HtCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
            },
            language: "en",
            previewLink:
              "http://books.google.com/books?id=s3HtCgAAQBAJ&printsec=frontcover&dq=poetry&hl=&cd=1&source=gbs_api",
            infoLink:
              "https://play.google.com/store/books/details?id=s3HtCgAAQBAJ&source=gbs_api",
            canonicalVolumeLink:
              "https://market.android.com/details?id=book-s3HtCgAAQBAJ",
            id: "s3HtCgAAQBAJ",
            shelf: "currentlyReading",
          },
        ]}
        updateShelf={functionTest}
      />
    </BrowserRouter>
  );
  const shelfElement = document.querySelector(".bookshelf-title");
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
        bookTitle={"The Android Invasion"}
        bookAuthor={["Christopher Black"]}
        shelf={"currentlyReading"}
        book={{
          title: "The Android Invasion",
          authors: ["Christopher Black"],
          publisher: "Yearling",
          publishedDate: "1984-06-01",
          description:
            "In this multiple plot adventure, readers and their robot companion must stop armies of attacking androids before they conquer the galaxy.",
          industryIdentifiers: [
            {
              type: "ISBN_10",
              identifier: "0440400813",
            },
            {
              type: "ISBN_13",
              identifier: "9780440400813",
            },
          ],
          readingModes: {
            text: false,
            image: false,
          },
          pageCount: 117,
          printType: "BOOK",
          categories: ["Androids"],
          maturityRating: "NOT_MATURE",
          allowAnonLogging: false,
          contentVersion: "0.0.1.0.preview.0",
          imageLinks: {
            smallThumbnail:
              "http://books.google.com/books/content?id=tsRhkvo80iUC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
            thumbnail:
              "http://books.google.com/books/content?id=tsRhkvo80iUC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
          },
          language: "en",
          previewLink:
            "http://books.google.com/books?id=tsRhkvo80iUC&q=android&dq=android&hl=&cd=2&source=gbs_api",
          infoLink:
            "http://books.google.com/books?id=tsRhkvo80iUC&dq=android&hl=&source=gbs_api",
          canonicalVolumeLink:
            "https://books.google.com/books/about/The_Android_Invasion.html?hl=&id=tsRhkvo80iUC",
          id: "tsRhkvo80iUC",
          shelf: "currentlyReading",
        }}
      />
    </BrowserRouter>
  );
  const bookElement = screen.getByText(/The Android Invasion/i);
  expect(bookElement).toBeInTheDocument();
});

test("renders ShelfsControl component", () => {
  const functionTest = () => true;
  render(
    <BrowserRouter>
      <ShelfsControl
        shelf={"currentlyReading"}
        book={{
          title: "The Android Invasion",
          authors: ["Christopher Black"],
          publisher: "Yearling",
          publishedDate: "1984-06-01",
          description:
            "In this multiple plot adventure, readers and their robot companion must stop armies of attacking androids before they conquer the galaxy.",
          industryIdentifiers: [
            {
              type: "ISBN_10",
              identifier: "0440400813",
            },
            {
              type: "ISBN_13",
              identifier: "9780440400813",
            },
          ],
          readingModes: {
            text: false,
            image: false,
          },
          pageCount: 117,
          printType: "BOOK",
          categories: ["Androids"],
          maturityRating: "NOT_MATURE",
          allowAnonLogging: false,
          contentVersion: "0.0.1.0.preview.0",
          imageLinks: {
            smallThumbnail:
              "http://books.google.com/books/content?id=tsRhkvo80iUC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
            thumbnail:
              "http://books.google.com/books/content?id=tsRhkvo80iUC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
          },
          language: "en",
          previewLink:
            "http://books.google.com/books?id=tsRhkvo80iUC&q=android&dq=android&hl=&cd=2&source=gbs_api",
          infoLink:
            "http://books.google.com/books?id=tsRhkvo80iUC&dq=android&hl=&source=gbs_api",
          canonicalVolumeLink:
            "https://books.google.com/books/about/The_Android_Invasion.html?hl=&id=tsRhkvo80iUC",
          id: "tsRhkvo80iUC",
          shelf: "currentlyReading",
        }}
        updateShelf={functionTest}
      />
    </BrowserRouter>
  );
  const ShelfsControlElement = screen.getByText(/Move to\.\.\./i);
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
