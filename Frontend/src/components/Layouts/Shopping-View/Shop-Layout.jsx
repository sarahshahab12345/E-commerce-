import React from 'react'
import { Outlet } from 'react-router-dom'

function ShopLayout() {
  return (
    <div className="flex min-h-screen w-full">
    <div className="flex flex-1 flex-col">
      <main className="flex-1 flex-col flex bg-muted/40 p-4 md:p-6">
        <Outlet />
      </main>
    </div>
  </div>
  )
}

export default ShopLayout