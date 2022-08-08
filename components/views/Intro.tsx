import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import styles from 'styles/Page.module.scss'

const Intro = () => {
  return (
    <div className="h-full">
      <h1 className={styles.h1}>
        Hi!
      </h1>
      <h2 className="pt-4 text-center text-4xl">
      I write code. 
      </h2>
      <h3 className="pt-12 text-center text-3xl">
        <Link href="/projects">
          <a className={styles.link}>
            Wanna see?{' '}
            <i className="fa fa-arrow-right" />
          </a>
        </Link>
      </h3>
      <div className="flex items-center justify-center h-96">
        <a className={styles.link}>
          <motion.i 
            className="fa fa-arrow-down fa-6x"
            whileHover={{ scale: 1.1 }}
          />
        </a>
      </div>
    </div>
  )
}

export default Intro