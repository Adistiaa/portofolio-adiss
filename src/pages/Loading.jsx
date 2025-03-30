import React from 'react'

function Loading() {
  return (
    <div className="relative flex items-center justify-start w-11 h-11">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute top-0 left-0 flex items-center justify-start w-full h-full"
          style={{
            transform: `rotate(${i * 45}deg)`,
          }}
        >
          <div
            className="w-[20%] h-[20%] rounded-full bg-gray-800 dark:bg-white opacity-50 animate-pulse-dot"
            style={{
              animationDelay: `${-0.875 + i * 0.125}s`,
              boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)",
            }}
          ></div>
        </div>
      ))}
    </div>
  )
}

export default Loading