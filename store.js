import { configureStore } from "@reduxjs/toolkit";
import lang from "slices/lang";

export const store = configureStore({
    reducer: {
        lang
    }
})