import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    job: '',
    age: '',
    city: '',
    state: '',
    phone: '',
    github: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.post('https://reqres.in/api/users', formData, {
        headers: {
          'x-api-key': 'reqres-free-v1'
        }
      });
      console.log('Resposta da API:', response.data);
      alert('Usuário criado com sucesso! ID: ' + response.data.id + '. Verifique o console para mais detalhes.');
    } catch (error) {
      console.error('Erro ao enviar os dados:', error.response || error.message || error);
      alert('Erro ao enviar os dados. Verifique o console para mais detalhes.');
    }
  }

  return (
    <div className="container">
      <h2>Cadastro de Usuário</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Nome Completo"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="seu@email.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="job">Cargo:</label>
          <input
            type="text"
            id="job"
            name="job"
            placeholder="Ex: Desenvolvedor(a) React"
            value={formData.job}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="age">Idade:</label>
          <input
            type="number"
            id="age"
            name="age"
            placeholder="Sua Idade"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="city">Cidade:</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="Sua Cidade"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="state">Estado:</label>
          <input
            type="text"
            id="state"
            name="state"
            placeholder="Seu Estado (UF)"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Telefone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="(XX) XXXXX-XXXX"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="github">GitHub:</label>
          <input
            type="text"
            id="github"
            name="github"
            placeholder="Seu usuário no GitHub"
            value={formData.github}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">Enviar Cadastro</button>
      </form>
    </div>
  );
}

export default App;
