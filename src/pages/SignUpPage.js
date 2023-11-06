import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "components/button";
import { ButtonGoogle } from "components/button/";
import { Checkbox } from "components/checkbox";
import FormGroup from "components/common/FormGroup";
import { IconEyeToggle } from "components/icons";
import { Input } from "components/input";
import Label from "components/label/Label";
import useToggleValue from "hooks/useToggleValue";
import LayoutAuthentication from "layout/LayoutAuthentication";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";
const schema     = yup.object({
  name: yup.string().required("This field is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("This field is required"),
  password: yup
    .string()
    .required("This field is required")
    .min(8, "Password must be at least 8 characters"),
});
const SignUpPage = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });
  const { value: acceptTerm, handleToggleValue: handleToggleTerm }       = useToggleValue();
  const { value: showPassword, handleToggleValue: handleTogglePassword } =
    useToggleValue();
  const handleSignUp                                                     = (values) => {
    console.log(values);
  };
  return (
    <LayoutAuthentication heading="Sign Up">
      <p className="text-center lg:text-sm font-medium text-xs text-text3 lg:mb-8 mb-6">
        Already have an account?{" "}
        <Link to="sign-in" className="text-primary font-medium underline">
          Sign in
        </Link>
      </p>
      <ButtonGoogle text="Sign up with Google" />
      <p className="text-center text-xs lg:text-sm font-normal mb-4 lg:mb-8 text-text2 dark:text-white">
        Or sign up with email
      </p>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <FormGroup>
          <Label htmlFor="name">Fullname *</Label>
          <Input
            control={control}
            name="name"
            placeholder="John Doe"
            error={errors.name?.message}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email *</Label>
          <Input
            control={control}
            name="email"
            placeholder="example@gmail.com"
            type="email"
            error={errors.email?.message}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password *</Label>
          <Input
            control={control}
            name="password"
            placeholder="Create a password"
            type={showPassword ? "text" : "password"}
            error={errors.password?.message}
          >
            <IconEyeToggle open={showPassword} onClick={handleTogglePassword} />
          </Input>
        </FormGroup>
        <div className="flex items-start gap-x-5 mb-5">
          <Checkbox name="term" checked={acceptTerm} onClick={handleToggleTerm}>
            <p className="lg:text-sm text-text2 flex-1 text-xs dark:text-text3">
              I agree to the{" "}
              <span className="text-secondary underline">Terms of Use</span> and
              have read and understand the{" "}
              <span className="text-secondary underline">Privacy Policy</span>
            </p>
          </Checkbox>
        </div>
        <Button className="w-full" type="submit" kind="primary">
          Create an account
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
