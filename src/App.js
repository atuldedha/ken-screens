import Discover from "./components/Discover";
import Header from "./components/Header";
import RandomUsers from "./components/RandomUsers";
import Sidebar from "./components/Sidebar";
import Story from "./components/Story";

function App() {
  return (
    <div className="bg-[#F3F3F3] flex w-full overflow-hidden">
      <Sidebar />
      <div className="w-full relative ml-[318px]">
        <Header />
        <div className="mt-14 top-0 absolute ml-5 py-10 flex space-x-5 w-[98%] overflow-scroll scrollbar-hide">
          <Story name="Atul" />
          <Story name="Atul" />
          <Story name="Atul" />
          <Story name="Atul" />
          <Story name="Atul" />
          <Story name="Atul" />
          <Story name="Atul" />
          <Story name="Atul" />
          <Story name="Atul" />
          <Story name="Atul" />
          <Story name="Atul" />
          <Story name="Atul" />
        </div>

        <div className="mt-40 mb-10">
          <Discover />
        </div>

        <div>
          <RandomUsers />
        </div>
      </div>
    </div>
  );
}

export default App;
