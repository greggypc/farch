import React from 'react'
import { config, useSpring } from 'react-spring'
import Layout from '../components/layout'
import { AnimatedBox } from '../elements'
import SEO from '../components/SEO'

const About = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout>
      <SEO title="About | Faye + Walker Architects" desc="Faye + Walker is an Austin based multidisciplinary firm working primarily in the medium of Architecture. Our vision is to facilitate thoughtful dialog about space, function and individuality." />
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]}>
        <h1>Faye + Walker Architects</h1>
        <p>
        Faye and Walker is an emerging Austin based multidisciplinary firm working primarily in the medium of Architecture. Our vision is to facilitate thoughtful dialog about space, function and individuality. We work to create spaces that are experienced not just physically or visually, but emotionally and intuitively. Through the design process we encourage clients to learn more about themselves and how they interact with the built environment. Our approach is based on communication, patience, sensitivity and respect. We work collaboratively to achieve simple, unique design solutions. We are sensitive to the consequences of our work and give attention to the economic, ecological, social and emotional context of each project.
        </p>
      </AnimatedBox>
    </Layout>
  )
}

export default About
