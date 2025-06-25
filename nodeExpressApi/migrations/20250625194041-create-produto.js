'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Produtos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      valor: {
        type: Sequelize.DECIMAL
      },
      seguimento: {
        type: Sequelize.STRING
      },
      peso: {
        type: Sequelize.DECIMAL
      },
      ultima_compra: {
        type: Sequelize.DATE
      },
      descricao: {
        type: Sequelize.TEXT
      },
      codigo_barras: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Produtos');
  }
};