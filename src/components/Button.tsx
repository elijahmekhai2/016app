import { useRouter } from "next/navigation"
import path from "path";


interface ButtonProps{
title: string
path: string
}

export default function Button({title,path}: ButtonProps) {
const router= useRouter()
  return (
      <div>
      <button className="px-2 py-4 bg-grey-400 text-white" onClick={() => router.push(path)}>{title}</button>
      </div>
    );
  }
