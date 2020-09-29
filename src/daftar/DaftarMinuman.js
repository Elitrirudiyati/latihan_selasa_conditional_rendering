import React, {Component} from 'react';




const DaftarMinuman =[
]
render(){
return(
	<div>
	<h3> {this.props.nama}</h3>
	<h3>{this.props.harga}</h3>
	</div>
	)
}


		return(
			<>
			<h1> Daftar Minuman </h1>
			{this.props.DaftarMinuman.map((data, i)=>{

				return(						
				<div key={i}>
				<p> No.{i+1}</p>
				<p> Nama Minuman : {data.nama}</p>
				<p> Harga Minuman : {data.harga}</p>
				</div>

				)
			})}
			</>
			);
	}
}

	
export default DaftarMinuman;