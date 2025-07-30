// app/components/SearchBar.tsx
"use client";

import { Search, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar({ styling }: any) {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?query=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`not-prose relative max-w-lg ${styling}`}
    >
      <label htmlFor="searchBar" className="sr-only">
        بحث
      </label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <Search className="size-5 text-muted-foreground" aria-hidden="true" />
        </div>
        <input
          id="searchBar"
          name="query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="block w-full rounded-md border-0 bg-white py-4 px-10 text-foreground shadow-sm ring-1 ring-inset ring-border placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-accent sm:text-lg sm:leading-6"
          placeholder="ادخل رقم القطعة أو الموديل أو نوع المعدة..."
          type="search"
          dir="rtl"
        />
        <button
          type="submit"
          className="absolute inset-y-0 right-0 flex items-center pr-3"
        >
          <ArrowRight className="size-5 text-muted-foreground" />
        </button>
      </div>
    </form>
  );
}
