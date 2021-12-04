import React from "react";
import TableView from "./TableVIew";
import FilterForm from "./FilterForm";
import useHomePageHook from "./hooks/useHomePageHook";

function HomePage() {
  const { state, handleFilter } = useHomePageHook();

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Table Search</h1>
      <FilterForm onChange={handleFilter} />
      <div className="table-container">
        <TableView
          data={state.searchResult}
          schema={state.searchResultSchema}
          qLength={state.searchLength}
        />
      </div>
    </div>
  );
}

export default HomePage;
