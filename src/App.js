import { useEffect, useState } from "react";
import "./App.scss";
import Pagination from "./components/Pagination/Pagination";
import PostFiltersForm from "./components/PostFiltersForm/PostFiltersForm";
import PostList from "./components/PostList/PostList";
import ToDoForm from "./components/ToDoForm/ToDoForm";
import ToDoList from "./components/ToDoList/ToDoList";

function App() {
  const [todos, setToDoList] = useState([
    { id: 1, title: "Go to school" },
    { id: 2, title: "Go to bed" },
    { id: 3, title: "Eat" },
  ]);

  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  });
  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 10,
    title_like: "",
  });

  useEffect(() => {
    async function fetchPostList() {
      try {
        const paramsString = `_limit=${filters._limit}&_page=${filters._page}&title_like=${filters.title_like}`;
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json(response);

        const { data, pagination } = responseJSON;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log(error);
      }
    }

    fetchPostList();
  }, [filters]);

  function handleToDoClick(todo) {
    const index = todos.findIndex((item) => item.id === todo.id);

    if (index < 0) return;

    const newToDo = [...todos];
    newToDo.splice(index, 1);

    setToDoList(newToDo);
  }

  function handleSubmit(formValue) {
    const newToDoList = [...todos];
    const newToDo = {
      id: Math.random(),
      ...formValue,
    };

    newToDoList.push(newToDo);
    setToDoList(newToDoList);
  }

  function handlePageChange(newPage) {
    console.log(newPage);
    // console.log(filters);
    setFilters({
      ...filters,
      _page: newPage,
    });
  }

  function handleFiltersChagne(newFilters) {
    setFilters({
      ...filters,
      _page: 1,
      title_like: newFilters.searchTerm,
    });
  }

  return (
    <div className="app">
      Welcome to React-hooks
      {/* <ColorBox /> */}
      {/* <ToDoForm onSubmit={handleSubmit} />
      <ToDoList todos={todos} onToDoClick={handleToDoClick} /> */}
      <PostFiltersForm onSubmit={handleFiltersChagne} />
      <PostList posts={postList} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
    </div>
  );
}

export default App;
