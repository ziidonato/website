import React from 'react'
import { motion } from 'framer-motion'
import styels from "styles/Page.module.scss";


const Links = () => (
    <div>
        <a className="w-min p-2" href="https://github.com/gatlace">
            <motion.i
                className="fa fa-xl fa-github"
                transition={{ type: "spring", stiffness: 200 }}
                whileHover={{ rotate: -315 }}
            />
        </a>
        <a className="w-min p-2" href="https://www.linkedin.com/in/zii-donato/">
            <motion.i 
                className="fa fa-xl fa-linkedin"
                transition={{ type: "spring", stiffness: 200 }}
                whileHover={{ rotate: -315 }}
            />
        </a>
    </div>
)

export default Links