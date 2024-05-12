import { Logo } from './components';
import { MultiStepFormProvider, MultiStepForm } from './modules';

function App() {
  return (
    <main className="main-wrapper">
      <div className="support">
        <div className="support__inner">
          <div className="logo">
            <Logo />
            <p>APP Name</p>
          </div>
          <div className="contact-support">
            <p>
              Need help? <br /> Contact our customer support
            </p>
            <p>
              <a href="mailto:support@domain.com">support@domain.com</a>
            </p>
            <p>
              <a href="tel:1234567890">123 456 7890</a>
            </p>
          </div>
        </div>
      </div>
      <div className="content">
        <MultiStepFormProvider>
          <MultiStepForm />
        </MultiStepFormProvider>
      </div>
    </main>
  );
}

export default App;
