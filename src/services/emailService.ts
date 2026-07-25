import emailjs from '@emailjs/browser';

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_r2h1wbw',
  TEMPLATE_ID: 'template_4x0fapm',
  PUBLIC_KEY: 'e0m5R26o5a2VGezGc',
};

export interface EmailParams {
  name: string;
  phone: string;
  email: string;
  property: string;
  service: string;
  message: string;
}

/**
 * Validates email format.
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
};

/**
 * Sends a contact or quote request email using EmailJS.
 */
export const sendContactEmail = async (params: EmailParams): Promise<void> => {
  await emailjs.send(
    EMAILJS_CONFIG.SERVICE_ID,
    EMAILJS_CONFIG.TEMPLATE_ID,
    {
      name: params.name.trim(),
      phone: params.phone.trim(),
      email: params.email.trim(),
      property: params.property.trim(),
      service: params.service.trim(),
      message: params.message.trim(),
    },
    EMAILJS_CONFIG.PUBLIC_KEY
  );
};
