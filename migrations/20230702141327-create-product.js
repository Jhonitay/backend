/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      productId: {
        type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
          allowNull: false,
          field: "product_id",
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "name",
      },
      dimensi: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "dimensi",
      },
      berat: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: "berat",
      },
      stok: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "stok",
      },
      jenis: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "jenis",
      },
      harga: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: "harga",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        field: "created_at",
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        field: "updated_at",
      },
      });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  }
};