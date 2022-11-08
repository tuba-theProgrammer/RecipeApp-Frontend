const Heading=({text,color="black",fontSize="1rem",fontWeight,fontFamily="",...props})=>{
    return <div 
        style={{
            color:color,
            fontSize:fontSize,
            fontWeight:fontWeight,
            fontFamily:fontFamily,
            display:props.display
        }}
    >{text}</div>
}
export default Heading;