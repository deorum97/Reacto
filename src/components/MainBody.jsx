import React from "react";
import Main from './Main'

import { GlobalProvider } from './GlobalState.jsx'

export const MainBody=()=>{
    return (
        <GlobalProvider>
            <Main />
        </GlobalProvider>
    )
}
