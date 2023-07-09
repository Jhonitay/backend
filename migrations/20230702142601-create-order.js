/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      orderId: {
        type : Sequelize.UUID,
        defaultValue : Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
        field : "order_id",
      },
      productId: {
        type: Sequelize.UUID,
        allowNull: false,
        field: "product_id",
      },
      userId: {
        type: Sequelize.UUID,
        allowNull: false,
        field: "user_id",
      },
      jumlah: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: "jumlah",
      },
      total: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "total",
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

    await queryInterface.addConstraint("orders", {
      fields: ["product_id"],
      type: "foreign key",
      references: {
        table: "products",
        field: "product_id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });

    await queryInterface.addConstraint("orders", {
      fields: ["user_id"],
      type: "foreign key",
      references: {
        table: "users",
        field: "user_id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('orders');
  }
};