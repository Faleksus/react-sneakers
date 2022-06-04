import React from 'react'
import Card from '../components/Card'
import axios from 'axios'
import AppContext from '../context'

export function Orders() {
    const { onAddToFavorite, onAddToCart } = React.useContext(AppContext)
    const [orders, setOrders] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        //Самовызывающаяся функция
        (async () => {
            try {
                const { data } = await axios.get('https://6290ab25665ea71fe13810d5.mockapi.io/orders')
                // console.log(data.map((obj) => obj.items).flat())
                setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []))
                setIsLoading(false)
            } catch (error) {
                alert('Ошибка при запросе заказов')
                console.log(error)
            }
        })()
    }, [])
    return (
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
            <h1>Мои заказы</h1>

            </div>
            <div className="d-flex flex-wrap">
                { (isLoading ? [...Array(8)] : orders).map((item, index) => (
                <Card 
                    key={index}
                    // title={item.title}
                    // price={item.price}
                    // imageUrl={item.imageUrl}
                    loading={isLoading}
                    {...item}
                />
                ))}
            </div>
        </div>
    )
}
