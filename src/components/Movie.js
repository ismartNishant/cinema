import React, { useState } from 'react'
import { newToken } from './Login';
import { Link } from "react-router-dom";


export const Movie = (props) => {
    const [mList, setMlist] = useState([]);
    const [page, setPage] = useState(1);
    var movieListStatic = [
        { title: 'Queerama', description: '50 years after decriminalisation of homosexuality …essions of gay men and women in the 20th century.', genres: '', uuid: '57baf4f4-c9ef-4197-9e4f-acf04eae5b4d' },
        { title: 'Satana likuyushchiy', description: "In a small town live two brothers, one a minister …born from the minister's adulterous relationship.", genres: '', uuid: '163ce013-03e2-47e9-8afd-e7de7688c151' },
        { title: 'Betrayal', description: 'When one of her hits goes wrong, a professional as… of a million dollars belonging to a mob boss ...', genres: 'Action,Drama,Thriller', uuid: '720e8796-5397-4e81-9bd7-763789463707' },
        { title: 'Siglo ng Pagluluwal', description: 'An artist struggles to finish his work while a storyline about a cult plays in his head.', genres: 'Drama', uuid: 'e9548ee7-6a95-4917-893e-1fa1d3a6de40' },
        { title: 'رگ خواب', description: 'Rising and falling between a man and woman.', genres: 'Drama,Family', uuid: '9b0a4aa2-9ec7-4a3d-98ab-622275f44ea5' }
    ];
    var movielenght = undefined;
    const serachMovie = () => {
        var val = newToken;
        fetch(`https://demo.credy.in/api/v1/maya/movies/?page=2`, {
            method: "GET",

            headers: new Headers({
                'Authorization': 'Token ' + val,
            })
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                setMlist(result.results)
                console.log(mList)
                movielenght = mList.length
                console.log(mList[3])
                // setPage(page + 1)
            });
        console.log(val + "in movie ");
    }

    let forbg = props.mode ? "#fff" : "#000";
    let forColor = props.mode ? "#000" : "#fff";
    let forShad = props.mode ? "0px 0px 10px #f7f1f19e" : "0px 0px 10px #0000009e";


    return (
        <div className='movie'>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <h2 className="navbar-brand" href="#">Cinema</h2>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Home</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
            <div className='search-btn'>
                <button className='btn btn-outline-danger' onClick={serachMovie}>Click Me</button>
            </div>
            <div className='movie-box'>
                {mList.map((element) => {
                    return (
                            <div className='inner-movie' key={element.uuid} style={{ borderColor: forbg, boxShadow: forShad, color: forbg }}>
                                <div className=""  >
                                    <div className='movie-img'>
                                        <img src={`https://ui-avatars.com/api/?rounde=true&background=random&name=${element.title}`} alt='..' />
                                    </div>
                                    <h5 className='pt-2'>Title:- {element.title}</h5>
                                    <p>Des:- {element.description ? element.description.slice(0, 90) : ""} ...</p>
                                    <p>Genres:- {element.genres.length === 0 ? "NA" : element.genres}</p>
                                </div>
                            </div>
                    );
                })}
            </div>
        </div>

    )
}
