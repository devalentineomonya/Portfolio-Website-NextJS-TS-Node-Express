"use client";
import { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { BookCard } from "@/components/common/book-card";
import { urlFor } from "@/sanity/lib/image";
import { Book } from "@/types/books";

const levels = [
  { id: "all", label: "All Levels" },
  { id: "beginner", label: "Beginner" },
  { id: "intermediate", label: "Intermediate" },
  { id: "advanced", label: "Advanced" },
];

interface BooksClientProps {
  books: Book[];
}

const BooksClient: React.FC<BooksClientProps> = ({ books }) => {
  const [selectedLevel, setSelectedLevel] = useState<
    "all" | "beginner" | "intermediate" | "advanced"
  >("all");

  const filteredBooks = books.filter(
    (book) =>
      selectedLevel === "all" ||
      book.level.includes(
        selectedLevel as "beginner" | "intermediate" | "advanced"
      )
  );

  return (
    <>
      <div className="flex justify-between items-center gap-4 my-5">
        <div>
          <ToggleGroup
            type="single"
            variant="outline"
            value={selectedLevel}
            onValueChange={(value) =>
              setSelectedLevel(
                (value as "all" | "beginner" | "intermediate" | "advanced") ||
                  "all"
              )
            }
          >
            {levels.map((level) => (
              <ToggleGroupItem
                key={level.id}
                value={level.id}
                className="text-foreground data-[state=on]:bg-black dark:data-[state=on]:bg-white data-[state=on]:text-white dark:data-[state=on]:text-black"
              >
                {level.label}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBooks.map((book) => (
          <BookCard
            key={book._id}
            image={urlFor(book.image).url()}
            title={book.title}
            author={book.author}
            purchaseLink={book.purchaseLink}
            onlineReadLink={book.onlineReadLink}
            level={book.level}
          />
        ))}
      </div>
    </>
  );
};

export default BooksClient;
