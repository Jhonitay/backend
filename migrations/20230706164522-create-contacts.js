/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('contacts', {
      contactId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
        field: "contacts_id",
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "name",
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "email",
      },
      phoneNumber: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "phone_number",
      },
      message: {
        type: Sequelize.TEXT,
        allowNull: false,
        field: "message",
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
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('contacts');
  }
};