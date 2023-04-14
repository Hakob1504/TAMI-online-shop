import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../views/Home'
import Help from '../views/Help'
import Info from '../components/help/Info'
import Catalog from '../views/Catalog'
import Category from '../components/catalog/Category'
import NewsLetter from '../views/NewsLetter'
import SignIn from '../components/sign/SignIn'
import Register from '../components/sign/Register'

export default function Router() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/register' element={<Register />} />
        <Route path='/help' element={<Help />} />
        <Route path='/help/:path' element={<Info />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/catalog/:category' element={<Category />} />
        <Route path='/newsletter' element={<NewsLetter />} />
    </Routes>
  )
}