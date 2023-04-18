import React, { useEffect, useState } from 'react';
import { CDNURL, url } from '../../../../utils/url';
import axios from 'axios';
import './hunii_nuuts_ym.css';

const Hunii_nuuts_ym = () => {
	const [workplace, setWorkplace] = useState([]);
	const [davtalt, setDavtalt] = useState([]);
	useEffect(() => {
		const getWorkplace = async () => {
			const { data } = await axios.get(`${url}/resource`);
			setWorkplace(data.data);
		};
		getWorkplace();
	}, []);
	return (
		<div>
			<div>
				<div className="h-container">
					<div className="h-header">
						<p>ХҮНИЙ НӨӨЦ</p>
						<div class="line-menu">
							<div class="line-h"></div>
						</div>
					</div>
				</div>
				<div className="Zzz">
					{workplace.map((row) => (
						<div className="Zzz1">
							<img src={`${CDNURL}/${row.avatar}`} alt="/" />
						</div>
					))}
					<div className="Zzz2">
						<div>
							{workplace.map((row) => (
								<div>
									<h2>{row.name}</h2>
									<p>{row.description}</p>
									</div>
							))}
						</div>
						<h2>БИДНИЙ ЗОРИЛТ</h2>
						<div>
							<ul className="list">
								{davtalt.map((row) => (
									<li>{row.description}</li>
									))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Hunii_nuuts_ym;
