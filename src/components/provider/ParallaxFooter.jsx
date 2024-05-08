import React, { createContext, useState } from 'react'

export const BgBlur = createContext()

const ParallaxFooter = ({ children }) => {

    const [parallaxFooter, setParallaxFooter] = useState(false)
    // console.log(parallaxFooter);

    return (
        <BgBlur.Provider value={[parallaxFooter, setParallaxFooter]}>
            {children}
        </BgBlur.Provider>
    )
}

export default ParallaxFooter