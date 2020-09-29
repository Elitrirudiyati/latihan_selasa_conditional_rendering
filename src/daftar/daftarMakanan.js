import React, {Component} from 'react';
import DataMakanan from './DataMakanan';


const ListMakanan =[
			{
				
				nama : 'Mie Rebus  Variabel',
				harga : 20000
			},
			{
				nama : 'Bakso Urat Variabel',
				harga : 30000
			},
			{
				nama : 'Sate Padang Variabel',
				harga : 40000
			}
			]


class Daftarmakanan extends Component {
	constructor(props){
		super(props)
		this.state={
			menuMakanan:[
			{
				nama : 'Mie Ayam',
				harga : 20000
			},
			{
				nama : 'Bakso Sapi',
				harga : 30000
			},
			{
				nama : 'Sate',
				harga : 40000
			}

			]		}
	}




	render(){
		return(
			<>
			<h1> Daftar Makanan Dari State</h1>
			{this.state.menuMakanan.map((data, i)=>{

				return(						
				<div key={i}>
				<p> No. :{i+1}</p>
				<p> Nama Makanan : {data.nama}</p>
				<p> Harga Makanan : {data.harga}</p>
				</div>

				)
			
		})}
		
			<h1> Daftar Makanan Dari Props</h1>
			{this.props.menuMakanan.map((data,i)=>{
				return(						
				<div key={i}>
				<p> No. :{i+1}</p>
				<p> Nama Makanan : {data.nama}</p>
				<p> Harga Makanan : {data.harga}</p>
				</div>

				)

			})}
		
			<h1> Daftar Makanan Variabel</h1>
			{ListMakanan.map((data,i)=>{

				return(						
				<div key={i}>
				<p> No. : {i+1}</p>
				<p> Nama Makanan : {data.nama}</p>
				<p> Harga Makanan : {data.harga}</p>
				</div>
				)
			})}
		

			<h1> Daftar Makanan External File</h1>
			{DataMakanan.map((data,i)=>{

				return(
				<div key={i}>
				<p> No.: {i+1}</p>
				<p> Nama Makanan : {data.nama}</p>
				<p> Harga Makanan : {data.harga}</p>
				</div>
				)
			})}
			</>

			
			);
	}
}
export default Daftarmakanan;