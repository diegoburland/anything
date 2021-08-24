type propsInput = {
  title: string,
  text: string
}
const EmptyResult = (props: propsInput) => {
    const {title, text} = props

    return (<div className="main__countersEmpties">
    <div className="main__countersEmpties--text">
       <h3 className="main__countersEmpties--header">{title}</h3>
        <p className="main__countersEmpties--paragraph">
          {text}
        </p>
    </div>
  </div>)
}

export default EmptyResult
