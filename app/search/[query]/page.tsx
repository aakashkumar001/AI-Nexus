import { Waypoints, Zap } from "lucide-react";

export default async function QueryPage() {
  return (
    <div className="ml-2">
      <h1 className="text-2xl text-neutral-800 font-semibold mt-4 ml-2">
        rare black moon
      </h1>

      <div className="flex gap-4 mt-4 items-center ml-2">
        <span>
          <Zap />
        </span>
        <strong className="text-xl text-neutral-800">Sources</strong>
      </div>
      <div className="flex mt-4 gap-3">
        <div className="shadow-inner p-3 bg-gray-200 w-48 rounded-md h-24 text-sm font-semibold overflow-hidden">
          <p>
            Black Moon 2024: Great news for all the skygazers! A rare celestial
            event, the black moon, is set to take place on De
          </p>
        </div>
        <div className="shadow-xl w-48 p-3 bg-gray-200 rounded-md h-24 text-sm font-semibold overflow-hidden">
          <p>
            Black Moon 2024: Great news for all the skygazers! A rare celestial
            event, the black moon, is set to take place on De
          </p>
        </div>
        <div className="shadow-xl w-48 p-3 bg-gray-200 rounded-md h-24 text-sm font-semibold overflow-hidden">
          <p>
            Black Moon 2024: Great news for all the skygazers! A rare celestial
            event, the black moon, is set to take place on De
          </p>
        </div>
      </div>
      <div className="ml-2 mt-4 flex gap-2">
        <span><Waypoints/></span>
        <h2 className="text-md font-semibold text-gray-900">Answers</h2>
      </div>
    </div>
  );
}
