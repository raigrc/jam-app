import React from 'react'
import { Skeleton } from './ui/skeleton'

const RecentSkeleton = () => {
  return (
    <div className='space-y-3'>
      <Skeleton className='h-10'/>
      <Skeleton className='h-10'/>
      <Skeleton className='h-10'/>
      <Skeleton className='h-10'/>
      <Skeleton className='h-10'/>
      <Skeleton className='h-10'/>
      <Skeleton className='h-10'/>
      <Skeleton className='h-10'/>
    </div>
  )
}

export default RecentSkeleton