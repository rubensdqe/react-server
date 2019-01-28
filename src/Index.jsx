import React from 'react'

class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            number: '',
            balance: '',
            response: [{}]
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const number = prompt('Número')
        const balance = prompt('Valor')

        console.log(number)
        console.log(balance)

       this.criarConta(number.trim(), balance.trim().replace(',', '.'))
    }

    componentDidMount() {
        setInterval(() => {
            this.carregarAPI()
        }, 5000)
    }
    
    async carregarAPI() {
        const response = await fetch('https://orange-cloud-teste.herokuapp.com/api/v1/conta')
        // const response = await fetch('http://localhost:3002/api/v1/conta')
        await response.json().then((data) => this.setState({ response: data }))
        .catch((err) => console.log(err))
    }

    criarConta(number, balance) {
        const response = fetch('https://orange-cloud-teste.herokuapp.com/api/v1/conta/' + number, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ balance: balance})
        })
            .then((data) => console.log(data))
            .catch((err) => console.log(err))
    }

    render() {
        return (
            <div>
                <div>
                {this.state.response.map((data) => 
                <div>
                    <p>{data['_id']}</p> 
                    <p>{data['name']} = {parseFloat(data['balance']).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</p></div>)
                }
                </div>
                <p>---------------------------------------------------------</p>
                <button onClick={this.handleClick}>Atualizar conta</button>
            </div>
            
        )
    }
}

export default Home