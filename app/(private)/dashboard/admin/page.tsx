import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: {
    template: '%s | Admin Dashboard',
    absolute: 'Admin | Dashboard'
  },
  description: 'Admin section of Dashboard with Admin Credentials',
}

const Admin = () => {
  return (
    <div>Admin</div>
  )
}

export default Admin