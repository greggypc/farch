import React from 'react'
import { config, useSpring } from 'react-spring'
import Layout from '../components/layout'
import { AnimatedBox } from '../elements'
import SEO from '../components/SEO'

const Contact = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  const mailboxes = require('../../src/images/contactsplashimage.jpg')

  return (
    <Layout>
      <SEO title="About | Faye + Walker Architects" desc="Faye + Walker is an Austin based multidisciplinary firm working primarily in the medium of Architecture. Our vision is to facilitate thoughtful dialog about space, function and individuality." />
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]}>
        <img src={mailboxes}> 
        </img>
        <p>
Contact form...        </p>
      </AnimatedBox>
    </Layout>
  )
}

export default Contact
