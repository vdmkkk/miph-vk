import { useEffect, useState } from "react";
import { useLocation } from "react-router"

export default function Navigator() {

    const location = useLocation();
    const [layout, setLayout] = useState<string>();
    console.log(location);

    useEffect(() => {
        
    })

    return (
        <div>
            <h1 className={layout == 'main' ? 'active' : ''}>Main</h1>
            <h1 className={layout == 'chats' ? 'active' : ''}>Chats</h1>
        </div>
    )
}