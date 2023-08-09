// import { themeSettings } from './themeSettings';
export type ThemeSettings={
    sidebarCollasp: boolean,
    sidebarHidden: boolean,
    mobielSidebar: boolean,
    semidark: boolean,
    monochrome: boolean,
    semiDarkTheme: string,
    isDark: boolean,
    skin: string,
    theme: string,
    isOpenSettings: boolean,
    cWidth: string,
    menuLayout: string,
    navbarType: string,
    isMouseHovered: boolean,
    footerType: string,
    direction: boolean,
    chartColors: {
        title: string,
    },
    toggleMsidebar:Function
}

export const themeSettings= {
    state: () => ({
        sidebarCollasp: false,
        sidebarHidden: false,
        mobielSidebar: false,
        semidark: false,
        monochrome: false,
        semiDarkTheme: "semi-light",
        isDark: false,
        skin: "default",
        theme: "light",
        isOpenSettings: false,
        cWidth: "full",
        menuLayout: "vertical",
        navbarType: "sticky",
        isMouseHovered: false,
        footerType: "static",
        direction: false,
        chartColors: {
            title: "red",
        },
    }),
    actions: {
        setSidebarCollasp(state:any) {
            state.sidebarCollasp = state.sidebarCollasp;
        },

        toogleDark(state:any) {
            state.isDark = !state.isDark;
            document.body.classList.remove(state.theme);
            state.theme = state.theme === "dark" ? "light" : "dark";
            document.body.classList.add(state.theme);
            localStorage.setItem("theme", state.theme);
        },

        toggleMonochrome() {
            const isMonochrome = (localStorage.getItem('monochrome') !== null);
            // state.monochrome = !state.monochrome;
            if(isMonochrome) {
                localStorage.removeItem("monochrome");
                document.getElementsByTagName( 'html' )[0].classList.remove('grayscale');
                return;
            } 
            localStorage.setItem("monochrome", 'true');
            document.getElementsByTagName( 'html' )[0].classList.add('grayscale');
            return;
        },

        toggleSettings(state:any) {
            state.isOpenSettings = !state.isOpenSettings;
        },
        toggleMsidebar(state:any) {
            state.mobielSidebar = !state.mobielSidebar;
        },
        toggleSemiDark(state:any) {
            state.semidark = !state.semidark;
            state.semiDarkTheme = state.semidark ? "semi-dark" : "semi-light";
            document.body.classList.toggle(state.semiDarkTheme);
            localStorage.setItem("semiDark", state.semidark);
        },
    },
}