"use client";

import React from "react";
import {
  Form,
  Input,
  Select,
  SelectItem,
  Checkbox,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
} from "@heroui/react";
import AcmeLogo from "./acme-logo";
import { useActionState } from 'react';
import { authenticate } from '@/app/lib/actions';

type FormFields = {
  email: string;
  password: string;
  terms: string;
};

type Errors = Partial<Record<keyof FormFields, string>>;

export default function LoginsForm() {
  const [password, setPassword] = React.useState("");
  const [isPasswordTouched, setIsPasswordTouched] = React.useState(false);
  const [submitted, setSubmitted] = React.useState<FormFields | null>(null);
  const [errors, setErrors] = React.useState<Errors>({});

  // Real-time password validation
  const getPasswordError = (value: string) => {
    if (!value && isPasswordTouched) {
      return "Please enter your password";
    }
    if (value.length < 4) {
      return "Password must be 4 characters or more";
    }
    if ((value.match(/[A-Z]/g) || []).length < 1) {
      return "Password needs at least 1 uppercase letter";
    }
    if ((value.match(/[^a-z]/gi) || []).length < 1) {
      return "Password needs at least 1 symbol";
    }
    return null;
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as FormFields;

    const newErrors: Errors = {};

    // Set all fields as touched on submit
    setIsPasswordTouched(true);

    // Client-side validation
    const passwordError = getPasswordError(data.password);
    if (passwordError) {
      newErrors.password = passwordError;
    }

    if (data.terms !== "true") {
      newErrors.terms = "Please accept the terms";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitted(data);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
         <div className="flex flex-col items-center gap-4">
      <Card className="max-w-full w-[300px]">          
          
          <div className="flex relative w-full bg-gradient-to-tr from-[#FF72E1] to-[#F54C7A] rounded-2xl items-center justify-center h-[100px] py-12 px-8">
          {/* <Image
            removeWrapper
            alt="Relaxing app background"
            className="z-0 w-full h-[100px] object-cover"
            src="https://heroui.com/images/card-example-5.jpeg"
          /> */}
          </div>
          {/* <CardBody>
          <div className="w-32 text-white md:w-36">
            <AcmeLogo />
          </div>
          </CardBody> */}

          {/* <CardFooter className="absolute bg-black/80 bottom-0 z-10 border-t border-default-600 dark:border-default-100 w-full">
            <div className="w-full flex justify-center items-center">
                <p className="text-md font-bold text-white/60 text-center">LOGIN</p>
            </div>
            </CardFooter> */}
      </Card>

      <Card className="max-w-full w-[300px]">
        <CardBody className="pt-6 pb-8 overflow-hidden">
            
          <Form
            className="w-full justify-center items-center space-y-4"
            validationErrors={errors}
            onReset={() => {
              setSubmitted(null);
              setPassword("");
              setIsPasswordTouched(false);
            }}
            onSubmit={onSubmit}
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

              <div className="flex gap-4">
                <Button className="w-full" color="primary" type="submit">
                  Submit
                </Button>
                <Button type="reset" variant="bordered">
                  Reset
                </Button>
              </div>
            </div>

            {submitted && (
              <div className="text-small text-default-500 mt-4">
                Submitted data: <pre>{JSON.stringify(submitted, null, 2)}</pre>
              </div>
            )}
          </Form>
        </CardBody>
        
      </Card>
      </div>
    </div>
  );
}