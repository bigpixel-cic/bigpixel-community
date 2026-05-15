'use server';

import { resend } from '@/lib/resend';

interface FormState {
  success?: boolean;
  serverErrors?: {
    name?: string;
    email?: string;
    message?: string;
    general?: string;
  };
}

export async function sendContactEmail(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  if (!name) {
    return {
      success: false,
      serverErrors: {
        name: 'A name is required',
      },
    };
  }

  if (!email) {
    return {
      success: false,
      serverErrors: {
        email: 'An email is required',
      },
    };
  }

  if (!message) {
    return {
      success: false,
      serverErrors: {
        message: 'A message is required',
      },
    };
  }

  const fromEmail =
    process.env.EMAIL_FROM || 'Big Pixel Community CIC <no-reply@form.bigpixel.org.uk>';
  const contactEmail =
    process.env.CONTACT_EMAIL || 'Big Pixel Community CIC <hello@bigpixel.org.uk>';

  try {
    const { error } = await resend.batch.send([
      {
        from: fromEmail!,
        to: contactEmail!,
        subject: `New contact form submission from ${name}`,
        template: {
          id: 'contact-form-office',
          variables: {
            NAME: name,
            USER_EMAIL: email,
            MESSAGE: message,
            SUBMITTED: new Date().toLocaleString('en-GB', {
              timeZone: 'Europe/London',
              dateStyle: 'long',
              timeStyle: 'short',
            }),
          },
        },
      },
      {
        from: fromEmail!,
        to: email,
        subject: 'Your form has been received.',
        template: {
          id: 'contact-form-user',
          variables: {
            NAME: name,
          },
        },
      },
    ]);

    if (error) {
      console.error('Resend batch error:', error);
      return {
        success: false,
        serverErrors: { general: error.message },
      };
    }

    return {
      success: true,
      serverErrors: {},
    };
  } catch (err) {
    console.error('Unexpected error:', err);
    return {
      success: false,
      serverErrors: { general: 'Failed to send email. Please try again.' },
    };
  }
}
