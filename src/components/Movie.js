import React, { useState } from 'react'
import { newToken } from './Login';
import $ from 'jquery';
import ReactDOM from 'react-dom';



export const Movie = (props) => {
    const [mList, setMlist] = useState([]);
    const [page, setPage] = useState(1);

    
  // function to fetch moovie list
    const serachMovie = async () => {
        var val = newToken;
        $("#ref2").hide();
        $("#movie-btn , .my-movie-list").css({"visibility":"visible"});
        try {
            let data = await fetch(`https://demo.credy.in/api/v1/maya/movies/?page=${page}`, {
                method: "GET",

                headers: new Headers({
                    'Authorization': 'Token ' + val,
                })
            })
            let parsedData = await data.json();

            console.log(parsedData);
            setMlist(parsedData.results)
            console.log(mList)

            console.log(mList[3])
            console.log(val + "in movie ");
        } catch (error) {
            alert("Some internal error, please press ok to continue ");
            ReactDOM.render(<Movie />, document.getElementById('root'));
        }
        
    }

    // function for next and previous movie list
    const updateMoviepage = async (pageType) => {
        var val = newToken;
        var pageNo;
        if (pageType === "next") {
            pageNo = page + 1;
            setPage(page + 1);

        }
        else if (pageType === "previous") {
            pageNo = page - 1;
            setPage(page - 1);
        } 
        try {
            let data = await fetch(`https://demo.credy.in/api/v1/maya/movies/?page=${pageNo}`, {
                method: "GET",

                headers: new Headers({
                    'Authorization': 'Token ' + val,
                })
            })
            let parsedData = await data.json();

            console.log(parsedData);
            setMlist(parsedData.results)
        

        } catch (error) {
              alert("Some internal error, please press ok to continue ");
            ReactDOM.render(<Movie />, document.getElementById('root'));

        }

    }

  //function for show to whole card information
    const flip = (event) => {
        var element = event.currentTarget;
        if (element.className === "cards") {
        if(element.style.transform === "rotateY(180deg)") {
          element.style.transform = "rotateY(0deg)";
        }
        else {
          element.style.transform = "rotateY(180deg)";
        }
      }
    };

    let forbg = props.mode ? "#fff" : "#000";
    let forColor = props.mode ? "dark" : "light";
    let forShad = props.mode ? "0px 0px 10px #f7f1f19e" : "0px 0px 10px #0000009e";

    

    return (
        <div id='cards' className='movie'>
            <nav className={`navbar m-0 navbar-${forColor} bg-${forColor} fixed-top`} style={{ boxShadow: forShad }}>
                <div className="">
                    <h2 className="p-0 m-0 navbar-brand" >Cinema<i class='bx bxs-movie-play bx-tada' ></i></h2>
                </div>
                {/* <div  className=''>
                    <button id='ref' className='btn btn-outline-danger' onClick={serachMovie}>Search-Movie</button>
                    <button id='refresh' className='btn btn-outline-danger mx-2' onClick={() => updateMoviepage("refresh")}>Refresh</button>
                </div> */}

            </nav>
            <div className='movie-btn' id="movie-btn">
                <button className='btn btn-danger btn2' onClick={() => updateMoviepage("previous")}>Previous</button>
                <button className='btn btn-danger btn2' onClick={() => updateMoviepage("next")}>Next</button>
            </div>
            <div className='main-search' >
                <button id="ref2" className='btn btn-outline-danger' onClick={serachMovie}>Search-Movie</button>
            </div>
            <div className='in-box-1'>
                <h1 className='my-movie-list'> Movie List</h1>
                {mList.map((element) => {
                    return (
                        <div className="in-box-2">
                            <div className="cards"   onClick={(e) => {flip(e); }}>
                                <div className="front">
                                    <div className='inner-movie h-100 card p-0 m-0' key={element.uuid} style={{ borderColor: forbg, boxShadow: forShad, color: forbg }}>
                                        <img src={`https://ui-avatars.com/api/?rounded=true&background=caf0f8&color=666&name=${element.title}`} alt='..' />
                                        <div className="card-body">
                                            <h6 className="card-title bold"> <span className='danger'>Title:- </span> {element.title ? element.title.slice(0, 20) : ""}</h6>
                                            <p className="card-text bold"> <span>Description:- </span>{element.description ? element.description.slice(0, 80) : ""} ...</p>
                                        </div>
                                        <div className="card-footer">
                                            <small className=""> <span>Genres:- </span> {element.genres.length === 0 ? "NA" : element.genres}</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="back">
                                    <div className='inner-movie h-100 card p-0 m-0' key={element.uuid} style={{ borderColor: forbg, boxShadow: forShad }}>
                                        <img src={`https://ui-avatars.com/api/?background=d8f3dc&color=666&name=${element.title}`} alt='..' />
                                        <div className="card-body" style={{color: forbg}}>
                                            <h6 className="card-title bold"> <span className='danger'>Title:- </span> {element.title ? element.title.slice(0, 20) : ""}</h6>
                                            <p className="card-text bold"> <span>Description:- </span>{element.description}</p>
                                        </div>
                                        <div className="card-footer" style={{color: forbg}}>
                                            <small className=""> <span>Genres:- </span> {element.genres.length === 0 ? "NA" : element.genres}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

        </div>

    )
}

