import React, { useState } from "react";
import Swal from "sweetalert2";
import { db } from "../firebaseConfig/firebase";
import { addDoc, collection } from "firebase/firestore";
import "../css/formStyles.scss";
import Header from "./Header";
import Footer from "./Footer";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { name, email, subject, message } = formData;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) {
      Swal.fire("Dont leave empty fields!");
    } else {
      await addDoc(collection(db, "form"), {
        ...formData,        
      })
      setFormData({name: "", email: "", subject:"", message:""});
      Swal.fire("Form sent!")
    }
  };

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
    <Header />
    <section className="contact-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="wrapper">
              <div className="row no-gutters">
                <div className="col-md-6">
                  <div className="contact-wrap w-100 p-lg-5 p-4">
                    <h3 className="mb4"> Envianos un mensaje</h3>
                    <form
                      id="contactForm"
                      className="contactForm"
                      onSubmit={handleSubmit}
                    >
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              name="name"
                              placeholder="Nombre"
                              onChange={handleInputChange}
                              value={name}
                            />
                          </div>
                        </div>

                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              placeholder="E-mail"
                              onChange={handleInputChange}
                              value={email}
                            />
                          </div>
                        </div>

                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              name="subject"
                              placeholder="Motivo"
                              onChange={handleInputChange}
                              value={subject}
                            />
                          </div>
                        </div>

                        <div className="col-md-12">
                          <div className="form-group">
                            <textarea
                              type="text"
                              className="form-control"
                              name="message"
                              placeholder="Mensaje"
                              cols="30"
                              rows="6"
                              onChange={handleInputChange}
                              value={message}
                            >
                              {" "}
                            </textarea>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="submit"
                              value="Enviar Mensaje"
                              className="btn btn-primary"
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-md-6 d-flex align-items-stretch">
                  <div className="info-wrap w-100 p-lg-5 p-4 img">
                    <h3>Contactanos</h3>
                    <p className="mb-4">Mandanos una sugerencia</p>
                    <div className="dbox w-100 d-flex align-items-start">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-map-marker text-light"></span>
                      </div>
                      <div className="text pls-3">
                        <p>
                          <span>Dirección:</span> 123 Avenida Siempre Viva, Rosario, Santa Fe, Argentina.
                        </p>
                      </div>
                    </div>
                    <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-phone text-light"></span>
                      </div>
                      <div className="text pls-3">
                        <p>
                          <span>Telefono:</span>
                          <a href="tel://5493417152533"> +54934171525-33</a> 
                        </p>
                      </div>
                    </div>
                    <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-paper-plane text-light"></span>
                      </div>
                      <div className="text pls-3">
                        <p>
                          <span>E-mail:</span>
                          <a href="mailto:franco@codoacodo.com"> franco@codoacodo.com</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default Form;
