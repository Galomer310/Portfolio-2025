/**
 * The contact form.
 *
 * WHAT CHANGED FROM THE OLD ONE
 * It used to call EmailJS with three `import.meta.env` values that were never
 * configured, so every send failed and the visitor was told "Failed to send
 * email. Please try again later." — which blames the network for a setup fault
 * and leaves them with nowhere to go.
 *
 * Now the keys are checked BEFORE the form is offered. Missing, and the form
 * is replaced by the address, because a form that cannot send is worse than no
 * form. Present but failing, and the message says to email directly and gives
 * the address.
 */
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ui, useLang } from '../i18n';

const EMAIL = 'galomer6708@gmail.com';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const CONFIGURED = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

type State = 'idle' | 'sending' | 'sent' | 'failed';

const Contact: React.FC = () => {
  const { t } = useLang();
  const [state, setState] = useState<State>('idle');

  const send = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!CONFIGURED || state === 'sending') return;
    setState('sending');
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.currentTarget, PUBLIC_KEY);
      setState('sent');
    } catch {
      setState('failed');
    }
  };

  return (
    <section className="contact" id="contact">
      <h2>{t(ui.contactTitle)}</h2>
      <p className="contact-lead">{t(ui.contactLead)}</p>

      {CONFIGURED ? (
        <form onSubmit={send} className="contact-form">
          <label className="field">
            <span className="field-label">{t(ui.yourName)}</span>
            <input type="text" name="user_name" required autoComplete="name" />
          </label>
          <label className="field">
            <span className="field-label">{t(ui.yourEmail)}</span>
            {/* dir="ltr" so an address typed in a Hebrew page still reads correctly. */}
            <input type="email" name="user_email" required autoComplete="email" dir="ltr" />
          </label>
          <label className="field">
            <span className="field-label">{t(ui.yourMessage)}</span>
            <textarea name="message" rows={5} required />
          </label>

          <button type="submit" className="btn btn-primary" disabled={state === 'sending'}>
            <span className="mono sigil" aria-hidden="true">%</span>
            {state === 'sending' ? t(ui.sending) : t(ui.send)}
          </button>

          {/* aria-live so a screen reader hears the outcome without moving focus. */}
          <p className="form-status" role="status" aria-live="polite">
            {state === 'sent' && t(ui.sent)}
            {state === 'failed' && t(ui.sendFailed)}
          </p>
        </form>
      ) : (
        <p className="form-status">{t(ui.formUnconfigured)}</p>
      )}

      <p className="contact-direct mono" dir="ltr">
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
      </p>
    </section>
  );
};

export default Contact;
