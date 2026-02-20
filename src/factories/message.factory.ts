import { MessageModel } from '../models/message.model';
import { faker } from '@faker-js/faker';

function getRandomSubject(): string {
  const availableSubjects = [
    'customer-service',
    'webmaster',
    'return',
    'payments',
    'warranty',
    'status-of-order',
  ];
  const randomIndex = Math.floor(Math.random() * availableSubjects.length);
  return availableSubjects[randomIndex];
}

export function prepareRandomMessage(messageLength: number = 50): MessageModel {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const email = faker.internet.email();
  const subject = getRandomSubject();
  const message = faker.string.alpha(messageLength);

  const newMessage = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    subject: subject,
    message: message,
  };

  return newMessage;
}
