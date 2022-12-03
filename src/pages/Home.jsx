import AddTodo from "../components/sections/AddTodo";
import Footer from "../components/sections/Footer";
import ToDoList from "../components/sections/ToDoList";

const Home = () => {
  return (
    <section className="container mx-auto px-4">
      <div className="shadow-lg">
        <AddTodo />
        <ToDoList />
        <Footer />
      </div>
    </section>
  );
};

export default Home;