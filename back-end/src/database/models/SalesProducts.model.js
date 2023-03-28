const salesProductsModel = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define('SalesProduct', {
    quantity: { 
      type: DataTypes.INTEGER,
    },
    saleId: { 
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    productId: { 
      type: DataTypes.INTEGER,
      primaryKey: true
    },

  }, 
  { 
    timestamp: false,
    underscored: true,
    tableName: 'users',
    modelName: 'User',
  });

  SalesProduct.associate = ({ Sale, Product }) => {
    Sale.belongsToMany(Sale,  {
      foreignKey: 'saleId', as: 'sales',
      through: SalesProduct,
      otherKey: 'productId'
    })
    Product.belongsToMany(Product, {
      foreignKey: 'productId', as: 'products',
      through: SalesProduct,
      otherKey: 'saleId'
    })
  };

  return SalesProduct;
};

export default salesProductsModel;