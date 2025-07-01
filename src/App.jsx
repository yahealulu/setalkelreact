import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './i18n/i18n'
import { OrderProvider } from './context/OrderContext'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'
import VariantPage from './pages/VariantPage'
import Login from './pages/Login'
import Register from './pages/Register'
import NewOrder from './pages/NewOrder'
import ProductVariantsPage from './pages/ProductVariantsPage'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <OrderProvider>
        <Router>
          <div className="relative">
            <Header />
            <ToastContainer />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:locale" element={<Home />} />
              <Route path="/:locale/:product" element={<ProductPage />} />
              <Route path="/:locale/:product/:variant" element={<VariantPage />} />
              <Route path="/auth/login" element={<Login />} />
              <Route path="/auth/register" element={<Register />} />
              <Route path="/orders/new" element={<NewOrder />} />
              <Route path="/orders/new/product/:id" element={<ProductVariantsPage />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </OrderProvider>
    </QueryClientProvider>
  )
}

export default App