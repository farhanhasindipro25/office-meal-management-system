import { InformationCircleIcon } from "@heroicons/react/24/outline";

export default function GenericErrorBox({ backendErrors }) {
  return (
    <div className="flex items-center gap-2 rounded-lg bg-red-100 p-2 text-sm font-medium text-red-600">
      <InformationCircleIcon className="h-5 w-5 text-red-500" />
      {backendErrors}
    </div>
  );
}
