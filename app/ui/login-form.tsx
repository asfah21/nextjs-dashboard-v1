"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Input,
  Form,
  Checkbox,
  Button,
  Card,
  CardBody,
  Spinner,
} from "@heroui/react";
import { useActionState } from 'react';
import { authenticate } from '@/app/lib/actions';
import { useFormStatus } from 'react-dom';

type FormFields = {
  email: string;
  password: string;
  terms: string;
};

type Errors = Partial<Record<keyof FormFields, string>>;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button 
      className="w-full" 
      color="primary" 
      type="submit"
      disabled={pending}
    >
      {pending ? "Signing in..." : "Sign In"}
    </Button>
  );
}

export default function LoginForm() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [isPasswordTouched, setIsPasswordTouched] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);
  const { pending } = useFormStatus();

  // Initialize useActionState with proper error handling
  const [, formAction] = useActionState(
    async (previousState: string | undefined, formData: FormData) => {
      // Client-side validation
      const newErrors: Errors = {};
      const passwordValue = formData.get("password") as string;
      const termsValue = formData.get("terms") as string;

      // Check terms first
      if (termsValue !== "true") {
        setErrors({ terms: "Please accept the terms" });
        return undefined;
      }

      // Password validation
      const passwordError = getPasswordError(passwordValue);
      if (passwordError) {
        newErrors.password = passwordError;
        setErrors(newErrors);
        return undefined;
      }

      // If client-side validation passes, proceed with server authentication
      setErrors({});
      const result = await authenticate(undefined, formData);
      
      // If no error returned (success), redirect to dashboard
      if (result === undefined) {
        router.push('/dashboard');
        return undefined;
      }

      // Set error message for server-side error
      setErrorMessage(result);
      
      // Reset password touched state on authentication failure
      setIsPasswordTouched(false);
      
      return undefined;
    },
    undefined
  );

  // Handle error message display for 2 seconds
  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage(undefined);
      }, 2500);

      // Cleanup timer to prevent memory leak
      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  // Real-time password validation
  const getPasswordError = (value: string) => {
    if (!value && isPasswordTouched) {
      return "Please enter your password";
    }
    if (value.length < 4) {
      return "Password must be 4 characters or more";
    }
    // if ((value.match(/[A-Z]/g) || []).length < 1) {
    //   return "Password needs at least 1 uppercase letter";
    // }
    // if ((value.match(/[^a-z]/gi) || []).length < 1) {
    //   return "Password needs at least 1 symbol";
    // }
    return null;
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen relative">
      {pending && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <Spinner size="lg" />
        </div>
      )}
      <div className="flex flex-col items-center gap-4">
        <Card className="max-w-full w-[300px]">          
          <div className="flex relative w-full bg-gradient-to-tr from-[#FF72E1] to-[#F54C7A] rounded-2xl items-center justify-center h-[100px] py-12 px-8">
          </div>
        </Card>

        <Card className="max-w-full w-[300px]">
          <CardBody className="pt-6 pb-8 overflow-hidden">
            <Form
              action={formAction}
              className="w-full justify-center items-center space-y-4"
              onReset={() => {
                setErrors({});
                setErrorMessage(undefined);
              }}
            >
              <div className="font-bold text-xl">
                <h1>Log In 👋</h1>
              </div>
              <div className="flex flex-col gap-4 max-w-md">
                <Input
                  isRequired
                  errorMessage={({ validationDetails }) => {
                    if (validationDetails.valueMissing) {
                      return "Please enter your email";
                    }
                    if (validationDetails.typeMismatch) {
                      return "Please enter a valid email address";
                    }
                  }}
                  label="Email"
                  labelPlacement="outside"
                  name="email"
                  placeholder="Enter your email"
                  type="email"
                />

                <Input
                  isRequired
                  errorMessage={isPasswordTouched ? getPasswordError(password) : undefined}
                  isInvalid={isPasswordTouched && getPasswordError(password) !== null}
                  label="Password"
                  labelPlacement="outside"
                  name="password"
                  placeholder="Enter your password"
                  type="password"
                  value={password}
                  onBlur={() => setIsPasswordTouched(true)}
                  onValueChange={setPassword}
                />

                <Checkbox
                  isRequired
                  classNames={{
                    label: "text-small",
                  }}
                  isInvalid={!!errors.terms}
                  name="terms"
                  validationBehavior="aria"
                  value="true"
                  onValueChange={() =>
                    setErrors((prev) => ({ ...prev, terms: undefined }))
                  }
                >
                  I agree to the terms and conditions
                </Checkbox>

                {errors.terms && (
                  <span className="text-danger text-small">{errors.terms}</span>
                )}

                {/* Display server-side error message for 2 seconds */}
                {errorMessage && (
                  <div className="text-danger text-small">
                    {errorMessage === "Invalid credentials."
                      ? "Wrong email or password. Please try again."
                      : errorMessage}
                  </div>
                )}

                <div className="flex gap-4">
                  <SubmitButton />
                  <Button type="reset" variant="bordered">
                    Reset
                  </Button>
                </div>
              </div>
            </Form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}