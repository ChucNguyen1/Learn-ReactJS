function NavigationMenu(){
    const handleChange = (e) =>{
        console.log(e.target.value);
    }
    const handleSubmit = (e) =>{
        e.prevenDefault();
        console.log(e.target[0].value);
    }
    return(
        <>
        <div>
            Navigation Menu
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange}></input>
                <button> Search </button>
            </form>
        </div>
        </>
    )
}

export default NavigationMenu;