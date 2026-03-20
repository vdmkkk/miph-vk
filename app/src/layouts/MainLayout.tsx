import { Outlet, useNavigate } from "react-router";
import './MainLayout.css'
import Navigator from "../components/Navigator/Navigator";

export default function MainLayout() {

    let navigate = useNavigate();

    return (
        <div>
            <Outlet/>
            <div className="navigator">
                <button>Лента</button>
                <button>Чаты</button>
                <button>Профиль</button>
            </div>
            <Navigator/>
        </div>
    )
}