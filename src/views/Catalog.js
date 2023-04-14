import React from 'react'

import useStore from '../hooks/useStore'

import '../css/catalog/Catalog.css'

export default function Catalog() {
  

  let [catalogStore] = useStore('catalogStore')
  let {show} = catalogStore
  return (
    <main className='catalog_main container'>
      {show}
    </main>
  )
}
