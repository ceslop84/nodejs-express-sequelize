Curso Alura: https://cursos.alura.com.br/course/orm-node-js-desenvolvendo-api-sequelize-sqlite/

Modelo de banco de dados:

![banco de dados](/arquivos-base/entidades.png)

Repositório do curso: https://github.com/alura-cursos/3374-nodejs-express-sequelize/tree/aula-5

- Criar os modelos:

* npx sequelize-cli model:generate --name Pessoa --attributes nome:string,email:string,cpf:string,ativo:boolean,role:string
* npx sequelize-cli model:generate --name Categoria --attributes titulo:string
* npx sequelize-cli model:generate --name Curso --attributes titulo:string,descricao:string,data_inicio:dateonly
* npx sequelize-cli model:generate --name Matricula --attributes status:string

- Depois incluir o tablename nas classes:

tableName: 'pessoas'

- Alterar tb o arquivo de migration para o nome correto da tabela.

- Implantar os migrations;

npx sequelize-cli db:migrate

- Criar seed:

npx sequelize-cli seed:generate --name demo-categorias

- Para implementar o "soft delete" inserir a marcação abaixo nas classes do modelo:

*
* paranoid: true,
