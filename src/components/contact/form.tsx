'use client';

import { useActionState } from 'react';
import { Form } from '@base-ui/react/form';
import { Button } from '@base-ui/react/button';
import { TextArea, TextInput, EmailInput } from '@/components/contact/inputs';

import { sendContactEmail } from '@/app/actions';

interface FormState {
  success?: boolean;
  serverErrors?: Form.Props['errors'];
}

const defaultFormState: FormState = {
  success: false,
  serverErrors: {},
};

export default function ContactForm() {
  const [state, formAction, loading] = useActionState<FormState, FormData>(
    sendContactEmail,
    defaultFormState
  );

  if (state.success) {
    return (
      <div
        aria-label="Success message"
        role="status"
        className="bg-green-600/20 shadow-xs outline outline-green-600 sm:rounded-xl h-120 md:aspect-square w-full md:max-w-xl dark:bg-green-950/50 dark:shadow-none dark:-outline-offset-1 dark:outline-green-500/10"
      >
        <div className="h-full flex flex-col justify-center items-center">
          <p className="text-headline font-black text-2xl md:text-4xl text-green-700">Success!</p>
          <p className="mt-2 text-green-900 text-center">
            Your message has been sent successfully.
          </p>
        </div>
      </div>
    );
  }

  return (
    <Form
      action={formAction}
      errors={state.serverErrors}
      validationMode="onBlur"
      className="bg-white shadow-xs outline outline-metal-900/5 sm:rounded-xl h-120 md:aspect-square w-full md:max-w-xl dark:bg-metal-950/50 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10"
    >
      <div className="px-4 py-6 sm:p-8 space-y-8">
        <TextInput name="name" label="Name" placeholder="Alan Turing" minLength={3} />
        <EmailInput name="email" label="Email" placeholder="alan.turing@example.com" />
        <TextArea
          name="message"
          label="Message"
          minLength={10}
          placeholder="Hi Big Pixel, I would like to learn more about your services for charities."
        />
        <Button
          type="submit"
          disabled={loading}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
        >
          {loading ? 'Sending...' : 'Send Message'}
        </Button>
        {state.serverErrors?.general && (
          <p className="text-sm text-red-600 dark:text-red-400">{state.serverErrors.general}</p>
        )}
      </div>
    </Form>
  );
}
