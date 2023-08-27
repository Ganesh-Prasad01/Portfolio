import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
const services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>
              Crafting intuitive interfaces for seamless experiences.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
              Enhancing user journeys through thoughtful design.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
              Balancing aesthetics and functionality in UI/UX.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
              User-centered designs for impactful digital interactions.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
              Transforming ideas into visually engaging realities.
              </p>
            </li>
          </ul>
        </article>
      {/* End of UI/UX */}
      <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>
              Responsive designs that captivate and engage.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
              Interactive UI for seamless user experiences.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
              Scalable backend systems for robust functionality.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
              Optimized websites for fast loading speeds.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
              Custom plugins to elevate site capabilities.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
              Transforming ideas into captivating online realities.
              </p>
            </li>
          </ul>
        </article>
        {/* End of Web Development */}
        <article className="service">
          <div className="service__head">
            <h3>Interactive Dashboard Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>
              Intuitive layouts: Simplifying user data interaction.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
              Data visualization: Transforming complex information visually.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
              Interactive elements: Engaging user experiences seamlessly.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
              Consistent branding: Reflecting service identity cohesively.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
              User-centric approach: Prioritizing user needs foremost.
              </p>
            </li>
          </ul>
        </article>
        {/* End of Content Creation */}
      </div>
    </section>
  )
}

export default services