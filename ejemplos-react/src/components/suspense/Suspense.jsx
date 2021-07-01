import React, { lazy } from 'react'

const Suspense = () => {
  const CmpPerezoso = lazy(() => import('./CmpPerezoso'))
  return (
    <div>
      <h1>Suspense</h1>
      <React.Suspense fallback={<p>Cargando...</p>}>
        <CmpPerezoso />
      </React.Suspense>
    </div>
  )
}

export default Suspense
