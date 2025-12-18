import "./App.css";
// import Accordion from "./components/Accordion";
// import Onlinequiz from "./components/Onlinequiz";
// import RandomColor from "./components/RandomColor";
// import StarRating from "./components/StarRAting";
// import LoadMore from "./components/LoadMore";
// import Calculator from "./components/Calculator";
// import ToDoList from "./components/ToDoList";
// import TreeUI from "./components/TreeUI";
// import RailwayTRack from "./components/RailwayTrack";
// import Multitrack from "./components/Multitrack";
// import Sample from "./components/sample";
// import RailwayTRack from "./components/Tracknew";
// import GKDMRK from "./components/GKD-MRK";
// import ExpenseList from "./components/ExpenseList";
import CounterPanel from "./components/CounterPanel";
import Gallery from "./components/Gallery";
import LedBulb from "./components/LedBulb";
import Search from "./components/Search";
import Input from "./components/Input";
import Timer from "./components/Timer";
import AutoFocusInput from "./components/AutoFocusInput";
import CountChar from "./components/CountChar";
import Toggle from "./components/Toggle";
import Todo from "./components/Todo";
import PrimeChecker from "./components/PrimeChecker";
import { NameProvider } from "./context/dataContext";
import ParentComponent from "./components/ParentComponent";
import Task1 from "./components/Task1";
import Task2 from "./components/Task2";
import Task3 from "./components/Task3";
import Task4 from "./components/Task4";
import UserSearch from "./components/UserSearch";
import SimpleForm from "./components/SimpleForm";
function App() {
  return (
    <NameProvider>
      <UserSearch />
    </NameProvider>
  );
}

export default App;
