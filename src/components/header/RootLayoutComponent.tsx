import {Outlet} from "react-router-dom";
import {NavbarComponent} from "./NavBarComponent.tsx";

export const RootLayoutComponent = () => {
    return (
        <>
            <NavbarComponent></NavbarComponent>
            <Outlet></Outlet>
        </>
    );
};