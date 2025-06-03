import { Suspense } from "react";
import RegisForm from "../ui/regis-form";
import AcmeLogo from "../ui/acme-logo";

export default function RegisPage() {
  return (
      <div className="">
        <Suspense>
          <RegisForm />
        </Suspense>
      </div>
  );
}
