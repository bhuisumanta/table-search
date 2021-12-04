import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { searchEngine } from "../../helper/searchHelper";
import { userListTransform } from "../../helper/dataTransformer";

function useHomePageHook() {
  const [state, setOriginState] = useState({
    userList: [],                 // To store the original API response (never get changed)
    searchResult: [],             // To store the list matches with the search query (Userd for render)
    searchResultSchema: [],       // To store the matched start index of every properties(string) (Used for highlighting text in the HTML)
    searchLength: 0,              // Length of the search query
  });

  /**
   * This is a short hand method to update partial property of the entire state
   * useCallback is used as it became a dependency of useEffect
   */
  const setState = useCallback((data) => {
    setOriginState((prev) => ({ ...prev, ...data }));
  }, []);

  /**
   * This function is used for filtering the data based on the search query
   * This is invoked when use type something in the filter box
   * @param {String} value 
   */
  const handleFilter = (value) => {
    // Filter the list is any swarch query is not empty
    if (value) {
      // Attempt for filter if the search query length is at least 3
      if (value.length > 2) {
        const res = searchEngine(state.userList, value);
        setState({
          searchResultSchema: res.schema,
          searchResult: res.newList,
          searchLength: value.length,
        });
      }
    } else {
      // Reset the list to the original value
      setState({
        searchResultSchema: [],
        searchResult: state.userList,
        searchLength: 0,
      });
    }
  };

  // On component mount we fetch the data from remote URL
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8080/user"
        );

        if (res && res.data && Array.isArray(res.data)) {
          // Transform the data
          const trsnData = userListTransform(res.data);

          // Save the response in the state variable
          setState({ userList: trsnData, searchResult: trsnData });
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [setState]);

  return {
    state,
    setState,
    handleFilter
  }
}

export default useHomePageHook;
