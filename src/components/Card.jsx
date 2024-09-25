import style from './Card.module.css'
export const Card = ({props}) => {
  return(
      <div className={style.box}>
        <div className={style.container}>
          <form method='post' className={style.form}>
            <label htmlFor="#name">Insira seu nome</label>
            <input id='name' name='name' type="text"/>
            <button>Entrar</button>
          </form>
        </div>
      </div>
  )
}