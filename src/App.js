
import React from 'react'
import Header from './comp/Header'
import Home from './comp/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Details from './comp/Details'


const queryClient = new QueryClient();

function App() {
  return (
    <>
    <QueryClientProvider client={queryClient}> 
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product/:id' element={<Details/>}/>
    </Routes>
    </BrowserRouter>
    </QueryClientProvider>
    
    </>
  )
}

export default App