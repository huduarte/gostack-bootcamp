import { injectable, inject } from 'tsyringe';

// import AppError from '@shared/errors/AppError';
import IUsersRepository from '../repositories/IUsersRepository';

// import User from '../infra/typeorm/entities/User';

interface IRequest {
  email: string;
}

@injectable()
class SendForgotPassordEmailService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({}: IRequest): Promise<void> {}
}

export default SendForgotPassordEmailService;
