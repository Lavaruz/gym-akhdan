module.exports = (sequelize, DataTypes) => {
  const Member = sequelize.define(
    "Member",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
        unique: true,
      },
      nama: DataTypes.STRING,
      tanggal_daftar: DataTypes.STRING,
      tanggal_mulai: DataTypes.STRING,
      tanggal_berakhir: DataTypes.STRING,
    },
    {
      timestamps: false,
    }
  );
  return Member;
};
