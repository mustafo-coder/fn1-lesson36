import Category from '@/components/Category'
import Discover from '@/components/Discover'
import DreamCompany from '@/components/DreamCompany'
import RecommendeCompany from '@/components/RecommendeCompany'
import Results from '@/components/Results'
import React from 'react'

export default function page() {
  return (
    <div>
      <Discover/>
      <DreamCompany/>
      <RecommendeCompany/>
      <Category/>
      <Results/>
    </div>
  )
}
