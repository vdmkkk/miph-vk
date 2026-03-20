import { Outlet } from "react-router";
import Navigator from "../components/Navigator/Navigator";

export default function ChatsLayout() {
    return (
        <div>
            <Outlet/>
            <Navigator/>
        </div>
    )
}