import React from 'react'
import styles from 'styles/Page.module.scss'

const projects = () => {
  return (
    <div>
        <h1 className={styles.h1}>
            Projects
        </h1>
        <div className="grid grid-cols-2 grid-rows-2">
          <div>grid 1</div>
          <div>grid 2</div>
          <div>grid 3</div>
          <div>grid 4</div>
        </div>
    </div>
  )
}

export default projects