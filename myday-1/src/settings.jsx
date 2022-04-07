
function Setting (props){
    return(
        <div>
            <div>
            <button style={{color:"white",background:"gray",marginBottom:"10px",marginLeft:"70px",width:"170px",borderRadius:"25px",padding:"10px",border:"1px white"}}>{props.h1}</button>
            </div>
            <div>
            <button style={{color:"white",background:"red",marginBottom:"10px",marginLeft:"70px",width:"170px",borderRadius:"25px",padding:"10px",border:"1px white"}}>{props.h2}</button>
            </div>
            <div>
            <button style={{color:"white",background:"#6A5ACD",marginBottom:"10px",marginLeft:"70px",width:"170px",borderRadius:"25px",padding:"10px",border:"1px white"}}>{props.h3}</button>
            </div>
            <div>
            <button style={{color:"white",background:"#B8860B",marginBottom:"10px",marginLeft:"70px",width:"170px",borderRadius:"25px",padding:"10px",border:"1px white"}}>{props.h4}</button>
            </div>
           
        </div>
    )
    }
    export default Setting