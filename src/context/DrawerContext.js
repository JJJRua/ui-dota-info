import React, { createContext, useState } from 'react';


export const DrawerContext = createContext();

const DrawerProvider = (props) => {
    const [openMobile, setopenMobile] = useState(false);

    return (
        <DrawerContext.Provider
        value={{
            openMobile,
            setopenMobile
        }}>
            {props.children}
        </DrawerContext.Provider>
    );
};

export default DrawerProvider;