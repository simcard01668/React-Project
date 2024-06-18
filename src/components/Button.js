


const button = (props) => {
  
  return (
    <button className="btn" style={styling}>{props.text}</button>
  )
}

const styling = {
  color: 'white',
  backgroundColor: 'green'
}

export default button