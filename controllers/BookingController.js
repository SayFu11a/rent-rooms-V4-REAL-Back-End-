import BookingModel from '../models/booking.js';

export const BookingController = {
   handleBooking: async (req, res) => {
      const bookingData = req.body;

      try {
         // Сохранение данных о бронировании в базе данных
         const newBooking = await BookingModel.create(bookingData);

         console.log('Данные о бронировании сохранены:', newBooking);

         // Отправка ответа об успешном выполнении
         res.json({ message: 'Бронирование успешно обработано на сервере' });
      } catch (err) {
         console.error(err);
         res.status(500).json({
            message: 'Ошибка при сохранении данных о бронировании',
         });
      }
   },
   getAll: async (req, res) => {
      try {
         const bookings = await BookingModel.find().exec();
         res.json(bookings);
      } catch (err) {
         console.error(err);
         res.status(500).json({
            message: 'Не удалось получить данные о бронированиях',
         });
      }
   },
};
