import React from "react";
import { RegisterCardPage } from "./RegisterCardPage";

const user = { firstName: "John" };
export const App = () => {
    return <RegisterCardPage user={user} />;
};
