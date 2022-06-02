import React from 'react'
import AppContext from '../context'
import Card from '../components/Card'

export default function Favorites() {
    const {favorites, onAddToFavorite } = React.useContext(AppContext)

    return (
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
            <h1>Мои закладки</h1>

            </div>
            <div className="d-flex flex-wrap">
                { favorites.map((item, index) => (
                <Card 
                    key={index}
                    // title={item.title}
                    // price={item.price}
                    // imageUrl={item.imageUrl}
                    favorited={true}
                    onFavorite={onAddToFavorite}
                    {...item}
                />
                ))}
            </div>
        </div>
    )
}
