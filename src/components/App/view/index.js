import React from "react";



function fetchDetails(id){
    const request = new Request('/heroes/' +id ,
    {method:'GET', headers: {'Content-Type': 'application/json'}});
    return fetch(request);
}

class View extends React.Component {

    
   props ={
       id: '',
       name: '',
       alias: '',
       team: ''
   }

   componentDidMount() {
       let self=this;
       fetchDetails(this.props.match.params.id)
       .then(res => res.json())
       .then(function(data){
           self.setState({
            id: data[0],
            name: data[1],
            alias: data[2],
            team: data[3],
           })
       });
   }

    render() {
        return(
            <section>
                <h2>View detail</h2>
                <div>Name: {this.props.name}</div>
                <div>Alias: {this.props.alias}</div>
                <div>Team: {this.props.team}</div>
                
            </section>
        )
    }
}

export default View;