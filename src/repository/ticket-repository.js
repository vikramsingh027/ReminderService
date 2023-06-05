const { Op } = require("sequelize");

const { NotificationTicket } = require("../models/index");

class TicketRepository {
  async create(data) {
    try {
      const ticket = await NotificationTicket.create(data);
      return ticket;
    } catch (error) {
      console.log("something went wrong in repository layer", error);
      throw error;
    }
  }

  async getAll(filter) {
    try {
      if (filter) {
        const tickets = await NotificationTicket.findAll({
          where: {
            status: filter.status,
            notificationTime: {
              [Op.lte]: new Date(),
            },
          },
        });
        return tickets;
      }
      const tickets = await NotificationTicket.findAll();
      return tickets;
    } catch (error) {
      console.log("something went wrong in repository layer", error);
      throw error;
    }
  }

  async update(ticketId, data) {
    try {
      const ticket = await NotificationTicket.findByPk(ticketId);
      if (data.status) {
        ticket.status = data.status;
      }
      ticket.save();
      return ticket;
    } catch (error) {
      console.log("something went wrong in repository layer", error);
      throw error;
    }
  }
}

module.exports = TicketRepository;
