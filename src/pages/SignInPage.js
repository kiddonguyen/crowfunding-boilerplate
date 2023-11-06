import { yupResolver } from "@hookform/resolvers/yup";
import { Button, ButtonGoogle } from "components/button";
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
  email: yup.string().email("Invalid email address"),
  password: yup
    .string()
    .required("This field is required")
    .min(8, "Password must be at least 8 characters"),
});
const SignInPage = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });
  const { value: showPassword, handleToggleValue: handleTogglePassword } =
    useToggleValue();
  const handleSignIn                                                     = (values) => {
    console.log(values);
  };
  return (
    <LayoutAuthentication heading="Welcome back!">
      <p className="text-center lg:text-sm font-normal text-xs text-text3 lg:mb-8 mb-6">
        Don&apos;t have an account?{" "}
        <Link to="sign-up" className="text-primary font-medium underline">
          Sign up
        </Link>
      </p>
      <ButtonGoogle text="Sign in with Google" />
      <form onSubmit={handleSubmit(handleSignIn)}>
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
            placeholder="Please enter your password"
            type={showPassword ? "text" : "password"}
            error={errors.password?.message}
          >
            <IconEyeToggle open={showPassword} onClick={handleTogglePassword} />
          </Input>
        </FormGroup>
        <FormGroup>
          <div className="text-right">
            <span className="text-primary inline-block font-medium text-sm">
              Forgot password
            </span>
          </div>
        </FormGroup>
        <Button className="w-full" type="submit" kind="primary">
          Sign in
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignInPage;
