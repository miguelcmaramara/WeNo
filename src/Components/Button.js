export default function Button(props){
    const submit =(e) => {
        props.percentage.page.page = props.nextPage;
        props.setPercentage({
            page: props.percentage.page,
            calculator: props.percentage.calculator
        })
    }
        return(
        <div id="Button">
            <button onClick={submit}>{props.inText}</button>
        </div>
    )  
}