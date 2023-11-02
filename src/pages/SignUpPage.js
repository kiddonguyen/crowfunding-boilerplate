import { Button } from 'components/button';
import { Checkbox } from 'components/checkbox';
import FormGroup from 'components/common/FormGroup';
import { Input } from 'components/input';
import Label from 'components/label/Label';
import LayoutAuthentication from 'layout/LayoutAuthentication';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
const SignUpPage = () => {
  const {
    handleSubmit,
    control,
    // eslint-disable-next-line no-unused-vars
    formState: { isValid, isSubmitting },
  } = useForm({});
  const handleSignUp                = (values) => {
    console.log(values);
  };
  const [acceptTerm, setAcceptTerm] = useState(false);
  const handleToggleTerm            = () => {
    setAcceptTerm(!acceptTerm);
  };
  return (
    <LayoutAuthentication heading="Sign Up">
      <p className="text-center lg:text-sm font-medium text-xs font-normal text-text3 lg:mb-8 mb-6">
        Already have an account?{' '}
        <Link to="sign-in" className="text-primary font-medium underline">
          Sign in
        </Link>
      </p>
      <button className="flex items-center gap-x-3 w-full justify-center py-4 border border-strock rounded-xl mb-5">
        <img srcSet="/icon-google.png 2x" alt="Google" title="Google" />
        <span className="text-text2 text-base font-semibold">
          Sign up with Google
        </span>
      </button>
      <p className="text-center text-xs lg:text-sm font-normal mb-4 lg:mb-8 text-text2">
        Or sign up with email
      </p>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <FormGroup>
          <Label htmlFor="name">Fullname *</Label>
          <Input control={control} name="name" placeholder="John Doe" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email *</Label>
          <Input
            control={control}
            name="email"
            placeholder="example@gmail.com"
            type="email"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email *</Label>
          <Input
            control={control}
            name="email"
            placeholder="example@gmail.com"
            type="email"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password *</Label>
          <Input
            control={control}
            name="password"
            placeholder="Create a password"
            type="password"
          />
        </FormGroup>
        <div className="flex items-start gap-x-5 mb-5">
          <Checkbox name="term" checked={acceptTerm} onClick={handleToggleTerm}>
            <p className="text-sm text-text2 flex-1">
              I agree to the{' '}
              <span className="text-secondary underline">Terms of Use</span> and
              have read and understand the{' '}
              <span className="text-secondary underline">Privacy Policy</span>
            </p>
          </Checkbox>
        </div>
        <Button className="bg-primary w-full" type="submit">
          Create an account
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
