const Notification = require(
  "../models/Notification"
);

// Create Notification
const createNotification = async (
  req,
  res
) => {
  try {
    const {
      title,
      message,
      recipient,
    } = req.body;

    const notification =
      await Notification.create({
        title,
        message,
        recipient,
      });

    res.status(201).json(
      notification
    );
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get My Notifications
const getNotifications =
  async (req, res) => {
    try {
      const notifications =
        await Notification.find({
          recipient: req.user._id,
        }).sort({
          createdAt: -1,
        });

      res.json(notifications);
    } catch (error) {
      res.status(500).json({
        message:
          error.message,
      });
    }
  };

module.exports = {
  createNotification,
  getNotifications,
};