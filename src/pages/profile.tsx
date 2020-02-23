import React from 'react'
import { config, useSpring } from 'react-spring'
import Layout from '../components/layout'
import { AnimatedBox } from '../elements'
import SEO from '../components/SEO'

const Profile = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout>
      <SEO title="About | Faye + Walker Architects" desc="Faye + Walker is an Austin based multidisciplinary firm working primarily in the medium of Architecture. Our vision is to facilitate thoughtful dialog about space, function and individuality." />
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]}>
        <h2>Vision</h2>
        <p>
        Faye + Walker is an emerging Austin based multidisciplinary firm working primarily in the medium of Architecture. 
        Our vision is to facilitate thoughtful dialog about space, function and individuality. 
        We work to create spaces that are experienced not just physically or visually, but emotionally and intuitively. 
        Through the design process we encourage clients to learn more about themselves and how they interact with the built environment. 
        Our approach is based on communication, patience, sensitivity and respect. We work collaboratively to achieve simple, unique design solutions. 
        We are sensitive to the consequences of our work and give attention to the economic, ecological, social and emotional context of each project.
        </p>
        <p>
        Beyond meeting individual client needs Faye + Walker strives to participate in a larger conversation about design and art through community involvement. 
        We aim to create a portfolio not just of architectural projects but also public and private artworks.
        </p>
        <h2>Process & Approach </h2>
        <p>
        We begin our process by distilling existing ideas about function and thinking analytically about how the user interacts with the built environment. We work to synthesize aesthetics, needs and desires with quality and utility. We are committed to developing a schematic foundation on which to thoughtfully layer our client’s influences. We invest time with our clients in our initial interactions. This time is spent getting to know their personalities, needs, histories and desires. We believe this time, effort and communication upfront saves us from valuable mistakes or misunderstandings as the project progresses. We use this information to guide clients in decision making and assist clients in realizing their ideal spaces. We use patient and thorough communication as a tool to resolve the challenging or troublesome decisions that come with architectural projects. We respect the opinions and struggles of our clients throughout a project and feel that it is our role to act as a guide through these issues. In short, we strive to learn about the essence of our clients to better meet their needs.
        </p>
        <p>
        Many clients come to an architect with a collection of imagery from photos or experiences, or with specific programmatic requests. At Faye and Walker we strive to look deeper than those images and ideas. We want to understand the reasons behind choices. We ask our clients to reflect on their predetermined ideas and question them. We want to make sure we create spaces that fit our clients beyond aesthetic or stylistic preferences, beyond basic function. We hope to tap into the intuitive character of our clients and create spaces for them that contribute to their emotional well-being. We look to draw out of clients their most honest moments; the moments underneath the influences of specific imagery and the project itself. From these moments we produce an authentic and truthful space.
        </p>
        <p>
        Our ideal client is a collaborator. They are ready to engage in a thought provoking process that is based on respect, honesty and communication. They are not afraid to question standards and approach problems in a creative and exploratory way. We like people who are ready to go on the adventure of creating unique and individualized spaces. After the process of learning and information gathering with the clients we engage in design.
        </p>
        <p>
        We define our approach as a "careful manipulation". This intention brings thoughtfulness and sensitivity to context and emotional connectedness. All of our projects consider site, culture, climate, budget, function, aesthetic and desire. We strive to create sensible thresholds between the built environment and its relationship to the natural environment. Our approach to building is smart, sensitive, and clearly assesses our clients need and desires with respect for the impact we have on the remaining open spaces. We make efforts to preserve nature and its resources. With each project we investigate existing infrastructures and adapt them for smarter future growth.  
        </p>
        <h2>Services</h2>
        <p>
        Faye + Walker offers full architectural services and welcomes the challenge of any environmental design project with a particular interest in intimate spaces and homes. We offer the option of hiring us for on-site project management through construction to ensure that the designs are realized to their fullest potential.
        </p>
        <h2>
        People
        </h2>
        <p>
        hi.
        </p>
      </AnimatedBox>
    </Layout>
  )
}

export default Profile
