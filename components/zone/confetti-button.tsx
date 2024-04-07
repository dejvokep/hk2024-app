"use client";
import {Button} from "@/components/ui/button";
import confetti from "canvas-confetti";

export default function ConfettiButton() {
    return <Button className={"w-full py-7 mt-4 rounded-lg"} onClick={() => confetti()}>Buy</Button>
}