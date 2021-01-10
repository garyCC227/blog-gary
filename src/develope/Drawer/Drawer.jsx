import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Box, IconButton } from 'theme-ui'
import { FaBars, FaTimes } from 'react-icons/fa'
// import useScrollDisabler from '@components/useScrollDisabler'
import Loadable from '@loadable/component'
import './Drawer.css'

const DrawerMenu = Loadable(() => import('rc-drawer'))

const styles = {
  handler: {
    display: ['', '', 'none'], //to avoid ssr rehydration issue
    transition: `left 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86)`,
    left: -4
  },
  handlerOpen: {
    position: `fixed`,
    zIndex: 99999,
    left: 4,
    top: 4
  },
  content: {
    bg: `contentBg`,
    height: `full`,
    fontSize: 3,
    p: 4
  }
}

const Drawer = ({ container, width, locationState, ...props }) => {
  const [open, setOpen] = useState(false)

  const handleSwitch = () => {
    setOpen(!open)
  }

  const handlerStyle = open
    ? {
        ...styles.handler,
        ...styles.handlerOpen
      }
    : styles.handler

  const handler = (
    <IconButton
      onClick={handleSwitch}
      sx={handlerStyle}
      aria-label='Menu'
      {...props}
    >
      {open ? <FaTimes /> : <FaBars />}
    </IconButton>
  )

  useEffect(() => {
    open && locationState && handleSwitch()
  }, [locationState]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {/* {open && <ScrollDisabler />} */}
      {handler}
      <DrawerMenu
        width={width}
        open={open}
        getContainer={container}
        onHandleClick={handleSwitch}
        placement='right'
      >
        <Box sx={styles.content}>{props.children}</Box>
      </DrawerMenu>
    </>
  )
}

export default Drawer

Drawer.defaultProps = {
  width: 300,
  container: null
}

Drawer.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  container: PropTypes.instanceOf(PropTypes.element)
}
