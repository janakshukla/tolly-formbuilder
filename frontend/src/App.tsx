import Container from "./components/custom/Container";
import Editor from "./components/custom/Editor";

const App = () => {
  return (
    <>
      <Container>
        <div className="flex flex-col h-screen w-screen bg-gray-100">
          <div className="h-1/4 bg-gradient-to-r from-violet-600 to-indigo-600">
            {/* this is the banner part */}
          </div>
          <div className="bg-stone-800 px-24 h-full"
          >

            <Editor/>
          </div>
        </div>
      </Container>
    </>
  );
};

export default App;
