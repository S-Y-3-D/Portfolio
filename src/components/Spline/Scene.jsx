import React, { Suspense } from 'react';
const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function Scene() { 
  return (
    <div className='absolute top-44  right-0  h-3/4 w-2/4'>
          <Suspense fallback={<div>Loading...</div>}>
         <Spline scene="https://prod.spline.design/sEqwZRIDWJwUjstQ/scene.splinecode" />
         </Suspense>
    </div>
  )
}
