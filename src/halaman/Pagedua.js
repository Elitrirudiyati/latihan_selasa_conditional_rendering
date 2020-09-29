import React, {Component} from 'react';



class Pagedua extends Component {
	constructor (props){
		super (props)
		this.state={
			statusHalaman:true
		}


		this.ubahState=this.ubahState.bind(this)
	} 

	ubahState(){
		this.setState((state,props)=>({
			statusHalaman: !state.statusHalaman
		}))
		}
	 

	render (){
		return(
		
			<div>
			{ this.state.statusHalaman ?(
			<>
			<h2> A. Page Kedua </h2>
			<p> keterangan a.page kedua</p>
			</>

			):(

			<>
			<h2> B. Page Kedua</h2>
			<p> keterangan b.page kedua</p>
			</>
			)}

			<button onClick={this.ubahState}> Ubah </button>

			</div>
			)
		}
		
	}
	
export default Pagedua;