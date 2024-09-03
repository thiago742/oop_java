function Carro(marca, cor, velocidadeMaxima) {
    this._marca = marca;
    this._cor = cor;
    this._velocidadeMaxima = velocidadeMaxima;
  }
  
  Carro.prototype.getMarca = function() {
    return this._marca;
  };
  
  Carro.prototype.setMarca = function(marca) {
    this._marca = marca;
  };
  
  Carro.prototype.getCor = function() {
    return this._cor;
  };
  
  Carro.prototype.setCor = function(cor) {
    this._cor = cor;
  };
  
  Carro.prototype.getVelocidadeMaxima = function() {
    return this._velocidadeMaxima;
  };
  
  Carro.prototype.setVelocidadeMaxima = function(velocidadeMaxima) {
    this._velocidadeMaxima = velocidadeMaxima;
  };
  
  Carro.prototype.exibirInformacoes = function() {
    return `Marca: ${this.getMarca()}, Cor: ${this.getCor()}, Velocidade Máxima: ${this.getVelocidadeMaxima()} km/h`;
  };
  
  function CarroPopular(marca, cor, velocidadeMaxima, preco) {
    Carro.call(this, marca, cor, velocidadeMaxima);
    this._preco = preco;
  }
  
  CarroPopular.prototype = Object.create(Carro.prototype);
  CarroPopular.prototype.constructor = CarroPopular;
  
  CarroPopular.prototype.getPreco = function() {
    return this._preco;
  };
  
  CarroPopular.prototype.setPreco = function(preco) {
    this._preco = preco;
  };
  
  CarroPopular.prototype.exibirInformacoes = function() {
    return `${Carro.prototype.exibirInformacoes.call(this)}, Preço: R$${this.getPreco()}`;
  };
  
  function CarroEsportivo(marca, cor, velocidadeMaxima, turbo) {
    Carro.call(this, marca, cor, velocidadeMaxima);
    this._turbo = turbo;
  }
  
  CarroEsportivo.prototype = Object.create(Carro.prototype);
  CarroEsportivo.prototype.constructor = CarroEsportivo;
  
  CarroEsportivo.prototype.getTurbo = function() {
    return this._turbo;
  };
  
  CarroEsportivo.prototype.setTurbo = function(turbo) {
    this._turbo = turbo;
  };
  
  CarroEsportivo.prototype.exibirInformacoes = function() {
    return `${Carro.prototype.exibirInformacoes.call(this)}, Turbo: ${this.getTurbo() ? 'Sim' : 'Não'}`;
  };
  
  const carroJose = new CarroPopular('Fiat', 'Vermelho', 180, 50000,);
  const carroJoao = new CarroPopular('Volkswagen', 'Azul', 200, 55000,);
  const carroJulio = new CarroEsportivo('Ferrari', 'Vermelho', 280, false);
  const carroMaria = new CarroEsportivo('Porsche', 'Preto', 320, true,);
  
  console.log(carroJose.exibirInformacoes());
  console.log(carroJoao.exibirInformacoes());
  console.log(carroJulio.exibirInformacoes());
  console.log(carroMaria.exibirInformacoes());
