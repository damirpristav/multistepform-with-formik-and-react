import { Input } from '../../../components';

export const Intro = () => {
  return (
    <div className="intro">
      <h1>Join our platform</h1>
      <p>Enter your email and follow the steps of the registration process.</p>
      <div className="intro__fields">
        <Input name="email" label="Email address" />
        <button type="submit" className="button">
          start &rarr;
        </button>
      </div>
    </div>
  );
};
