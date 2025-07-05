import {Hexagon } from "lucide-react";

import Editor from "@/components/custom/Editor";
import Title from "@/components/custom/Title";


const Create = () => {
  return (
    <>
     
        <div className="flex flex-col h-screen  bg-gray-100">
          <div className="h-1/3 bg-red-100">
            {/* this is the banner part */}
          </div>
          <div className= "bg-editor sm:px-24 h-full"
          >
            <div className="block relative">
              <div className="size-24 block relative  -top-12 left-1/7 hover:-top-13 transition-all bg-black rounded-full" >
              <Hexagon  className="text-white m-auto h-full z-10 size-10 font-extrabold "  />
              </div>
            </div>
            <Title/>

            <Editor/>
          </div>
        </div>
      
    </>
  );
};

export default Create;
