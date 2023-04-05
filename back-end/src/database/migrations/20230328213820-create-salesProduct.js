module.exports = {
  async up(queryInterface, Sequelize) {
     await queryInterface.createTable(
'sales_products', 
     { 
      quantity: { 
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      sale_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'sales',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      product_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'products',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
     },
);
  },

  async down(queryInterface, _Sequelize) {
     await queryInterface.dropTable('sales_products');
  },
};
