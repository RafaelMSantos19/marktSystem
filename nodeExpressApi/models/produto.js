'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Produto.init({
    nome: DataTypes.STRING,
    valor: DataTypes.DECIMAL,
    seguimento: DataTypes.STRING,
    peso: DataTypes.DECIMAL,
    ultima_compra: DataTypes.DATE,
    descricao: DataTypes.TEXT,
    codigo_barras: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Produto',
    tableName: 'produtos',
    timestamps: false  
  });
  return Produto;
};