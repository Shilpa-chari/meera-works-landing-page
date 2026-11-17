import styles from './RegistrationForm.module.css';
export default function RegistrationForm(){return <section id="register" className={styles.section} aria-labelledby="register-title"><h2 id="register-title">Be first to know.</h2><p>Join the launch list for practical updates.</p><form><label htmlFor="email">Email address</label><input id="email" type="email" name="email" required autoComplete="email"/><button type="submit">Join the list</button></form></section>}
// Add full name field, accessible client-side success state and submit handling without network calls.
