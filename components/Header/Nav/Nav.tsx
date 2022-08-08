import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import Portal from '../../basic/Portal';
import Link from 'next/link';
import styles from "styles/Nav.module.scss";

const NavButton = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggle = () => setIsOpen(!isOpen)

  return (
    <>
      <div className="text-end">
        <motion.i
            aria-hidden
            className="fas fa-bars fa-xl grow-0"
            whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
            whileTap={{ scale: 0.9, transition: { duration: 0.1 } }}
            onClick={toggle}
        />
      </div>
        <AnimatePresence>
        {isOpen && <Portal onClose={toggle} styles="absolute right-4 top-20">
          <Nav onClose={toggle}/>
          </Portal>}
        </AnimatePresence>
    </>
  )
}
const Nav = (props: { onClose: () => void}) => {
    const links = [
      {
          name: 'Projects',
          href: '/projects'
      },
      {
          name: 'Home',
          href: '/'
      },
    ]

    const navItems = links.map((link, index) => {
      return <NavItem key={index} href={link.href} text={link.name} onClose={props.onClose}/>
    });

  return (
    <div className={styles.nav}>
    {navItems}
    </div>
  )
}

interface NavItemProps {
    href: string
    text: string
    onClose: () => void
}

const NavItem = (props: NavItemProps) => {

  return (
    <Link href={props.href}>
        <a 
          className={styles.navItem}
          onClick={props.onClose}
        >
            {props.text}
            <i className="fas fa-chevron-right grow-0 mr-2" />
        </a>
    </Link>
  )
}

export default NavButton