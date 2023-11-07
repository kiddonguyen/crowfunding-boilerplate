import axios from "axios";
import { Button } from "components/button";
import FormGroup from "components/common/FormGroup";
import FormRow from "components/common/FormRow";
import { Dropdown } from "components/dropdown";
import ImageUpload from "components/image/ImageUpload";
import { Input, Textarea } from "components/input";
import { Label } from "components/label";
import { apiUrl } from "config/config";
import useOnChange from "hooks/useOnChange";
import ImageUploader from "quill-image-uploader";
import { useEffect, useMemo, useState } from "react";
import "react-calendar/dist/Calendar.css";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import { useForm } from "react-hook-form";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import { toast } from "react-toastify";
Quill.register("modules/imageUploader", ImageUploader);
const categoriesData = ["architecture", "education", "technology"];
const CampaignAddNew = () => {
  const { handleSubmit, control, setValue, reset, watch } = useForm();
  const getDropdownLabel                                  = (name, defaultValue) => {
    const value = watch(name) || defaultValue;
    return value;
  };
  const [countries, setCountries]                                  = useState([]);
  const [startDate, setStartDate]                                  = useState(new Date());
  const [endDate, setEndDate]                                      = useState(new Date());
  const [content, setContent]                                      = useState("");
  const resetValues                                                = () => {
    setStartDate("");
    setEndDate("");
    reset({});
  };
  const { value: filterCountry, handleOnChange: setFilterCountry } =
    useOnChange(500);
  const handleAddNewCampaign                                       = async (values) => {
    try {
      await axios.post(`${apiUrl}/campaigns`, {
        ...values,
        content,
        startDate,
        endDate,
      });
      toast.success("Create campaign successfully");
      resetValues();
    } catch (e) {
      toast.error("Cannot create new campaign");
    }
  };
  const modules                                                    = useMemo(
    () => ({
      toolbar: [
        ["bold", "italic", "underline", "strike"],
        ["blockquote"],
        [{ header: 1 }, { header: 2 }],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["link", "image"],
      ],
      imageUploader: {},
    }),
    [],
  );
  useEffect(() => {
    if (!filterCountry) {
      return;
    }
    async function fetchCountry() {
      try {
        let url   = `https://restcountries.com/v3.1/name/${filterCountry}`;
        const res = await axios.get(url);
        setCountries(res.data);
      } catch (error) {
        toast.error(error.message);
      }
    }
    fetchCountry();
  }, [filterCountry]);
  const handleSelectDropdownOption = (name, value) => {
    setValue(name, value);
  };
  return (
    <div className="bg-white rounded-xl py-10 px-[66px]">
      <div className="text-center">
        <h1 className="py-4 px-16 bg-text4 bg-opacity-5 rounded-xl font-bold text-[25px] inline-block mb-10">
          Start a Campaign
        </h1>
        <form onSubmit={handleSubmit(handleAddNewCampaign)}>
          <FormRow>
            <FormGroup>
              <Label>Campaign Title *</Label>
              <Input
                control={control}
                name="title"
                placeholder="Write a title"
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label>Select a category *</Label>
              <Dropdown>
                <Dropdown.Select
                  placeholder={getDropdownLabel("category", "Select category")}
                ></Dropdown.Select>
                <Dropdown.List>
                  {categoriesData.map((category) => (
                    <Dropdown.Option
                      key={category}
                      onClick={() =>
                        handleSelectDropdownOption("category", category)
                      }
                    >
                      <span className="capitalize">{category}</span>
                    </Dropdown.Option>
                  ))}
                </Dropdown.List>
              </Dropdown>
            </FormGroup>
          </FormRow>
          <FormGroup>
            <Label>Short Description *</Label>
            <Textarea
              name="short_description"
              placeholder="Write a short description..."
              control={control}
            ></Textarea>
          </FormGroup>
          <FormGroup>
            <Label>Story *</Label>
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
              <Label>Featured Image</Label>
              <ImageUpload
                onChange={setValue}
                name="featured_image"
              ></ImageUpload>
            </FormGroup>
            <FormGroup></FormGroup>
          </FormRow>
          <FormRow>
            <FormGroup>
              <Label>Goal*</Label>
              <Input
                control={control}
                name="goal"
                placeholder="$0.00 USD"
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label>Raised amount *</Label>
              <Input
                control={control}
                name="amount"
                placeholder="$0.00 USD"
              ></Input>
            </FormGroup>
          </FormRow>
          <FormRow>
            <FormGroup>
              <Label>Amount Prefilled</Label>
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
              <Label>Video</Label>
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
              <Label>Campaign End Method</Label>
              <Dropdown>
                <Dropdown.Select
                  placeholder={getDropdownLabel("method", "Select method")}
                ></Dropdown.Select>
                <Dropdown.List>
                  <Dropdown.Option></Dropdown.Option>
                  <Dropdown.Option></Dropdown.Option>
                </Dropdown.List>
              </Dropdown>
            </FormGroup>
            <FormGroup>
              <Label>Country</Label>
              <Dropdown>
                <Dropdown.Select
                  placeholder={getDropdownLabel("country", "Select country")}
                ></Dropdown.Select>
                <Dropdown.List>
                  <Dropdown.Search
                    placeholder="Search country..."
                    onChange={(e) => setFilterCountry(e)}
                  ></Dropdown.Search>
                  {countries?.map((country) => (
                    <Dropdown.Option
                      key={country?.name?.common}
                      onClick={() =>
                        handleSelectDropdownOption(
                          "country",
                          country?.name?.common,
                        )
                      }
                    >
                      {country?.name?.common}
                    </Dropdown.Option>
                  ))}
                </Dropdown.List>
              </Dropdown>
            </FormGroup>
          </FormRow>
          <FormRow>
            <FormGroup>
              <Label>Start Date</Label>
              <DatePicker
                onChange={setStartDate}
                value={startDate}
                format="dd-MM-yyyy"
              />
            </FormGroup>
            <FormGroup>
              <Label>End Date</Label>
              <DatePicker
                onChange={setEndDate}
                value={endDate}
                format="dd-MM-yyyy"
              />
            </FormGroup>
          </FormRow>
          <div className="text-center mt-10">
            <Button
              className="bg-primary mx-auto text-white px-10"
              type="submit"
            >
              Submit new campaign
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CampaignAddNew;
