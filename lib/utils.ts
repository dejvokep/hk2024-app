import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function makeDemoId(id: string, demo?: boolean) {
  return demo ? id.replace("a", "b").replace("e", "a").replace("c", "d") : id
}