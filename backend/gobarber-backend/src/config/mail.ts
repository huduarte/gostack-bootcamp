interface IMailConfig {
  driver: 'ethereal' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'hudson@rocket.seat.com.br', // com a amazon
      name: 'hudson da Rocketseat', // com a amazon
    },
  },
} as IMailConfig;
