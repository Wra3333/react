import React from "react";
import "./home.scss";
import { useState, useEffect } from "react";
import { Product } from "../components/product/product";
import { Skeleton } from "../components/Skeleton/Skeleton";
import { Categories } from "../components/Сategories/bg-categories";
import { Sort } from "../components/Sort/Sort.jsx";

let fetchApi = ["sortBy=rating&order=asc", "sortBy=price&order=desc", "sortBy=title&order=asc"]
export function Home({search}) {
    let [ProductData, SetProducts] = useState([]);
    let [isLoading, setIsLoading] = useState(false)
    let [sortId, setSortId] = useState(1);
    let [actite, setActive] = useState(0);
    let Skeletons = [...new Array(6)].map((_, i) => <Skeleton key={i} />)
    let ProductItems = ProductData.filter(item => item.title.toLowerCase().includes(search.toLowerCase())).map(item => <Product {...item} key={item.index} />)
    useEffect(() => {
        setIsLoading(false)
        fetch(`https://6397cc9586d04c76339de5d3.mockapi.io/products?${actite == 0 ? "" : `category=${actite}`}&` + fetchApi[sortId])
            .then(res => res.json())
            .then(json => {
                SetProducts(json)
                setIsLoading(true)
            })
    }, [sortId, actite])
    
    return (
        <>
            <div className="container ">
                <div className="content-filter">
                    <div className="content-filter__row">
                        <Categories actite={actite} setActive={setActive} />
                        <Sort sortId={sortId} setSortId={setSortId}/>
                    </div>
                </div>
                <div className="products" >
                        {isLoading == false ? Skeletons : ProductItems}
                </div>
            </div>
        </>

    )
}
