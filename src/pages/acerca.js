import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import imgAros from "../../static/images/acerca/md1-optimjpg.jpg"
import imgEterico from "../../static/images/acerca/eterico-optim.jpg"
import colabOscar from "../../static/images/acerca/colaboradores/colab-oamm.jpg"

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="acerca" />
      <div id="about">
        <div className="acerca-about main-container">
          <p className="acerca-p">
            <b>metaxis.digital</b> es un blog comunitario enfocado en la
            relación simbiótica entre la <b>filosofía y la computación</b>{" "}
            dentro de un marco <b>metamoderno</b>.
          </p>
          <a href="https://www.flickr.com/photos/animanoir/42124835894/in/dateposted-public/">
            <img
              style={{ width: "100%", margin: "2rem 0" }}
              src={imgAros}
              alt="aros"
            />
          </a>
          <p className="acerca-p">
            El obetivo de <b>metaxis.digital</b> es crear un punto de reunión
            para quienes les interese entender los vertiginosos cambios que la
            humanidad está viviendo en este preciso momento, para ver "más allá"
            (meta) de lo que nuestras circunstancias actuales nos intentan
            limitar.
          </p>
          <a href="https://www.hicetnunc.xyz/objkt/198017">
            <img
              style={{ width: "100%", margin: "2rem 0" }}
              src={imgEterico}
              alt="phlor-eterea"
            />
          </a>
          <div className="acerca-adorno">
            <p>〇</p>
            <p>〇</p>
            <p>〇</p>
          </div>
          <div>
            <center>
              <h3 style={{ marginBottom: "7rem" }}>
                <b>Colaboradores:</b>
              </h3>
            </center>
            <div className="acerca-colaboradores">
              <img className="colab-foto" src={colabOscar} />
              <div className="colab-info">
                <p>
                  <b>Óscar A. Montiel</b>
                </p>
                <p>Redactor, programación.</p>
                <p>
                  <a href="https://linktr.ee/animanoir">Linktree</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default AboutPage
