const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("publicacion", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    talleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    colorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tipoPersonaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tipoProductoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    marcaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fecha: {
      type: DataTypes.DATE,
      defaultValue: new Date()
    },
    precio: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    descuento:{
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    oferta: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    precioOferta:{
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    expiracionOferta:{
      type: DataTypes.DATE,
      allowNull: true,
    },
    estado: {
      type: DataTypes.ENUM("habilitada", "pausada", "finalizada"),
      defaultValue: "habilitada"
    },
    usuarioId:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
   
  });
};
