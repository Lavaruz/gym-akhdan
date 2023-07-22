module.exports = (sequelize, DataTypes) => {
  const Member = sequelize.define(
    "Member",
    {
      id: {
        type: DataTypes.STRING,
        defaultValue: Math.random().toString(16).slice(2),
        allowNull: false,
        primaryKey: true,
        unique: true,
      },
      nama: DataTypes.STRING,
      tanggal_daftar: DataTypes.STRING,
      tanggal_berakhir: DataTypes.STRING,
    },
    {
      timestamps: false,
    }
  );
  return Member;
};
