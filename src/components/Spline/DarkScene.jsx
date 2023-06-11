import React,{Suspense} from 'react'
const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function Scene() {
  return (
    <div className='absolute -z-10 top-0 w-full h-full right-0 '>
      <Suspense fallback={<div>Loading...</div>}>
         <Spline className='w-full' scene="https://prod.spline.design/fZYDWzS9LzSTmEfR/scene.splinecode" />
         </Suspense>
    </div>
  )
}
