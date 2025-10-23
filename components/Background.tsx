import React, {ReactNode} from 'react'

interface BackgroundProps {
    children: ReactNode
}

const Background: React.FC<BackgroundProps> = ({children}) => {
  return (
    <div>
      {/* Rounded white rectangle background */}
      <div className="
        absolute top-[520px] md:top-[520px] lg:top-[60ppx] w-full 
        bg-green-100
        left-1/2 -translate-x-1/2
        
        shadow-[0_18px_40px_rgba(0,0,0,0.22)]
        mx-auto
        min-h-[1200px]
      ">
          <div className="
        absolute top-20 md:top-30 lg:top-40 w-full 
        bg-[#40A700]
        rounded-[40px]
        shadow-[0_18px_40px_rgba(0,0,0,0.22)]
        mx-auto
        min-h-[1200px]
      ">
          <div className="
        absolute top-5  w-full 
        bg-white
        rounded-[40px]
        shadow-[0_18px_40px_rgba(0,0,0,0.22)]
        mx-auto
        min-h-[1200px]
      "></div>
      </div>
      </div>

      

      {/* Content layer */}
      <div className="relative z-10 w-full max-w-[1000px] p-8 md:p-16">
        {children}
      </div>
    </div>
  )
}

export default Background
