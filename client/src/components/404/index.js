import { useEffect, useRef } from 'react'
import { Fireworks } from '@fireworks-js/react'

import styles from './styles.module.css'

function NotFound () {
  const mounted = useRef(false)

  useEffect(() => {
    console.log('--mounted', mounted.current, mounted)
    mounted.current = true

    return () => {
      mounted.current = false
    }
  }, [])

  return (
    <div className={styles.container}>
      <div styles={styles.fireworks}>
        <Fireworks
          ref={mounted}
          options={{ opacity: 0.5 }}
          style={{
            top: 0,
            left: 0,
            width: '100%',
            height: '320px'
          }}
        />
      </div>

      <div className={styles.centered}>
        <h1>Page not found</h1>
      </div>
    </div>
  )
}

export default NotFound
