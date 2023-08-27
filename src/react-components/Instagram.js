import React from "react";
import header_logo from "../images/header_logo.jpeg";
import "./style.css"
import memes_data from "../postdata.js"

export default function Instagram() 
{
    var instaPostObj = {
        topText: "top caption",
        bottomText : "bottom caption",
        imageUrl : "https://i.imgflip.com/1g8my4.jpg"
    }
    const [stateVar, stateFunc] = React.useState(instaPostObj)


    function getMemeImage() {

    }
    function handleClick(e) {
        e.preventDefault();
        console.log("i was clicked")
        const postsArray = memes_data.data.posts
        const randomNumber = Math.floor(Math.random() * postsArray.length)
        console.log("random instagram post id:"+randomNumber+"url:"+postsArray[randomNumber].url)
        stateFunc(prevPost => ( {...prevPost,imageUrl:postsArray[randomNumber].url}))
    }

    function handleMouseOver() {
        console.log("mouseOver")
       
    }

    function handleChange(event) {

        stateFunc(prevPost => ( {...prevPost,[event.target.name] : event.target.value}))
    }

    return(
        <div>
        <div className="form_div">
        <form className="form">
        <input className="input_form"  onChange={handleChange}  name="topText" placeholder="top caption" type = "text"/>
        <input className="input_form" onChange = {handleChange} name="bottomText" placeholder="bottom caption" type = "text"/>
        <button className="input_button" onClick= {(e) => {handleClick(e)}} onMouseOver={handleMouseOver}>GET A NEW INSTAGRAM POST!</button>
        </form>
        </div>

        <div class="img_container">
        <div class="meme_style_text top">{stateVar.topText}</div>
        <img className="instapost" src={stateVar.imageUrl}></img>
        <div class="meme_style_text bottom">{stateVar.bottomText}</div>
       
        </div>

        </div>
    )
}