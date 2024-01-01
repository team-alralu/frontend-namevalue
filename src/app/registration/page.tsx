/* @jsxImportSource react */
import { RegistrationProvider } from '@registration/components';
import { RegistrationFunnel } from '@registration/RegistrationFunnel';

const Page = () => {
  return (
    <RegistrationProvider>
      <RegistrationFunnel />
    </RegistrationProvider>
  );
};

export default Page;
