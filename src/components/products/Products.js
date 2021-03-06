import React from 'react'
import Product from "./Product"

function Products(props) {

	return (
		<div className="products">
			<div className="container">
				<div className="products__title">
					<h1>{props.products_title}</h1>
				</div>

				<div className="products__row">
					{props?.state?.map((el) => (
						<Product
							key={el.id}
							{...el}
							match={props.match}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default Products