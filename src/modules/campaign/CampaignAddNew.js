import { Button } from "components/button";
import FormGroup from "components/common/FormGroup";
import FormRow from "components/common/FormRow";
import { Dropdown } from "components/dropdown";
import { Input, Textarea } from "components/input";
import { Label } from "components/label";
import ImageUploader from "quill-image-uploader";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
Quill.register("modules/imageUploader", ImageUploader);

const CampaignAddNew = () => {
  const { handleSubmit, control } = useForm();
  const handleAddNewCampaign      = (values) => {
    console.log(values);
  };
  const [content, setContent]     = useState("");
  const modules = useMemo(
    () => ({
      toolbar: [
        ["bold", "italic", "underline", "strike"],
        ["blockquote"],
        [{ header: 1 }, { header: 2 }],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["link", "image"],
      ],
      imageUploader: {
        // upload: async (file) => {
        //   const bodyFormData = new FormData();
        //   bodyFormData.append('image', file);
        //   const response = await axios({
        //     method: 'post',
        //     url: 'https://api.imgbb.com/1/upload?key=518f78dcd49f02c05bc4c2444e566f2e',
        //     data: bodyFormData,
        //     headers: {
        //       'Content-Type': 'multipart/form-data',
        //     },
        //   });
        //   return response.data.data.url;
        // },
      },
    }),
    [],
  );

  return (
    <div className="bg-white rounded-xl py-10 px-[66px]">
      <div className="text-center">
        <h1 className="py-4 px-16 bg-text4 bg-opacity-5 rounded-xl font-bold text-[25px] inline-block mb-10">
          Start a Campaign
        </h1>
        <form onSubmit={handleSubmit(handleAddNewCampaign)}>
          <FormRow>
            <FormGroup>
              <Label className="text-left">Campaign Title *</Label>
              <Input
                control={control}
                name="title"
                placeholder="Write a title"
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label className="text-left">Select a category *</Label>
              <Dropdown>
                <Dropdown.Select placeholder="Please select a category"></Dropdown.Select>
                <Dropdown.List>
                  <Dropdown.Option>Architecture</Dropdown.Option>
                  <Dropdown.Option>Crypto</Dropdown.Option>
                </Dropdown.List>
              </Dropdown>
            </FormGroup>
          </FormRow>
          <FormGroup>
            <Label className="text-left">Short Description *</Label>
            <Textarea
              name="short_description"
              placeholder="Write a short description..."
              control={control}
            ></Textarea>
          </FormGroup>
          <FormGroup>
            <Label className="text-left">Story *</Label>
            <ReactQuill
              modules={modules}
              placeholder="Write your story..."
              theme="snow"
              value={content}
              onChange={setContent}
            />
          </FormGroup>
          <FormRow>
            <FormGroup>
              <Label className="text-left">Raised amount *</Label>
              <Input
                control={control}
                name="amount"
                placeholder="$0.00 USD"
              ></Input>
            </FormGroup>
          </FormRow>
          <FormRow>
            <FormGroup>
              <Label className="text-left">Amount Prefilled</Label>
              <Input
                control={control}
                name="prefilled"
                placeholder="Amount Prefilled"
              ></Input>
              <p className="text-left text-sm text-text3">
                It will help fill amount box by click, place each amount by
                comma, ex: 10,20,30,40
              </p>
            </FormGroup>
            <FormGroup>
              <Label className="text-left">Video</Label>
              <Input
                control={control}
                name="video"
                placeholder="$0.00 USD"
              ></Input>
              <p className="text-left text-sm text-text3">
                Place Youtube or Vimeo Video URL
              </p>
            </FormGroup>
          </FormRow>
          <FormRow>
            <FormGroup>
              <Label className="text-left">Campaign End Method</Label>
              <Dropdown>
                <Dropdown.Select placeholder="Select one"></Dropdown.Select>
                <Dropdown.List>
                  <Dropdown.Option></Dropdown.Option>
                  <Dropdown.Option></Dropdown.Option>
                </Dropdown.List>
              </Dropdown>
            </FormGroup>
            <FormGroup>
              <Label className="text-left">Country</Label>
              <Dropdown>
                <Dropdown.Select placeholder="Select country"></Dropdown.Select>
                <Dropdown.List>
                  <Dropdown.Option></Dropdown.Option>
                  <Dropdown.Option></Dropdown.Option>
                </Dropdown.List>
              </Dropdown>
            </FormGroup>
          </FormRow>
          <FormRow>
            <FormGroup>
              <Label className="text-left">Start Date</Label>
              <Input
                control={control}
                name="start_date"
                placeholder="Start Date"
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label className="text-left">End Date</Label>
              <Input
                control={control}
                name="end_date"
                placeholder="End Date"
              ></Input>
            </FormGroup>
          </FormRow>
          <div className="text-center mt-10">
            <Button className="bg-primary mx-auto text-white px-10">
              Submit new campaign
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CampaignAddNew;
