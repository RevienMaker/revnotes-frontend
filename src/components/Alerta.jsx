
const Alerta = ({alerta}) => {
  return (
    <div className={`${alerta.error ? 'alerta-error' : 'alerta'}`}>
        {alerta.msg}
    </div>
  )
}

export default Alerta