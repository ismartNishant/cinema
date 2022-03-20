import React, { useState  } from 'react'
import { newToken } from './Login';
import { Link } from "react-router-dom";


export const Movie = (props) => {
    const [mList, setMlist] = useState([]);
    const [page, setPage] = useState(1);
   
    var movielenght = undefined;

    const serachMovie = async () => {
        var val = newToken;
        try {
            let data = await  fetch(`https://demo.credy.in/api/v1/maya/movies/?page=2`, {
                method: "GET",
    
                headers: new Headers({
                    'Authorization': 'Token ' + val,
                })
            })
            let parsedData = await data.json();
    
                    console.log(parsedData);
                    setMlist(parsedData.results)
                    console.log(mList)
                    movielenght = mList.length
                    console.log(mList[3])
                    // setPage(page + 1)
            console.log(val + "in movie ");
        } catch (error) {
            alert("eroooooooooooorrrrrrrrrrrrrrrrrrr");
        }
    }

    


    let forbg = props.mode ? "#fff" : "#000";
    let forColor = props.mode ? "dark" : "light";
    let forShad = props.mode ? "0px 0px 10px #f7f1f19e" : "0px 0px 10px #0000009e";

    var element;
    function flip(event){
        element = event.currentTarget;
        if (element.className === "cards") {
        if(element.style.transform == "rotateY(180deg)") {
          element.style.transform = "rotateY(0deg)";
        }
        else {
          element.style.transform = "rotateY(180deg)";
        }
      }
    };

    return (
        <div className='movie'>

            <nav className={`navbar m-0 navbar-${forColor} bg-${forColor} fixed-top`} style={{boxShadow:forShad}}>
                <div className="">
                    <h2 className="p-0 m-0 navbar-brand" >Cinema<i class='bx bxs-movie-play bx-tada' ></i></h2>
                </div>
                <button className='btn btn-outline-danger' onClick={serachMovie}>Search-Movie</button>  
            </nav>
            <div className='movie-btn'>
             <button className='btn btn-danger' onClick={serachMovie}>Previous</button>
             <button className='btn btn-danger' onClick={serachMovie}>Next</button>
           </div>
            <div className='in-box-1'>
                {mList.map((element) => {
                    return (
                         
                        <div className="in-box-2">
                            <div className="cards"  >
                                <div className="front">
                                    <div className='inner-movie h-100 card p-0 m-0' key={element.uuid} style={{ borderColor: forbg, boxShadow: forShad, color: forbg }}>
                                        <img src={`https://ui-avatars.com/api/?rounded=true&background=random&name=${element.title}`} alt='..' />
                                        <div className="card-body">
                                            <h6 className="card-title bold"> <span className='danger'>Title:- </span> {element.title ? element.title.slice(0, 20) : ""}</h6>
                                            <p className="card-text bold"> <span>Description:-</span>{element.description ? element.description.slice(0, 90) : ""} ...</p>
                                        </div>
                                        <div className="card-footer">
                                            <small className=""> <span>Genres:-</span> {element.genres.length === 0 ? "NA" : element.genres}</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="back">
                                    <div className='inner-movie h-100 card p-0 m-0' key={element.uuid} style={{ borderColor: forbg, boxShadow: forShad, color: forbg }}>
                                        <img src={`https://ui-avatars.com/api/?background=random&name=${element.title}`} alt='..' />
                                        <div className="card-body">
                                            <h6 className="card-title bold"> <span className='danger'>Title:- </span> {element.title ? element.title.slice(0, 20) : ""}</h6>
                                            <p className="card-text bold"> <span>Description:-</span>{element.description}</p>
                                        </div>
                                        <div className="card-footer">
                                            <small className=""> <span>Genres:-</span> {element.genres.length === 0 ? "NA" : element.genres}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        // <div className='inner-movie card p-0 m-0' key={element.uuid} style={{ borderColor: forbg, boxShadow: forShad, color: forbg }}>
                        //     <img src={`https://ui-avatars.com/api/?rounde=true&background=random&name=${element.title}`} alt='..' />
                        //     <div className="card-body">
                        //         <h5 className="card-title bold"> <span className='danger'>Title:- </span> {element.title}</h5>
                        //         <p className="card-text bold"> <span>Description:-</span>{element.description ? element.description.slice(0, 90) : ""} ...</p>
                        //     </div>
                        //     <div className="card-footer">
                        //         <small className=""> <span>Genres:-</span> {element.genres.length === 0 ? "NA" : element.genres}</small>
                        //     </div>
                        // </div>
                    );
                })}
            </div>
            
        </div>

    )
}
