import { Item } from "./Item"

export const PackingList = ({ item }) => {
    return (

        <div className="list">
            <ul>
                { item.map((item, index) => {
                        return <Item item={item} key={index} />
                    })
                }
            </ul>
        </div>

    )
}
