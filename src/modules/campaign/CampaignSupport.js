import { Button } from "components/button";
import { Input } from "components/input";
import { useForm } from "react-hook-form";

const CampaignSupport = () => {
  const { control } = useForm();
  return (
    <div>
      <h2 className="text-lg font-semibold mb-5">Support</h2>
      <div className="rounded-xl text-xl font-medium bg-white w-full shadow-1 py-6 px-7 flex flex-col justify-center gap-y-5 text-text3">
        <p className="p-[10px] text-center">Pledge without reward</p>
        <Input
          name="pledge"
          className="px-5 py-3 text-left border border-strock rounded-md placeholder:text-text4"
          placeholder="$10"
          control={control}
        ></Input>
        <div className="p-5 flex flex-col items-start justify-center text-sm gap-y-[10px] rounded-xl bg-grayLight">
          <p className="font-semibold text-text2 text-left">
            Back it because you believe in it.
          </p>
          <p className="text-text3 font-normal">
            Support the project for no reward, just because it speaks to you.
          </p>
        </div>
        <Button kind="secondary">Continue</Button>
      </div>
    </div>
  );
};

export default CampaignSupport;
