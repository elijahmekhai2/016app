import { useRouter } from "next/navigation";
import path from "path";

interface ButtonProps {
  title: string;
  path: string;
}

export default function Button({ title, path }: ButtonProps) {
  const router = useRouter();
  return (
    <div>
      <button
        className="px-1 py-2 h-full bg-grey-400 text-white rounded-md hover:bg-red-500"
        onClick={() => router.push(path)}
      >
        {title}
      </button>
    </div>
  );
}
