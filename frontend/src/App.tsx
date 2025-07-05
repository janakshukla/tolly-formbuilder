import {Hexagon } from "lucide-react";
import Container from "./components/custom/Container";
import Editor from "./components/custom/Editor";
import Title from "./components/custom/Title";

const App = () => {
  return (
    <>
      <Container>
        <div className="flex flex-col h-screen w-screen  bg-gray-100">
          <div className="h-1/3 bg-red-100">
            {/* this is the banner part */}
          </div>
          <div className= "bg-editor px-24 h-full"
          >
            <div className="block relative">
              <div className="size-24 block relative  -top-12 left-1/7  bg-black rounded-full" >
              <Hexagon  className="text-white m-auto h-full z-10 size-10 font-extrabold "  />
              </div>
            </div>
            <Title/>

            <Editor/>
          </div>
        </div>
      </Container>
    </>
  );
};

export default App;
