import React from 'react'

export const About = () => {
	return (
		<div className="main">
			<div className="objetive">
				<p>Este sera el objetivo de nuestro programa</p>
			</div>
			<div className="surface-0 text-center cursor-pointer" >
				<div className="grid">
					<h2 style={{ textAlign: 'center', color: '#4338ca' }}>Integrantes</h2>

					<div className="col-12 col:md-12" style={{ marginTop: '20px', textAlign: 'center' }}>
						<div className="text-blue-800 mb-3 font-medium">
							Grosbin Betancourth
						</div>
					</div>
					<div className="col-12 col:md-12" style={{ marginTop: '20px', textAlign: 'center' }}>
						<div className="text-blue-800 mb-3 font-medium">
							Olbin Cerritos
						</div>
					</div>
					<div className="col-12 col:md-12" style={{ marginTop: '20px', textAlign: 'center' }}>
						<div className="text-blue-800 mb-3 font-medium">
							Rafael Macias
						</div>
					</div>
					<div className="col-12 col:md-12" style={{ marginTop: '20px', textAlign: 'center', paddingBottom: '20px' }}>
						<div className="text-blue-800 mb-3 font-medium">
							Jenifer Mendoza
						</div>
					</div>
				</div>
			</div>
			<div className="img-center">
				<img className="img__about" src="about-img.png" alt="" />

			</div>
		</div>
	)
}
