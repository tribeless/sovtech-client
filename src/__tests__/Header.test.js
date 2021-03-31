import React from 'react';
import { render, screen,fireEvent,waitFor } from '../components/test-utils';
import user from "@testing-library/user-event";
import {AppHeader} from "../containers/Header/Header";

describe("Header component",()=>{
    render(<AppHeader />,{initialState:{personReducer:{viewTraits:{}}}});

    it("should render input element", async ()=>{
        expect(await screen.findByText("Star Wars")).toBeTruthy()
        expect(await screen.findByPlaceholderText("search for actors")).toBeTruthy()
    });
});