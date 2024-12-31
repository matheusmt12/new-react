const Challange = () => {
    let num = 1;
    let num2 = 2;
    return (
        <div>
            <p>{num}</p>
            <p>{num2}</p>
            <button onClick={() => console.log(num + num2)
            }>teste</button>
        </div>
    );

}

export default Challange;