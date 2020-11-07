import AppError from '@shared/errors/AppError';
import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let createAppointment: CreateAppointmentService;

describe('CreateAppointment', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );
  });

  it('should be able to create a new appointment', async () => {
    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 10, 8, 12).getTime();
    });

    const appointment = await createAppointment.execute({
      date: new Date(2020, 10, 8, 13),
      user_id: 'user',
      provider_id: '123456',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('123456');
  });

  it('should not be able to create two appointments on the same time', async () => {
    const appointmentDate = new Date(2020, 11, 10, 11);

    await createAppointment.execute({
      date: appointmentDate,
      provider_id: '123456',
      user_id: 'user',
    });

    await expect(
      createAppointment.execute({
        date: appointmentDate,
        provider_id: '123456',
        user_id: 'user',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to create an appointment on a past date', async () => {
    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 10, 5, 12).getTime();
    });

    await expect(
      createAppointment.execute({
        date: new Date(2020, 10, 5, 11),
        provider_id: '123456',
        user_id: 'user',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to create an appointment with same user as provider', async () => {
    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 10, 5, 12).getTime();
    });

    await expect(
      createAppointment.execute({
        date: new Date(2020, 10, 5, 13),
        provider_id: '123456',
        user_id: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to create an appointment before 8am and after 5pm', async () => {
    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 10, 10, 12).getTime();
    });

    await expect(
      createAppointment.execute({
        date: new Date(2020, 10, 11, 7),
        provider_id: '123456',
        user_id: 'user',
      }),
    ).rejects.toBeInstanceOf(AppError);

    await expect(
      createAppointment.execute({
        date: new Date(2020, 10, 11, 18),
        provider_id: '123456',
        user_id: 'user',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
