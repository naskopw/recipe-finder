import React from 'react'

export const CategoryOverview = (props) => {
    const category = props.category
    const imgWidth = "400px"
    const imgHeight = "220px"
    return (
        <div className="trending-items">
            <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="trending-item">
                    <div className="hover-bg">
                        <div className="hover-text">
                            <h4>{category.name}</h4>
                        </div>
                        <img key={category.id} src={decodeURI(category.image)}
                            className="img-responsive"
                            alt={`Category ${category.name}`}
                            style={{ width: imgWidth, height: imgHeight }}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}