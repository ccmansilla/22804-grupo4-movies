import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, where, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebaseConfig/firebase';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import 'animate.css';
import '../css/Comentarios.css';


function Comentarios({ usuario = '', pelicula = '' }) {

    console.log(usuario);

    //configuración de los hook
    const [comentarios, setComentarios] = useState([]);
    const [comentario, setComentario] = useState('');

    //referenciar la db de firebase
    const comentariosCollection = collection(db, 'comentarios');
    const q = query(comentariosCollection, where("Pelicula", "==", pelicula));

    //creamos la funcionabilidad para mostrar los comentarios con asincronismo
    const getComentarios = async () => {
        const data = await getDocs(q);
        setComentarios(
            data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
    }

    //alerta nuevo comentario agregado
    const alertaCreacion = () => {
        Swal.fire({
            title: 'Comentario Agregado',
            icon: 'success',
            confirmButtonText: 'Listo',
            color: '#fff',
            background: 'rgba(51, 51, 51)',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        });
    }

    //agregar comentario
    const agregarComentario = async (e) => {
        const email = (usuario === '')? 'Anonimo' : usuario;
        const fecha = new Date();
        const fechaString = fecha.getDate()  + "/" + (fecha.getMonth()+1) + "/" + fecha.getFullYear();
        e.preventDefault();
        await addDoc(comentariosCollection, { Pelicula: pelicula, Usuario: email, Fecha: fechaString, Comentario: comentario });
        setComentario('');
        alertaCreacion();
        getComentarios();
    }

    //declaración función delete para eliminar registros
    const deleteComentario = async (id) => {
        const comentarioDoc = doc(db, "comentarios", id);
        await deleteDoc(comentarioDoc);
        getComentarios();
    }

    //alerta borrar comentario
    const confirmDelete = (id) => {
        Swal.fire({
            title: 'Seguro de Borrar el Comentario?',
            icon: 'question',
            color: '#fff',
            background: 'rgba(51, 51, 51)',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Borrar!',
            cancelButtonText: 'Cancelar',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        }).then((result) => {
            if (result.isConfirmed) {
                deleteComentario(id);
                Swal.fire({
                    title: 'Comentario Borrado',
                    icon: 'success',
                    color: '#fff',
                    background: 'rgba(51, 51, 51)',
                    confirmButtonText: 'Listo',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
            }
        })

    }

    //declaramos el useEffect
    useEffect(() => {
        getComentarios();
    }, [])

    //mostrar datos en estructura    
    return (
        <div className="cometarios m-3">
            <h3 className="title2 p-2">Deja tu Comentario</h3>
            <div className="card bgComment text-white p-2 m-2">
                <form onSubmit={agregarComentario} className=''>
                    <div className="mb-3">
                        <label for="comentario" className="form-label">Comentario</label>
                        <textarea className="form-control bg-dark text-white" id="comentario" name="comentario" rows="3" value={comentario} onChange={(e) => setComentario(e.target.value)} required></textarea>
                    </div>
                    <button type="submit" className="banner__button"><i class="fa-sharp fa-solid fa-plus"></i>Agregar</button>
                </form>
            </div>

            <h3 className="title2 p-2">Comentarios Anteriores</h3>

            {comentarios.map((item) => (
                <div key={item.id} className='card bg-dark text-white m-2'>
                    <div className="card-header bgCardHeader p-2">
                        <div className='d-flex justify-content-end'>
                            {(item.Usuario != usuario)? ('') :
                                (<div> <button onClick={() => { confirmDelete(item.id) }} className="banner__button ms-2"><i className="fa-solid fa-trash "></i></button> </div>)
                            }
                        </div>
                        <h4 className="card-title">{item.Usuario}</h4>
                        <h6 className="card-subtitle mb-2 fs-6 fw-light">{item.Fecha}</h6>
                    </div>
                    <div className="card-body p-2">
                        <p className="card-text">
                            {item.Comentario}
                        </p>
                    </div>
                </div>
            ))}
            <br />
            <br />
        </div>
    )
}

export default Comentarios