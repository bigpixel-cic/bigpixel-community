import { Field } from '@base-ui/react/field';

export function TextInput({
  name,
  label,
  placeholder,
  minLength,
}: {
  name: string;
  label: string;
  placeholder?: string;
  minLength?: number;
}) {
  return (
    <Field.Root name={name}>
      <Field.Label className="block text-sm/6 font-semibold text-metal-900 dark:text-metal-50">
        {label}
      </Field.Label>
      <div className="mt-2">
        <Field.Control
          type="text"
          required
          minLength={minLength}
          placeholder={placeholder}
          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-metal-900 data-invalid:text-red-900 data-invalid:dark:text-red-400 outline-1 -outline-offset-1 outline-metal-300 data-invalid:outline-red-500 placeholder:text-metal-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-metal-500 dark:focus:outline-indigo-500"
        />
      </div>
      <Field.Error className="text-sm text-red-600 dark:text-red-400" />
    </Field.Root>
  );
}

export function EmailInput({
  name,
  label,
  placeholder,
}: {
  name: string;
  label: string;
  placeholder?: string;
}) {
  return (
    <Field.Root name={name}>
      <Field.Label className="block text-sm/6 font-semibold text-metal-900 dark:text-metal-50">
        {label}
      </Field.Label>
      <div className="mt-2">
        <Field.Control
          type="email"
          required
          placeholder={placeholder}
          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-metal-900 data-invalid:text-red-900 data-invalid:dark:text-red-400 outline-1 -outline-offset-1 outline-metal-300 data-invalid:outline-red-500 placeholder:text-metal-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-metal-500 dark:focus:outline-indigo-500"
        />
      </div>
      <Field.Error className="text-sm text-red-600 dark:text-red-400" />
    </Field.Root>
  );
}

export function TextArea({
  name,
  label,
  placeholder,
  minLength,
}: {
  name: string;
  label: string;
  placeholder?: string;
  minLength?: number;
}) {
  return (
    <Field.Root name={name}>
      <Field.Label className="block text-sm/6 font-semibold text-metal-900 dark:text-metal-50">
        {label}
      </Field.Label>
      <div className="mt-2">
        <Field.Control
          render={<textarea rows={5} />}
          required
          minLength={minLength}
          placeholder={placeholder}
          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-metal-900 data-invalid:text-red-900 data-invalid:dark:text-red-400 outline-1 -outline-offset-1 outline-metal-300 data-invalid:outline-red-500 placeholder:text-metal-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-metal-500 dark:focus:outline-indigo-500"
        />
      </div>
      <Field.Error className="text-sm text-red-600 dark:text-red-400" />
    </Field.Root>
  );
}
