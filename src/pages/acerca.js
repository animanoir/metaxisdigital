import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="acerca" />
      <div id="about">
        <div className='acerca-about'>
        <p ><b>metaxis.digital (en construcción)</b> es un blog comunitario enfocado a la relación simbiótica/parásica entre la filosofía y la computación, ésto dentro del contexto de <b>la era metamoderna</b>.</p>
        <p >el obetivo de <b>metaxis.digital</b> es crear un punto de reunión para quienes les interese entender los vertiginosos cambios que la humanidad está viviendo ahora.</p>
        <p>la computadora es una extensión de nuestra mente, razón, pensamientos. extrae de nosotros la idea, la computadra la procesa más rápido que nosotros por medio de cálculos que serían humanamente imposible hacer. Transhumanismo. hemos sido cyborgs todo este tiempo.</p>
        <p>El repositorio está aquí: <a href="https://github.com/animanoir/metaxisdigital">https://github.com/animanoir/metaxisdigital</a>. </p>
        </div>
      </div>
    </Layout>
  )
}
export default AboutPage
