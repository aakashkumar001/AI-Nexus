import { PopsicleIcon } from "lucide-react";

export const HomeCards = () => {
  return (
    <div className="flex gap-16 h-24 max-w-[480px] max-h-[280px] px-10 justify-center items-center">
      <div className="rounded-md border-neutral-400 border-2 relative">
        <h3 className="px-3 py-1 text-neutral-800">
          Search anythinnbnbndg whdtstjk
        </h3>
        <PopsicleIcon className="mx-3 my-2 p-1 absolute bottom-0 left-0" />
      </div>
      <div className="rounded-md border-neutral-400 border-2 relative">
        <h3 className="px-3 py-1 text-neutral-800">
          Search anythinnbnbndg whdtstjk
        </h3>
        <PopsicleIcon className="mx-3 my-2 p-1 absolute bottom-0 left-0" />
      </div>
    </div>
  );
};
