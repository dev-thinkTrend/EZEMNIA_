import React from 'react'
import Navbar from './navbar'
import Footer from './footer'

import { motion } from 'framer-motion'

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
   
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}>
        {children}
      </motion.main>

      <Footer />
    </>
  )
}

export default Layout
