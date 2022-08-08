import React, { PropsWithChildren } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import styles from 'styles/Page.module.scss'


const Page = ({ children }: PropsWithChildren) => {
    const { asPath } = useRouter()
    return (
        <AnimatePresence
            exitBeforeEnter={true}
        >
            <motion.div
                className="h-screen"
                key={asPath}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1 }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
  )
}
export default Page