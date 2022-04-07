
function Join (props){
return(
    <div>
        <div>
        <button style={{color:"white",background:"rgb(16, 93, 248)",marginBottom:"10px",marginLeft:"70px",width:"170px",borderRadius:"25px",padding:"10px",border:"1px white"}}>{props.h1}</button>
        </div>
        <div>
        <button style={{color:"white",background:"orange",marginBottom:"10px",marginLeft:"70px",width:"170px",borderRadius:"25px",padding:"10px",border:"1px white"}}>{props.h2}</button>
        </div>
        <div>
        <button style={{color:"white",background:"green",marginBottom:"10px",marginLeft:"70px",width:"170px",borderRadius:"25px",padding:"10px",border:"1px white"}}>{props.h3}</button>
        </div>
        <div>
        <button style={{color:"white",background:"rgb(170, 51, 106)",marginBottom:"10px",marginLeft:"70px",width:"170px",borderRadius:"25px",padding:"10px",border:"1px white"}}>{props.h4}</button>
        </div>
       
    </div>
)
}
export default Join