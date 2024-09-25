import style from './Card.module.css'
export const Card = ({props}) => {
  return(
      <div className={style.box}>
        <div className={style.container}>
          <img src="../assets/img/naipe-heart-as.png" alt="" className={style.topleftimage} />
          <form method='post' className={style.form}>
            <label htmlFor="#name">Insira seu nome</label>
            <input id='name' name='name' type="text"/>
            <button>Entrar</button>
          </form>
        </div>
      </div>
  )
}