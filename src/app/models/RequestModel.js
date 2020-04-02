module.exports = (sequelize, DataTypes) => {
  const DbModel = sequelize.define(
    'Request',
    {
      processado: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      method: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      url: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      remote_address: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      query: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      params: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      body: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      raw_headers: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      headers: {
        type: DataTypes.JSON,
        allowNull: true,
      },
    },
    {}
  );

  DbModel.associate = (models) => {
    /* Cadastro.belongsTo(models.AuthRole, {
      foreignKey: 'role_id',
      as: 'role',
    }); */
  };

  return DbModel;
};
