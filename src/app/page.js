import Category from '@/components/Category'
import DreamCompany from '@/components/DreamCompany'
import RecommendeCompany from '@/components/RecommendeCompany'
import Results from '@/components/Results'
import React from 'react'

export default function page() {
  return (
    <div>
      <DreamCompany/>
      <RecommendeCompany/>
      <Category/>
      <Results/>
    </div>
  )
}
