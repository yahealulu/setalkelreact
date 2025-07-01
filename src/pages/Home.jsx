import React from 'react'
import Categories from '../components/Categories'
import CategorySlider from '../components/CategorySlider'
import HeroSection from '../components/HeroSection'
import CategoryProducts from '../components/CategoryProducts'
import CountriesSection from '../components/CountriesSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf8f5]">
      <Categories />
      <HeroSection />
      <CountriesSection/>
      <CategorySlider />
      <CategoryProducts />
    </main>
  )
}