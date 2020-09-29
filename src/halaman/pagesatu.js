import React, {Component} from 'react';



class Pagesatu extends Component {
	constructor (props){
		super (props)
		this.state={
			statusHalaman: true
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
			{this.state.statusHalaman ? (
			<>				
			<h2> A. Halaman Pagesatu </h2>
			<p> keterangan a.Halaman Pagesatu</p>
			</>
			):(
			<>
			<h2> B. Halaman Pagesatu</h2>
			<p> keterangan b. Halaman Pagesatu</p>
			</>
			)}
			<button onClick ={this.ubahState}>Ubah</button>
			</div>
			)
		}
	}
	
export default Pagesatu;