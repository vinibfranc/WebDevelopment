class Despesa {
	constructor(ano, mes, dia, tipo, descricao, valor) {
		this.ano = ano
		this.mes = mes
		this.dia = dia
		this.tipo = tipo
		this.descricao = descricao
		this.valor = valor
	}

	validarDados() {
		for(let i in this) {
			if(this[i] == undefined || this[i] == '' || this[i] == null) {
				return false
			}
		}
	}
}

class Bd {

	constructor() {
		let id = localStorage.getItem('id')

		if(id === null) {
			localStorage.setItem('id', 0)
		}
	}

	getProximoId() {
		let proximoId = localStorage.getItem('id')
		return parseInt(proximoId) + 1
	}

	gravar(d) {

		let id = this.getProximoId()

		localStorage.setItem(id, JSON.stringify(d))

		localStorage.setItem('id', id)
	}

	recuperarTodosRegistros() {

		//array de despesas
		let despesas = Array()

		let id = localStorage.getItem('id')
		//recuperar todas as despesas
		for(let i = 1; i <= id; i++) {
			let despesa = JSON.parse(localStorage.getItem(i))
			
			if(despesa === null) {
				continue
			}

			despesas.push(despesa)
		}
		return despesas
	}
}

let bd = new Bd()

function cadastrarDespesa() {

	let ano = document.getElementById('ano')
	let mes = document.getElementById('mes')
	let dia = document.getElementById('dia')
	let tipo = document.getElementById('tipo')
	let descricao = document.getElementById('descricao')
	let valor = document.getElementById('valor')

	//console.log(ano.value, mes.value, dia.value, tipo.value, descricao.value, valor.value)
	
	let despesa = new Despesa(ano.value, mes.value, 
							  dia.value, tipo.value,
							  descricao.value, valor.value)
	
	if(despesa.validarDados()){

		bd.gravar(despesa)

		document.getElementById('modal_titulo').innerHTML = 'Registro inserido com sucesso'
		document.getElementById('modal_titulo_div').className = 'modal-header text-success'
		document.getElementById('modal_conteudo').innerHTML = 'Despesa cadastrada com sucesso'
		document.getElementById('modal_btn').className = 'btn btn-success'
		document.getElementById('modal_btn').innerHTML = 'Voltar'

		$('#modalRegistraDespesa').modal('show')
		console.log('Dados válidos')
	}else {

		document.getElementById('modal_titulo').innerHTML = 'Erro na inclusão do registro'
		document.getElementById('modal_titulo_div').className = 'modal-header text-danger'
		document.getElementById('modal_conteudo').innerHTML = 'Erro na gravação. Verifique se todos os campos foram preenchidos corretamente'
		document.getElementById('modal_btn').className = 'btn btn-danger'
		document.getElementById('modal_btn').innerHTML = 'Voltar e corrigir'

		$('#modalRegistraDespesa').modal('show')
		console.log('Dados inválidos')
	}
}

function carregaListaDespesas() {
	let despesas = Array()
	despesas = bd.recuperarTodosRegistros()
	console.log(despesas)
}
