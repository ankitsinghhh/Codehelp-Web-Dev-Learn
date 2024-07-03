import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppContextProvider from "./context/AppContext"
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(



    <BrowserRouter>
        <AppContextProvider>

            <App />
        </AppContextProvider>
    </BrowserRouter>


    // {/* learnign context API

    // Props drilling -> sending varibales &  function to child from parent , from that child to that child's children and so on

    // State Lifting -> sending varibales & function to parent from child to that parent's parent and so on

    // Context API -> passing variables directly between components without passing them as props

    // context - > snapshot of data

    // ek baar data create krdo context api se , fir kahi v access kr skte h uske children me

    // */}

    // {

    // // Rules to use Context API ,

    // //1. create context
    // // jis compoent ko denge , wo aur uske saare children access kr skte h is context ko

    // //2. providing context / provision of context

    // // 3. consuming context
    // }


);
