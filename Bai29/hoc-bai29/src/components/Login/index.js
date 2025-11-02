function Login(){
    const arrayMenu = ["Trang chủ",
        "tin tức",
        "San pham",];
    return(
        <>
            <ul>
                {arrayMenu.map((item, index)=>{
                    console.log(item, index);
                    return(
                        <li key={index}>{item}</li>
                    )
                })}
            </ul>
        </>
    )
}
    

export default Login