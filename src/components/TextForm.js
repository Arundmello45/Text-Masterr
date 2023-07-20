import React, {useState} from 'react'
export default function TextForm(props) {

    const onchanget=(event)=>{
        settext(event.target.value);
        console.log("onchange");
    }
    const bonclick = ()=>{
        let newtext=text.toUpperCase();
        settext(newtext);
        console.log("uppercase button clicked");
        props.showalert("converted to uppercase","success")
    }
    const con=()=>
    {
      navigator.clipboard.writeText(text);
      props.showalert("copied to clipboard","success")


    }
    const rexs=()=>
    {
      let ntext=text.split(/[ ]+/);
      settext(ntext.join(' '));
      props.showalert("Extra spaces removed","success")

    }
    const lonclick=()=>{
      let newt=text.toLowerCase();
      settext(newt);
      props.showalert("converted to lowercase","success")

       }
       const conclick=()=>{
        settext('');
       }
      //  const [color,setcolor]=useState();
      //  const sta=()=>{
      //   if(props.mode==='dark')
      //     setcolor('white');
      //   else
      //     setcolor('grey');    
      //     }  
      // if(props.mode==='dark') {
      // document.getElementById("mybox").style.backgroundColor="white";
      // props.setmode='light';
      // }
      // else
      // {
      // document.getElementById("mybox").style.backgroundColor="grey";
      // props.setmode='dark';
      // }
       console.log(props.mode);
    const [text,settext]= useState("enter the text here");
    // const styles=
    //    {
        
    //      active: {
    //         backgroundColor:'light',
    //         color:'black'
    //      },
    //      activea: {
    //       backgroundColor: 'dark',
    //       color:'white'
    //      },

    //    }
    const countwords=(text)=>{
      let words;
      let c;
      let b;
      c=text.split(" ").join("").length;
      b=text.split(/[ ]+/).join("").length;
      if(text===" "||c.length===0||text.length===0||b===0)
        words=0;
      else
        words=text.trim().split(/\s+/).length;
      return words;
    }
    const countchar=(text)=>{
      let char;
      if(text===" "||text.length===0)
        char=0;
      else
        char=text.split(" ").join("").length;
      return char;
    }
  return (
    <>
    <div className="conatiner">
        <h1 id="ha">{props.heading}</h1>  
<div className="mb-3">
  <textarea className="form-control"  value = {text} onChange={onchanget}  id="mybox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-3" onClick = {bonclick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-3" onClick = {lonclick}>Convert to lowercase</button>
<button className="btn btn-primary mx-3" onClick = {conclick}>Clear</button>
<button className="btn btn-primary mx-3" onClick = {con}>Copy</button>
<button className="btn btn-primary mx-3" onClick = {rexs}>Remove Extra Space</button>
    </div>
    <div className="conatiner" id="ha1" >
    <h2 >result below</h2>
    <p>{countwords(text)} words {countchar(text)} characters</p>
    <p>{countchar(text) * 0.008} minutes read</p>
    <h2>preview</h2>
    <p>{text.length>0?text:'Enter text to preview'}</p>
    </div>
    </>
  )
}
// text.split(' ').length
