import React from 'react'
import styles from './Card.module.scss'
import ContentLoader from "react-content-loader"
import AppContext from '../../context'

export default function Card(
    { 
        id, 
        title, 
        imageUrl, 
        price, 
        onFavorite, 
        onPlus, 
        favorited = false,
        // added = false,
        loading = false
    }) 
{
    const { isItemAdded } = React.useContext(AppContext)
    console.log(isItemAdded)
    const [isFavorite, setIsFavorite] = React.useState(favorited);
    const obj = { id, parentId: id, title, imageUrl, price }

    const onClickPlus = () => {
        onPlus(obj)
    }

    const onClickFavorite = () => {
        onFavorite(obj)
        setIsFavorite(!isFavorite)
    }

  return (
    <div className={styles.card}> 
    {
        loading ? 
        <ContentLoader 
            speed={2}
            width={160}
            height={250}
            viewBox="0 0 155 265"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="0" y="167" rx="5" ry="5" width="150" height="15" /> 
            <rect x="87" y="473" rx="3" ry="3" width="410" height="6" /> 
            <rect x="50" y="527" rx="3" ry="3" width="380" height="6" /> 
            <rect x="1" y="0" rx="10" ry="10" width="150" height="155" /> 
            <circle cx="425" cy="427" r="20" /> 
            <rect x="0" y="187" rx="5" ry="5" width="100" height="15" /> 
            <rect x="1" y="234" rx="5" ry="5" width="80" height="25" /> 
            <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
        :
        <>
            {onFavorite && (
                <div className={styles.favorite} onClick={onClickFavorite}>
                    <img 
                        src={isFavorite ? "/img/liked.svg" : "/img/unliked.svg"}
                        alt="Unliked" 
                    />
                </div>
            )}
            <img width="100%" height={135} src={imageUrl} alt="Sneakers" />
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{price} грн.</b>
                </div>
                {onPlus && (
                    <img 
                        className={styles.plus} 
                        onClick={onClickPlus} 
                        src={isItemAdded(id) ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}  
                        alt="Plus" 
                    />
                )}

            </div>
        </>
    }

    </div>
  )
}


