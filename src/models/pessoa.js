"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Pessoa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pessoa.hasMany(models.Curso, { foreignKey: "docente_id" });
      Pessoa.hasMany(models.Matricula, { foreignKey: "estudante_id" });
    }
  }
  Pessoa.init(
    {
      nome: DataTypes.STRING,
      email: DataTypes.STRING,
      cpf: DataTypes.STRING,
      ativo: DataTypes.BOOLEAN,
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Pessoa",
      tableName: "pessoas",
    }
  );
  return Pessoa;
};

// npx sequelize-cli model:generate --name Pessoa --attributes nome:string,email:string,cpf:string,ativo:boolean,role:string
// depois incluir:
// tableName: 'pessoas'
// Alterar tb o arquivo de migration para o nome correto da tabela.
// Implantar os migrations;
// npx sequelize-cli db:migrate
// Criar seed:
// npx sequelize-cli seed:generate --name demo-categorias
