import pg from 'pg';

const configDatabase = {
  connectionString: 'postgres://postgres:postgres@localhost:5432/gamesList'
  //a minha senha não é postgres, porem ele esta configurado para funcionar com qualquer senha
};
const { Pool } = pg;

export const db = new Pool(configDatabase);

db.connect((error, client, done) => {
  if (error) return console.log('Erro ao conectar ao banco de dados:', error);
  console.log('Conexão bem-sucedida com o banco de dados PostgreSQL');
  done();
})
