import Notification from '../schemas/Notification';
import User from '../models/User';

class NotificationController {
  async index(req, res) {
    // Check if provider_is is provider
    const checkIsProvider = await User.findOne({
      where: { id: req.userId, provider: true },
    });

    if (!checkIsProvider) {
      return res
        .status(400)
        .json({ error: 'Only providers can access notifications' });
    }

    const notifications = await Notification.find({
      user: req.userId,
    })
      .sort('-createdAt')
      .limit(20);

    return res.json(notifications);
  }
}

export default new NotificationController();
