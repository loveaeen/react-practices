'use client'
import { useState } from "react";
import Card from "@/app/ui/card";

export default function AvatarPage() {
    const [isActive, setIsActive] = useState(0);
    return (
        <>
            <Card isActive={isActive === 0} onShow={() => setIsActive(0)}/>
            <Card isActive={isActive === 1} onShow={() => setIsActive(1)}/>
        </>
    )
}