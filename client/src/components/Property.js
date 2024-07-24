import React from "react";
import { Badge, Button, Card, Col, Row } from "react-bootstrap";
import { FaBed, FaShower } from "react-icons/fa";
import { GiStairs } from "react-icons/gi";
import Link from "next/link";

const Property = ({ property }) => {
	function numberWithCommas(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}
	const API_URL = process.env.NEXT_PUBLIC_API_URL;
	
    const fullImageUrl = API_URL + property.cover_photo;
	console.log('Property: ', property)

	return (
		<Card className="w-full">
			<div
				className=""
			>
				{property.advert_type}
			</div>
			<Link href={`/property/${property.slug}`}>
				<img src={fullImageUrl} width={650} height={550} />
			</Link>
			<Card.Title className="text-lg font-bold">
				${numberWithCommas(Number(property.price))}
			</Card.Title>
			<Card.Body>
				<Card.Title as="h4" className="font-bold">
					{property.title}
				</Card.Title>
				<Card.Text as="p" className="line-clamp-3">
					{property.description}
				</Card.Text>
				<hr className="my-2" />
				<Row className="justify-between">
					<Col className="flex justify-between">
						<span className="flex items-center">
							<FaBed className="mr-1" /> {property.bedrooms}
						</span>
						<span className="flex items-center">
							<FaShower className="mr-1" /> {property.bathrooms}
						</span>
						<span className="flex items-center">
							<GiStairs className="mr-1" /> {property.total_floors}
						</span>
					</Col>
				</Row>
				<hr className="my-2" />
				<Link href={`/property/${property.slug}`}>
					<Button variant="primary" className="w-full">
						Get More Info &gt; &gt;
					</Button>
				</Link>
			</Card.Body>
		</Card>
	);
};

export default Property;
