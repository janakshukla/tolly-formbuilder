import { Hexagon } from "lucide-react";

import Editor from "@/components/custom/Editor";
import Title from "@/components/custom/Title";

const Create = () => {
  return (
    <>
      <div className="flex flex-col bg-editor md:items-center h-screen ">
        <div className="h-1/3 bg-red-100 w-full">
          {/* this is the banner part */}
        </div>
        <div className=" sm:px-24 w-full md:w-4/5 h-full">
          <div className="block relative">
            <div className="size-24 block relative  -top-12 left-16 hover:-top-13 transition-all bg-black rounded-full">
              <Hexagon className="text-white m-auto h-full z-10 size-10 font-extrabold " />
            </div>
          </div>
          <div className=" overflow-hidden">
            <Title />

            <Editor />
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;
