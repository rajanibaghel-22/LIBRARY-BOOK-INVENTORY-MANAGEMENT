import React, { useState } from "react";
import { Link } from "react-router";
import { PlusIcon, SearchIcon, BarChart3 } from "lucide-react";

const Navbar = ({ search, setSearch }) => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="bg-emerald-400 border-b border-black-500 base-content/10">
      <div className="ms-auto max-6xl p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-primary font-serif tracking-tight">
            Library Book Inventory
          </h1>

          <div className="flex item-center gap-4">
            {/* Search Button */}
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="btn btn-primary rounded-lg"
            >
              <SearchIcon className="size-5" />
              <span>Search</span>
            </button>

            {/* Report Button */}
            <Link to="/report" className="btn btn-primary rounded-lg">
              <BarChart3 className="size-5" />
              <span>Report</span>
            </Link>

            {/* New Book Button */}
            <Link to="/create" className="btn btn-primary rounded-lg">
              <PlusIcon className="size-5" />
              <span>New Book</span>
            </Link>
          </div>
        </div>

        {/* Search Input Below Navbar */}
        {showSearch && (
          <div className="mt-4">
            <input
              type="text"
              placeholder="Search book..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="input input-bordered w-full"
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
